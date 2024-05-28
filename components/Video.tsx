import { cn } from '@/lib/utils';
import { PlayerProps } from 'next-video';
import { RefObject, forwardRef } from 'react';

function Video(props: { src: string; className: string }) {
  return (
    <video
      className={cn(props.className)}
      src={props.src}
      controls
      muted
      autoPlay
      loop
    >
      <source src={props.src} type="video/mp4" />
    </video>
  );
}

export default Video;
