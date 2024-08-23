import Image from 'next/image';
import React from 'react';
import { SiZoom } from 'react-icons/si';
import { BiLogoZoom } from 'react-icons/bi';

function Offer() {
  return (
    <div className="w-full container mb-3 flex flex-col items-center justify-center">
      <div className="flex items-center gap-x-2 pb-2 justify-center w-full">
        <Image
          src="https://ouch-cdn2.icons8.com/QFLky1I8jkD_EghzOq_odz-Cfl_r1qnN9V0chVa4NZk/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTYx/L2E3ZTU3MWI5LTRl/OTMtNDlkZi05MGQ5/LThhZTUyN2MyMzI1/OS5wbmc.png"
          alt=""
          width={100}
          height={100}
          className="bg-cover"
        />
        <h1 className="text-4xl font-black tracking-tight scroll-m-20 leading-0 text-transparent bg-clip-text bg-gradient-to-r from-[#79E6F2] to-[#3097BF]">
          15 MIN ZOOM CALL
        </h1>
      </div>
      <div className="space-y-2 text-gray-400 font-medium text-justify">
        <p className="">
          In our first meeting, we&apos;ll focus on understanding your
          project&apos;s goals and objectives to ensure{' '}
          <span className="text-white font-semibold">
            we align our approach with your vision
          </span>
          . We&apos;ll discuss the key features and functionality you need,
          including any specific requirements or constraints.
        </p>
        <p className="">
          We&apos;ll review your target audience and any design preferences to
          tailor the project to their needs. We&apos;ll also establish a
          timeline and discuss any budget considerations.
        </p>
        <p>
          Finally, we’ll outline the next steps and{' '}
          <span className="text-white font-semibold">set clear milestones</span>{' '}
          for the project. This will help us{' '}
          <span className="text-white font-semibold">
            create a detailed plan
          </span>{' '}
          and ensure we meet your expectations effectively.
        </p>
      </div>
      <button className="dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] bg-gradient-to-r from-[#79E6F2] to-[#3097BF] w-full rounded-xl font-bold tacking-tight text-2xl my-3 pt-2">
        <a href="https://calendly.com/aymanechaaba1/onboarding" target="_blank">
          <div className="flex items-center justify-center gap-x-2">
            <BiLogoZoom size={30} />
            <p className="tracking-tight">Book Now</p>
          </div>
          <div className="flex items-center justify-center w-full">
            <SiZoom size={30} className="text-center" color="white" />
          </div>
        </a>
      </button>
    </div>
  );
}

export default Offer;
