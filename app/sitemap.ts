import { getFetchUrl } from '@/lib/utils';
import { MetadataRoute } from 'next';

const url = getFetchUrl();
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${url}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];
}
