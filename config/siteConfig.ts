import { getFetchUrl } from '@/lib/utils';
import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'aymanechaaba.dev',
  description:
    'Expert NextJS ReactJS Web Developer or Software Engineer from Morocco 🇲🇦',
  url: getFetchUrl(),
  ogImage: `${getFetchUrl()}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/aymanedev',
    github: 'https://github.com/aymanechaaba1',
  },
};
