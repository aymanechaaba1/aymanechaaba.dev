import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import {
  unstable_noStore as noStore,
  unstable_cache,
  unstable_noStore,
} from 'next/cache';
import { getBlogPosts } from '@/app/db/blog';
import { LIVE_URL } from '@/config';
import { CustomMDX } from '@/components/mdx/CustomMDX';
import ViewCounter from '@/components/mdx/ViewCounter';
import { Loader2 } from 'lucide-react';
import { cookies } from 'next/headers';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) return;

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://${LIVE_URL}${image}`
    : `https://${LIVE_URL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://${LIVE_URL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (daysAgo < 1) {
    return 'Today';
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

export default async function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post: any) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <section className="max-w-full my-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${LIVE_URL}${post.metadata.image}`
              : `https://${LIVE_URL}/og?title=${post.metadata.title}`,
            url: `https://${LIVE_URL}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Aymane Chaaba',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <p className="dark:text-zinc-400">{post.metadata.summary}</p>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <Suspense
          fallback={
            <Loader2 className="animate-spin text-zinc-500" size={15} />
          }
        >
          <PublishedAt publishedAt={post.metadata.publishedAt} />
        </Suspense>
        <Suspense
          fallback={<Loader2 className="animate-spin text-zin-500" size={15} />}
        >
          <Views slug={params.slug} />
        </Suspense>
      </div>
      <article className="prose prose-zinc dark:prose-invert prose-pre:bg-zinc-100 dark:prose-pre:!bg-zinc-900 prose-pre:rounded-t-none">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

function PublishedAt({ publishedAt }: { publishedAt: string }) {
  unstable_noStore();
  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {formatDate(publishedAt)}
    </p>
  );
}

async function Views({ slug }: { slug: string }) {
  unstable_noStore();
  const res = await fetch(`https://${LIVE_URL}/api/blog/${slug}`, {
    cache: 'no-store',
  });

  const { views } = await res.json();

  return <ViewCounter views={views} />;
}
