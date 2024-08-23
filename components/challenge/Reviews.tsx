'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export type Review = {
  name: string;
  avatar: string;
  testimonial: string;
  logo?: string;
  role: string;
};

function Review(props: { review: Review }) {
  return (
    <div className="space-y-4 p-5 review border shrink-0 w-full border-gray-100 dark:border-gray-900 rounded-lg shadow-lg">
      <div className="flex items-center gap-x-4">
        <Image
          src={props.review.avatar}
          alt=""
          width={50}
          height={50}
          className="bg-cover rounded-full"
        />
        <div>
          <h4>{props.review.name}</h4>
          <p className="text-gray-300">{props.review.role}</p>
        </div>
      </div>
      <p className="">{props.review.testimonial}</p>
    </div>
  );
}

function Reviews(props: { reviews: Review[] }) {
  return (
    <div className="container mb-5 w-full review -translate-x-[5%] flex items-center gap-x-5 overflow-scroll">
      {props.reviews.map((review, i) => (
        <>
          <Review key={i} review={review} />
        </>
      ))}
    </div>
  );
}

export default Reviews;
