import { ReactNode } from 'react';

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

type Stack = {
  name:
    | 'nextjs'
    | 'reactjs'
    | 'tailwind'
    | 'typescript'
    | 'nodejs'
    | 'headlessui'
    | 'postgres'
    | 'vercel'
    | 'drizzle'
    | 'prisma'
    | 'mdx';
  icon: ReactNode;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  logo?: string | ReactNode;
  thumbnail: string;
  stack: Stack[];
  repo: string;
  live_url: string;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  logo: string;
  role: string;
  website: string;
  avatar: string;
  text: string;
  video?: string;
};
