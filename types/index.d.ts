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
    | 'mdx'
    | 'sanity'
    | 'zustand'
    | 'clerk'
    | 'convex'
    | 'stripe'
    | 'langchain'
    | 'anthropic';
  icon: ReactNode;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  logo?: {
    url?: string;
    name?: string;
    className?: string;
    svg?: ReactNode;
  };
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

export type Service = {
  id: string;
  description: ReactNode;
  title?: string;
};
