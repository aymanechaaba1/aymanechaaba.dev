'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosPlay, IoIosVideocam } from 'react-icons/io';
import HeadlessDialog from '../HeadlessDialog';
import Video from 'next-video';
import ReactPlayer from 'react-player';
import brian from '@/videos/Snapinsta.app_video_6C421E4E0E80602D639A17161B85C9B2_video_dashinit.mp4';

let interval: any;

export const TestimonialsStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Testimonial[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const testimonial_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [testimonials, setTestimonials] = useState<Testimonial[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setTestimonials((prevTestimonials: Testimonial[]) => {
        const newArray = [...prevTestimonials]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-[300px] mt-8 w-[400px] md:w-[500px]">
      {testimonials.map((testimonial, i) => {
        return (
          <motion.div
            key={testimonial.id}
            className="absolute flex flex-col items-stretch h-[300px] w-full"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: i * -testimonial_OFFSET,
              scale: 1 - i * SCALE_FACTOR, // decrease scale for testimonials that are behind
              zIndex: testimonials.length - i, //  decrease z-i for the testimonials that are behind
            }}
          >
            <div className="zinc-ring-shadow flex flex-col items-stretch w-full container py-4 gap-4 rounded-lg">
              {testimonial.video && (
                <HeadlessDialog buttonLabel={<IoIosPlay />} dialogTitle="">
                  <div className="flex overflow-hidden rounded-2xl h-[700px]">
                    <Video
                      src={brian}
                      title="Brian - Survival Gear BSO"
                      className="rounded-xl w-full"
                      accentColor="#09090b"
                      muted
                      autoPlay
                    />
                  </div>
                </HeadlessDialog>
              )}
              <div className="flex items-center">
                <div className="flex items-center gap-x-2">
                  <span className="text-sm md:text-base">
                    {testimonial.company}
                  </span>
                  ~{' '}
                  <Link
                    href={testimonial.website}
                    target="_blank"
                    className="text-sm tracking-tight font-medium dark:text-zinc-300 text-zinc-600 hover:text-zinc-800"
                  >
                    {testimonial.website}
                  </Link>
                </div>
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
                  <p className="tracking-tight font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm dark:text-zinc-300 text-zinc-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
