import { hostname } from 'os';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        hostname: 'firebasestorage.googleapis.com',
      },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
      { hostname: 'kajabi-storefronts-production.kajabi-cdn.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'assets.aceternity.com' },
      { hostname: 'framerusercontent.com' },
      { hostname: 'survivalgear.us' },
      { hostname: 'ouch-cdn2.icons8.com' },
      { hostname: 'cloudflare-ipfs.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'loremflickr.com' },
      { hostname: 'picsum.photos' },
      { hostname: 'fiverr-res.cloudinary.com' },
      { hostname: 'randomuser.me' },
      { hostname: 'cdn.buymeacoffee.com' },
      { hostname: 'cdn.prod.website-files.com' },
      { hostname: 'yt3.ggpht.com' },
      { hostname: 'yc-directory-woad.vercel.app' },
      { hostname: 'ticketr-pink.vercel.app' },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['next-mdx-remote', 'react-tweet'],
  reactStrictMode: true,
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
