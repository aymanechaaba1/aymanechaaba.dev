import Authority from '@/components/shopify/Authority';
import { FeaturesSection } from '@/components/shopify/FeaturesSection';
import Offer from '@/components/shopify/Offer';
import SalesGallery from '@/components/shopify/SalesGallery';
import SocialProof, { reviews } from '@/components/shopify/SocialProof';
import StoreRecordings from '@/components/shopify/StoreRecordings';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { BiLogoZoom } from 'react-icons/bi';
import { SiZoom } from 'react-icons/si';
import { FaHandPointer, FaPlay, FaPlayCircle } from 'react-icons/fa';
import BookNowBtn from '@/components/shopify/BookNowBtn';
import BentoCard from '@/components/shopify/BentoCard';
import { IoIosChatbubbles } from 'react-icons/io';
import {
  FaFacebookF,
  FaGoogle,
  FaShopify,
  FaFunnelDollar,
} from 'react-icons/fa';
import {
  FaPaintbrush,
  FaArrowsSpin,
  FaMagnifyingGlassDollar,
} from 'react-icons/fa6';
import { GiCash } from 'react-icons/gi';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import HeadlessDialog from '@/components/HeadlessDialog';
import RecordingDialog from '@/components/shopify/RecordingDialog';

let features = [
  {
    feature: 'Full Shopify Website Creation',
    icon: <FaShopify />,
  },
  {
    feature: 'Complete Branding + Logo',
    icon: <FaPaintbrush />,
  },
  {
    feature: 'Automated Dropshipping Store',
    icon: <FaArrowsSpin />,
  },
  {
    feature: 'Winning Product Research',
    icon: <FaMagnifyingGlassDollar />,
  },
  {
    feature: 'Product Description Optimized',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'High Converting Shopify Apps',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Theme Customization',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Fully Responsive for All Devices',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Domain Integration',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Integrating Social Media',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Integrating Google Analytics',
    icon: <FaGoogle />,
  },
  {
    feature: 'Integrating Facebook Pixel',
    icon: <FaFacebookF />,
  },
  {
    feature: 'SEO Optimization',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Payment Gateways',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Subscription Pop-up',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Order Tracking',
    icon: <IoIosChatbubbles />,
  },
  {
    feature: 'Live Chat',
    icon: <IoIosChatbubbles />,
  },
];

function Recording({ videoUrl }: { videoUrl: string }) {
  return (
    <video
      autoPlay
      controls
      playsInline
      loop
      muted
      preload="none"
      width="250"
      className="w-full h-full rounded-3xl shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] snap-center"
    >
      <source src={videoUrl} type="video/webm" />
      <source src={videoUrl} type="video/mp4" />
      Download the video.
    </video>
  );
}

async function BabyRecording() {
  let videoUrl = await getDownloadURL(ref(storage, 'recordings/baby.mov'));

  return <Recording videoUrl={videoUrl} />;
}

async function BushcraftRecording() {
  let videoUrl = await getDownloadURL(ref(storage, 'recordings/bushcraft.mov'));

  return <Recording videoUrl={videoUrl} />;
}

async function CosmeticsRecording() {
  let videoUrl = await getDownloadURL(ref(storage, 'recordings/cosmetics.mov'));

  return <Recording videoUrl={videoUrl} />;
}

function StoreRecordingSekeleton() {
  return (
    <div className="rounded-xl dark:bg-gray-900 bg-gray-100 shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] w-[250px] h-[350px] animate-pulse shrink-0 snappy" />
  );
}

