'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function SalesGallery({ screens }: { screens: string[] }) {
  return (
    <div className="container mb-5">
      <h2 className="tracking-tight font-semibold scroll-m-20 text-3xl mb-5 text-center">
        We build for Results
      </h2>
      <div className="flex flex-col gap-y-5 container overflow-x-hidden snappy [mask-image:linear-gradient(to_right,transparent,black,transparent)] w-full">
        {/* col1 */}
        <div className="-translate-x-1/2">
          <motion.div
            animate={{
              x: '-50%',
              transition: {
                repeat: Infinity,
                duration: 30,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
            className="flex items-center gap-x-5 pr-5"
          >
            {[...screens.slice(0, 7), ...screens.slice(0, 7)].map(
              (screen, i) => (
                <Image
                  key={i}
                  src={`/results/screens/result_screen_${screen}`}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-xl shadow-md bg-cover bg-gray-900 shrink-0 snappy rotate-3"
                />
              )
            )}
          </motion.div>
        </div>
        {/* col2 */}
        <div className="-translate-x-1/2">
          <motion.div
            animate={{
              x: '50%',
              transition: {
                repeat: Infinity,
                duration: 30,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
            className="flex items-center gap-x-5 pr-5"
          >
            {[...screens.slice(0, 7), ...screens.slice(0, 7)].map(
              (screen, i) => (
                <Image
                  key={i}
                  src={`/results/screens/result_screen_${screen}`}
                  alt=""
                  width={200}
                  height={200}
                  className="rounded-xl shadow-md bg-cover bg-gray-900 shrink-0 snappy -rotate-3"
                />
              )
            )}
          </motion.div>
        </div>
        {/* col3 */}
        {/* <motion.div
          initial={{ translateX: '-50%' }}
          // animate={{
          //   translateX: '0',
          //   transition: {
          //     repeat: Infinity,
          //     duration: 20,
          //   },
          // }}
          className="flex items-start gap-x-5 pr-5"
        >
          {[...screens.slice(20, 30), ...screens.slice(20, 30)].map(
            (screen, i) => (
              <Image
                key={i}
                src={`/results/screens/result_screen_${screen}`}
                alt=""
                width={200}
                height={200}
                className="rounded-xl shadow-md bg-cover bg-gray-900 shrink-0 snappy rotate-3"
              />
            )
          )}
        </motion.div> */}
      </div>
    </div>
  );
}

export default SalesGallery;
