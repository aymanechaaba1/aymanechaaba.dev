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
  name: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  logo: string;
  thumbnail: string;
  stack: Stack[];
  repo: string;
  live_url: string;
};
