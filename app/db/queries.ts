'use server';

import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from 'next/cache';
import { sql } from './postgres';

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_URL) return [];

  noStore();
  return sql`
    SELECT slug, count
    FROM views
  `;
}
