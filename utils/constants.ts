import fs from 'fs';
import path from 'path';

export const CONTENT_PATH = path.join(process.cwd(), 'content', 'blog');

export const FILE_PATH_LIST = fs.readdirSync(CONTENT_PATH).filter((path) => /\.mdx?$/.test(path));
