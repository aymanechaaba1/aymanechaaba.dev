import { Testimonial as T } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Testimonial({ testimonial }: { testimonial: T }) {
  return (
    <div className="zinc-ring-shadow flex flex-col items-stretch w-full max-w-full p-5 gap-4 rounded-lg">
      <div className="flex items-center">
        <p>
          ~{' '}
          <Link
            href={testimonial.website}
            target="_blank"
            className="text-sm tracking-tight font-medium dark:text-zinc-300 text-zinc-600 hover:text-zinc-800"
          >
            {testimonial.website}
          </Link>
        </p>
      </div>

      <p className="tracking-tight font-semibold">{testimonial.text}</p>
      <div className="flex items-center gap-x-4">
        <Image
          src={testimonial.avatar}
          width={50}
          height={50}
          alt={testimonial.name}
          className="object-cover circle"
        />
        <div>
          <p className="tracking-tight font-semibold">{testimonial.name}</p>
          <p className="text-sm dark:text-zinc-300 text-zinc-600">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
