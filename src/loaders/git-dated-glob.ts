import { execFileSync } from 'node:child_process';
import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { glob } from 'astro/loaders';

type GlobOptions = Parameters<typeof glob>[0];

interface GitCommit {
    hash: string;
    date: string;
}

const getPostBody = (revision: string, filePath: string, cwd: string) => {
    const content = execFileSync('git', ['show', `${revision}:${filePath}`], {
        cwd,
        encoding: 'utf8',
    });
    const frontmatterEnd = content.indexOf('\n---', 3);

    return frontmatterEnd === -1 ? content : content.slice(frontmatterEnd + 4);
};

const hasMeaningfulBodyChange = (commit: GitCommit, filePath: string, cwd: string) =>
    getPostBody(`${commit.hash}^`, filePath, cwd).replaceAll(/\s/g, '') !==
    getPostBody(commit.hash, filePath, cwd).replaceAll(/\s/g, '');

const getGitDates = (filePath: string, cwd: string) => {
    const output = execFileSync('git', ['log', '--follow', '--format=%H%x09%cI', '--', filePath], {
        cwd,
        encoding: 'utf8',
    }).trim();

    if (output === '') {
        return undefined;
    }

    const commits = output
        .split('\n')
        .map((line) => line.split('\t'))
        .map(([hash, date]) => ({ hash, date }));
    const updatedCommit = commits
        .slice(0, -1)
        .find((commit) => hasMeaningfulBodyChange(commit, filePath, cwd));

    return {
        published: commits.at(-1)?.date,
        updated: updatedCommit?.date,
    };
};

export const gitDatedGlob = (options: GlobOptions) => {
    const loader = glob(options);

    return {
        ...loader,
        name: 'git-dated-glob',
        async load(context: Parameters<typeof loader.load>[0]) {
            context.store.clear();
            await loader.load(context);

            const rootPath = fileURLToPath(context.config.root);

            for (const [id, entry] of context.store.entries()) {
                if (entry.filePath === undefined) {
                    throw new Error(
                        `Cannot determine Git dates for blog entry "${id}" without a file path.`
                    );
                }

                const filePath = resolve(rootPath, entry.filePath);
                let gitDates: ReturnType<typeof getGitDates>;

                try {
                    gitDates = getGitDates(entry.filePath, rootPath);
                } catch (error) {
                    throw new Error(`Failed to read Git history for blog entry "${id}".`, {
                        cause: error,
                    });
                }

                const explicitDate =
                    typeof entry.data.date === 'string' && entry.data.date !== ''
                        ? entry.data.date
                        : undefined;
                let published = explicitDate ?? gitDates?.published;

                if (published === undefined) {
                    const fileStats = await stat(filePath);
                    published = fileStats.birthtime.toISOString();
                    context.logger.warn(
                        `Blog entry "${id}" has no date override or Git history; using its filesystem creation date until it is committed.`
                    );
                }

                const updated =
                    gitDates?.updated !== undefined &&
                    new Date(gitDates.updated).getTime() > new Date(published).getTime()
                        ? gitDates.updated
                        : undefined;

                context.store.delete(id);
                context.store.set({
                    ...entry,
                    data: {
                        ...entry.data,
                        date: published,
                        updated,
                    },
                });
            }
        },
    };
};
