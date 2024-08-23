import Image from 'next/image';
import React from 'react';

function Authority() {
  return (
    <div className="relative min-h-[600px]">
      <Image
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2157351071/settings_images/1f8d335-c8fb-d6d-e8c-c6d10eaa2da3_DSC08758.JPG"
        width={1920}
        height={1080}
        className="object-cover w-full mt-5"
        alt=""
      />
      <div className="flex justify-center">
        <div className="w-[450px] mx-auto min-h-[300px] bg-white/70 dark:bg-black/50 rounded-sm backdrop-blur-xl absolute top-[160px] dark:text-white p-5">
          <h3 className="font-semibold text-xl mb-1">
            I&apos;M AYMANE CHAABA. 💯
          </h3>

          <div className="space-y-3 mt-3">
            <p>
              As an experienced Shopify Developer for more than 3 years, I have
              gained enough experience to build High Converting shopify stores.
            </p>
            <p>
              My approach focuses mainly on customer experience and shopping
              experience.
            </p>
            <p>
              I do also optimize for core web vitals to make the store as
              performant as possible.
            </p>
            <p>
              I&apos;ve worked with clients over America, Australia gaining
              trust by my honest and hard working soul during the project.
            </p>
            <p>
              I apply skills from Web Design, Web Development and Shopify to
              achieve a unique customer experience related to your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authority;
