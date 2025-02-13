import Image from 'next/image';
import React from 'react';

function Authority() {
  return (
    <div className="relative min-h-[700px] md:min-h-[500px] md:max-w-[700px] mx-auto">
      <Image
        src="/photo.jpg"
        width={500}
        height={300}
        className="object-cover w-full md:w-1/2 md:float-right md:h-[500px] mx-auto"
        alt=""
      />
      <div className="flex justify-center container">
        <div className="w-[400px] mx-auto min-h-[300px] bg-white/70 dark:bg-black/50 rounded-sm backdrop-blur-xl absolute top-[240px] md:top-1/2  md:-translate-y-1/2 md:right-[45%] dark:text-white p-5">
          <h3 className="font-semibold text-xl mb-1">
            I&apos;M AYMANE CHAABA. 💯
          </h3>

          <div className="space-y-3 mt-3">
            <p>
              As an experienced Shopify Developer for more than 3 years, I have
              gained enough experience to build{' '}
              <strong>High Converting shopify stores</strong>.
            </p>
            <p>
              My approach focuses mainly on customer experience and shopping
              experience.
            </p>
            <p>
              I do also optimize for <strong>core web vitals</strong> to make
              the store as performant as possible.
            </p>
            <p>
              I&apos;ve worked with clients from{' '}
              <strong>all over the world gaining</strong> trust by my honest and
              hard working soul during the project.
            </p>
            <p>
              I apply skills from Web Design, Web Development and Shopify to{' '}
              <strong>
                achieve a unique customer experience related to your brand.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authority;
