import { getCachedViews, getViews } from '@/actions/getViews';
import { db } from '@/lib/firebase';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { revalidateTag, unstable_cache } from 'next/cache';
import { cookies, headers } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  const slug = (await params).slug;
  let views = await getViews({ slug });

  const viewsRef = doc(db, 'posts', slug);

  await updateDoc(viewsRef, {
    views: views + 1,
  });

  return NextResponse.json({ views });
}
