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
import { FaHandPointer } from 'react-icons/fa';
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

function StoreRecordingsLoading() {
  return (
    <div className="flex items-center gap-x-5 mt-5 container overflow-x-scroll overflow-y-hidden snappy">
      {[...new Array(5)].map((_, i) => (
        <div
          key={i}
          className="rounded-xl dark:bg-gray-900 bg-gray-100 shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] w-[250px] h-[350px] animate-pulse shrink-0 snappy"
        />
      ))}
    </div>
  );
}

async function ShopifyPage() {
  return (
    <div className="">
      <h1 className="text-center text-3xl tracking-tight leading-0 scroll-m-20 font-semibold container">
        I will build a{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
          Shopify
        </span>{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
          Dropshipping
        </span>
        /
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
          Brand
        </span>{' '}
        store for You
      </h1>
      {/* Results */}
      <Suspense fallback={<StoreRecordingsLoading />}>
        <StoreRecordings />
      </Suspense>
      {/* <BookNowBtn /> */}
      <div className="container"></div>
      <div className="w-full flex items-center gap-x-5 justify-center my-5 container">
        <div className="rounded-[9999px] shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.04),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.4),_0px_2px_4px_rgb(0_0_0_/_0.08),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.24)] dark:bg-gray-900 p-5 w-[120px] h-[120px] flex flex-col items-center justify-center text-3xl font-semibold ring ring-emerald-500/80">
          100
          <p className="text-center text-sm text-gray-400">Performance</p>
        </div>
        <div className="rounded-[9999px] shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] dark:bg-gray-900 p-5 w-[120px] h-[120px] flex flex-col items-center justify-center text-3xl font-semibold ring ring-emerald-500">
          100
          <p className="text-center text-sm text-gray-400 uppercase">SEO</p>
        </div>
        <div className="rounded-[9999px] shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] dark:bg-gray-900 p-5 w-[120px] h-[120px] flex flex-col items-center justify-center text-3xl font-semibold ring ring-emerald-500">
          {'0-2s'}
          <p className="text-center text-sm text-gray-400">Speed</p>
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
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <SocialProof />
      </Suspense>
      <div className="flex items-center gap-x-5 overflow-x-scroll container snap-x snap-mandatory mt-5 mb-4">
        {features.map((f, i) => (
          <BentoCard key={i} f={f} />
        ))}
      </div>
      {/* Offer */}
      <Offer />
      <div className="grid grid-cols-1 place-content-center place-items-center gap-4 w-full my-5">
        <Image
          src="/shopify_partners_logo.webp"
          alt=""
          width={150}
          height={100}
          className="bg-cover"
        />
      </div>
    </div>
  );
}

export default ShopifyPage;
