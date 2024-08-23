import React from 'react';
import { useId } from 'react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  return (
    <div className="mb-5">
      <div
        // animate={{
        //   x: -50,
        // }}
        // transition={{
        //   duration: 0.5,
        // }}
        className="flex items-start gap-x-5 container md:gap-2 max-w-7xl mx-auto overflow-x-scroll snappy"
      >
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative shrink-0 bg-gradient-to-b dark:from-gray-900 from-gray-100 dark:to-gray-950 to-white p-6 rounded-3xl overflow-hidden w-[200px] snappy snap-center"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-gray-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: 'Legal Pages',
    description: 'terms of service, privacy policy',
  },
  {
    title: 'Winning Product Research',
    description:
      'look for winning products that are trending with real sales proof.',
  },
  {
    title: 'Setup Products & Collections',
    description: '',
  },
  {
    title: 'Setup Payment Gateways',
    description: 'Paypal, Stripe',
  },
  {
    title: 'Fully Customized Theme',
  },
  {
    title: 'SEO Optimization',
    description:
      'implement advanced strategies to optimize SEO to rank high in google.',
  },
  {
    title: 'About Us, Contact Us Pages',
  },
  {
    title: 'Tracking Page',
    description:
      'A customized page where your customers can track their orders.',
  },
  {
    title: 'Setup Hosting, Domain Name',
  },
  {
    title: 'Install apps that boost sales 🚀',
    description: '',
  },
  {
    title: 'Add social media icons',
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
