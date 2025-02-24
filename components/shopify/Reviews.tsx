'use client';

import React from 'react';
import { ReviewType } from './Review';
import Image from 'next/image';
import { motion } from 'motion/react';

function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <div className="container mb-5">
      <div className="flex flex-col gap-y-10 container overflow-x-hidden snappy [mask-image:linear-gradient(to_right,transparent,black,transparent)] w-full p-5">
        {/* col1 */}
        <div className="translate-x-[-1000%] md:translate-x-[-300%]">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: 'var(--move-to, -1000%)',
              transition: {
                repeat: Infinity,
                duration: 168,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
            className="flex items-center gap-x-5 pl-5 [--move-to:-650%] md:[--move-to:-300%] lg:[--move-to:-100%] lg:[--slide-duration:30]"
          >
            {[...reviews.slice(0, 10), ...reviews.slice(0, 10)].map(
              (review, i) => (
                <div
                  key={review.id}
                  className="w-[300px] h-[300px] rounded-xl shadow-md bg-cover dark:bg-gray-900 shrink-0 snappy rotate-3 p-5 grid place-content-center gap-y-4 dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)]"
                >
                  <div className="font-semibold">{review.testimonial}</div>
                  <div className="flex items-center gap-x-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      width={50}
                      height={50}
                      className="bg-cover rounded-full circle"
                    />
                    <div>
                      <p className="">{review.fullName}</p>
                      <p className="text-sm dark:text-gray-200">
                        {review.country}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
        {/* col2 */}
        <div className="translate-x-[-1000%] md:translate-x-[-300%]">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: 'var(--move-to, 1000%)',
              transition: {
                repeat: Infinity,
                duration: 168,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
            className="flex items-center gap-x-5 pl-5 [--move-to:1000%] md:[--move-to:300%]"
          >
            {[...reviews.slice(10, 20), ...reviews.slice(10, 20)].map(
              (review, i) => (
                <div
                  key={review.id}
                  className="w-[300px] h-[300px] rounded-xl shadow-md bg-cover dark:bg-gray-900 shrink-0 snappy -rotate-3 p-5 grid place-content-center gap-y-4 dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)]"
                >
                  <div className="font-semibold">{review.testimonial}</div>
                  <div className="flex items-center gap-x-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      width={50}
                      height={50}
                      className="bg-cover rounded-full circle"
                    />
                    <div>
                      <p className="">{review.fullName}</p>
                      <p className="text-sm dark:text-gray-200">
                        {review.country}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
        {/* col3 */}
        <div className="translate-x-[-1000%] md:translate-x-[-300%]">
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: 'var(--move-to, -1000%)',
              transition: {
                repeat: Infinity,
                duration: 168,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
            className="flex items-center gap-x-5 pr-5 [--move-to:-650%] md:[--move-to:-300%] lg:[--move-to:-100%]"
          >
            {[...reviews.slice(20, 30), ...reviews.slice(20, 30)].map(
              (review, i) => (
                <div
                  key={review.id}
                  className="w-[300px] h-[300px] rounded-xl shadow-md bg-cover dark:bg-gray-900 shrink-0 snappy rotate-3 p-5 grid place-content-center gap-y-4 dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)]"
                >
                  <div className="font-semibold">{review.testimonial}</div>
                  <div className="flex items-center gap-x-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      width={50}
                      height={50}
                      className="bg-cover rounded-full circle"
                    />
                    <div>
                      <p className="">{review.fullName}</p>
                      <p className="text-sm dark:text-gray-200">
                        {review.country}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