async function ShopifyPage() {
  return (
    <div className="">
      <h1 className="text-center text-3xl tracking-tight leading-0 scroll-m-20 font-semibold container mt-3">
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-teal-600">
          Successfull
        </span>{' '}
        eCommerce business starts with a{' '}
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-teal-300 to-teal-600">
          High Converting Store
        </span>
      </h1>
      {/* Results */}
      <div
        className="flex items-center gap-x-5 mt-5 container overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"
        dir="ltr"
      >
        <div className="relative shrink-0 snap-center">
          <Image
            src={`/recordingsThumbnails/baby.png`}
            alt=""
            width={250}
            height={100}
            className="object-cover rounded-xl"
          />
          <RecordingDialog recording={<BabyRecording />} />
        </div>
        <div className="relative shrink-0 snap-center">
          <Image
            src={`/recordingsThumbnails/bushcraft.png`}
            alt=""
            width={250}
            height={100}
            className="object-cover rounded-xl"
          />
          <RecordingDialog recording={<BushcraftRecording />} />
        </div>
        <div className="relative shrink-0 snap-center">
          <Image
            src={`/recordingsThumbnails/cosmetics.png`}
            alt=""
            width={250}
            height={100}
            className="object-cover rounded-xl"
          />
          <RecordingDialog recording={<CosmeticsRecording />} />
        </div>
      </div>
      {/* <BookNowBtn /> */}
      <div className="container"></div>
      <div className="flex items-center gap-x-5 justify-center my-5 px-10">
        <div className="shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.04),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.4),_0px_2px_4px_rgb(0_0_0_/_0.08),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.24)] dark:bg-gray-900 flex flex-col items-center justify-center font-semibold ring ring-teal-500/80 shrink-0 w-[120px] h-[120px] text-center py-5 text-3xl rounded-lg">
          100
          <p className="text-center text-[.7rem] text-gray-400">Performance</p>
        </div>
        <div className="shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] dark:bg-gray-900 w-[120px] h-[120px] flex flex-col items-center justify-center font-semibold ring ring-teal-500 shrink-0 text-3xl py-5 rounded-lg gap-1">
          100
          <p className="text-center text-sm text-gray-400 uppercase">SEO</p>
        </div>
        <div className="shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] dark:bg-gray-900 w-[120px] flex flex-col items-center justify-center font-semibold ring ring-teal-500 shrink-0 py-5 text-3xl h-[120px] rounded-lg gap-1">
          {'0-2s'}
          <p className="text-center text-sm text-gray-400">speed</p>
        </div>
      </div>
      <FeaturesSection />
      <SalesGallery
        screens={[
          '1.png',
          '2.png',
          '3.png',
          '4.png',
          '5.png',
          '6.png',
          '7.png',
          '8.png',
          '9.jpg',
          '10.jpg',
          '11.jpg',
          '12.jpg',
          '13.jpg',
          '14.jpg',
          '15.jpg',
          '16.jpg',
          '17.jpg',
        ]}
      />
      <div className="w-full flex flex-col items-center justify-center bg-cover bg-center p-5">
        <h2 className="text-center bg-gradient-to-r from-teal-100 to-teal-700 bg-cover bg-center bg-no-repeat text-transparent bg-clip-text font-black tracking-tight text-lg">
          Conversion Rate
        </h2>
        <p className="text-5xl font-black from-teal-100 to-teal-700 text-transparent bg-clip-text bg-gradient-to-r">
          10-20%
        </p>
      </div>
      {/* Authority */}
      <Authority />
      {/* Reviews, Social Proof */}
      <SocialProof />
      <div className="flex items-center gap-x-5 overflow-x-scroll container snap-x snap-mandatory mt-5 mb-4">
        {features.map((f, i) => (
          <BentoCard key={i} f={f} />
        ))}
      </div>
      {/* Offer */}
      <Offer />
      <div className="mx-auto max-w-[250px] mb-5">
        <div className="w-full h-[50px] bg-gray-900 flex justify-center items-center rounded-t-md">
          <Image
            src="/shopify_partners_logo.webp"
            alt=""
            width={200}
            height={100}
            className="bg-cover"
          />
        </div>
        <div className="w-full h-auto py-1 font-semibold text-gray-200 mt-1 bg-gray-900 flex justify-center items-center rounded-b-md uppercase">
          Certified Partner
        </div>
      </div>
    </div>
  );
}

export default ShopifyPage;
