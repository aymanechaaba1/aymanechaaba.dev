'use client';

import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

function Video(props: { src: string; className?: string }) {
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleToggleMuted = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;

      setIsMuted(!isMuted);
    }
  };

  return (
    <video
      onClick={handleToggleMuted}
      ref={videoRef}
      className={cn('mx-auto rounded-2xl mt-5', props.className)}
      width={350}
      height={500}
      muted={isMuted}
      autoPlay
      playsInline
      loop
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
}

export default Video;
