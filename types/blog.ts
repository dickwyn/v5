import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface BlogProps {
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
}

export interface FrontMatter {
  templateKey?: string;
  author: string;
  title: string;
  date: string;
  description: string;
  featured: boolean;
  featuredImage: string;
  tagList: string[];
  slug: string;
}
