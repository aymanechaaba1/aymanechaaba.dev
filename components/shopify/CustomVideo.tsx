'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

function CustomVideo(props: { url: string }) {
  let videoRef = useRef<HTMLVideoElement>(null);
  let [showPlayIcon, setShowPlayIcon] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative md:mb-5">
      <video
        ref={videoRef}
        autoPlay
        muted
        controls
        loop
        width="250"
        className="rounded-xl shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] w-full md:max-w-[400px] mx-auto"
      >
        <source src={props.url} type="video/webm" />
        <source src={props.url} type="video/mp4" />
        Download the video.
      </video>
      {/* {!isPlaying && (
        <FaPlayCircle
          size={50}
          className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )} */}
    </div>
  );
}

export default CustomVideo;
