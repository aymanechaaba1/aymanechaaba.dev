import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontMatter from 'remark-frontmatter';
import { remarkAlert } from 'remark-github-blockquote-alert';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkGfm], [remarkFrontMatter], remarkAlert],
    rehypePlugins: [[rehypePrettyCode], [rehypeSlug]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
