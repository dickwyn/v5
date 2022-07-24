import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface BlogProps {
  source: MDXRemoteSerializeResult;
  frontMatter: Frontmatter;
}

export interface Frontmatter {
  templateKey?: string;
  author: string;
  title: string;
  date: string;
  description: string;
  featured: boolean;
  featuredImage: string;
  tagList: string[];
}
