const nextConfig = {
  experimental: {
    ppr: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        hostname: 'firebasestorage.googleapis.com',
      },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },
  transpilePackages: ['next-mdx-remote', 'react-tweet'],
  reactStrictMode: true,
};

export default nextConfig;
