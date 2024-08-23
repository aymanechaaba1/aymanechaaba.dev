import Image from 'next/image';
import React, { ReactNode } from 'react';
import CustomVideo from './CustomVideo';

export type ReviewType = {
  id: string;
  avatar: string;
  testimonial: ReactNode | string;
  fullName: string;
  brand: {
    name: string;
    logo?: string;
  };
  role: string;
  instaUsername?: string;
  videoUrl?: string;
};
function Review(props: { review: ReviewType }) {
  return (
    <div className="dark:bg-gray-900 dark:shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.04),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.4),_0px_2px_4px_rgb(0_0_0_/_0.08),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.24)] p-5 rounded-xl w-full shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] shrink-0">
      <div className="font-semibold">{props.review.testimonial}</div>
      {props.review.videoUrl && <CustomVideo url={props.review.videoUrl} />}
      <div className="flex items-center gap-x-3">
        <Image
          src={props.review.avatar}
          alt=""
          width={50}
          height={50}
          className="bg-cover rounded-full circle"
        />
        <div>
          <p className="">{props.review.fullName}</p>
          <p className="text-sm dark:text-gray-200">{props.review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
