import { getTweet as _getTweet } from 'react-tweet/api';
import { Suspense } from 'react';
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from 'react-tweet';
import '@/app/(css)/tweet.css';
import { unstable_cache } from 'next/cache';
import type { TwitterComponents } from 'react-tweet';
import Image from 'next/image';

export const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} className="" />,
  MediaImg: (props) => <Image {...props} fill unoptimized />,
};

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ['tweet'],
  { revalidate: 3600 * 24 }
);

const TweetContent = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? (
      <EmbeddedTweet tweet={tweet} components={components} />
    ) : (
      <TweetNotFound />
    );
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
};

export async function Tweet({ id }: { id: string }) {
  return (
    <Suspense fallback={<TweetSkeleton />}>
      <div className="tweet not-prose flex justify-center">
        <TweetContent id={id} />
      </div>
    </Suspense>
  );
}
