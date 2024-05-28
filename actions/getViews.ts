'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { unstable_cache } from 'next/cache';

export async function getViews({ slug }: { slug: string }) {
  const viewsRef = doc(db, 'posts', slug);
  const snap = await getDoc(viewsRef);

  if (!snap.exists()) return;

  return snap.data()!.views;
}

export const getCachedViews = unstable_cache(getViews, ['views'], {
  tags: ['views'],
});
