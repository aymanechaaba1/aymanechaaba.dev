import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import React, { ReactNode } from 'react';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { Tweet } from './Tweet';
import Pre from './Pre';
import { FaRust } from 'react-icons/fa';
import { SiBabel } from 'react-icons/si';
import { FaMeta } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { cn } from '@/lib/utils';

type Data = {
  headers: any[];
  rows: any[];
};
function Table({ data }: { data: Data }) {
  let headers = data.headers.map((header, i) => <th key={i}>{header}</th>);
  let rows = data.rows.map((row, i) => (
    <tr key={i}>
      {row.map((cell: any, cellIndex: React.Key) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage({ alt, ...props }: any) {
  return (
    <div className="flex justify-center">
      <Image
        alt={alt}
        width={500}
        height={200}
        className="rounded-lg object-cover mx-auto"
        {...props}
      />
    </div>
  );
}

function Callout(props: {
  emoji: ReactNode | string;
  emojiClassName: string;
  children: Readonly<ReactNode>;
}) {
  return (
    <div className="px-4 py-3 border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded p-1 text-sm flex items-center text-zinc-900 dark:text-zinc-100 mb-8">
      <div
        className={cn(
          'flex flex-col justify-center items-center w-4 mr-4',
          props.emojiClassName
        )}
      >
        {props.emoji}
      </div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function ProsCard({ title, pros }: { title: string; pros: any[] }) {
  return (
    <div className="border border-teal-200 dark:border-teal-900 bg-zinc-50 dark:bg-zinc-900/30 dark:shadow-inner rounded-xl p-6 my-4 w-full">
      <span>{`You might use ${title} for...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-teal-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsCard({ title, cons }: { title: string; cons: string[] }) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
      <span>{`You might not use ${title} for such reasons...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

let components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  Tweet,
  Table,
  pre: Pre,
  FaRust,
  SiBabel,
  FaMeta,
  FaReact,
  RiNextjsFill,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [[rehypePrettyCode], [rehypeSlug]],
        },
      }}
    />
  );
}
