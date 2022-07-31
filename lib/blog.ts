/* eslint-disable no-param-reassign */
import fs from 'fs';
import matter from 'gray-matter';
import path, { join } from 'path';

export const POSTS_PATH = path.join(process.cwd(), 'content', 'blog');

export const getPostBySlug = (postPath: string) => {
  const realSlug = postPath.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const { content, data } = matter(fs.readFileSync(fullPath, 'utf8'));

  return { content, frontMatter: { ...data, date: data.date, slug: realSlug } };
};

export const getAllPosts = (): any =>
  fs
    .readdirSync(POSTS_PATH)
    // TODO filter out fields that are needed
    .map((postPath) => getPostBySlug(postPath).frontMatter)
    .sort(({ date: a }, { date: b }) => (a > b ? -1 : 1));
