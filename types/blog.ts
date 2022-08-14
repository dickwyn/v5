import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface BlogProps {
    source: MDXRemoteSerializeResult;
    frontMatter: FrontMatter;
}

export interface FrontMatter {
    title: string;
    subtitle?: string;
    summary: string;
    timestamp: string;
    featured: boolean;
    featuredImage: string;
    tagList: string[];
    slug: string;
}
