import React, { Suspense } from 'react';
import { getBlogPosts } from '../db/blog';
import Link from 'next/link';
import { getViewsCount } from '../db/queries';
import ViewCounter from '@/components/mdx/ViewCounter';
import { getViews } from '@/actions/getViews';
import { unstable_noStore } from 'next/cache';
import { Loader2 } from 'lucide-react';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section className="my-5">
      <h1 className="font-semibold text-2xl tracking-tighter">Read my Blog</h1>
      <p className="tracking-tight scroll-m-20 leading-none mt-1 text-zinc-600 dark:text-zinc-300">
        I write content about web development, software design and tech
        industry.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 border p-5 rounded-lg"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                  {post.metadata.title}
                </p>
                <Suspense
                  fallback={
                    <Loader2 className="animate-spin text-zin-500" size={15} />
                  }
                >
                  <Views slug={post.slug} />
                </Suspense>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  unstable_noStore();
  let views = await getViews({ slug });

  return <ViewCounter views={views} />;
}

export default BlogPage;
