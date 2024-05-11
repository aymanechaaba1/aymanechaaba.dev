'use client';

import { cn } from '@/lib/utils';
import { ElementRef, useEffect, useRef, useState } from 'react';
import { GiSoundWaves } from 'react-icons/gi';
import SoundWaves from './icons/SoundWaves';

function IntroSpeech() {
  const audioRef = useRef<ElementRef<'audio'>>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSound = () => {
    let audioEl = audioRef.current;

    if (!audioEl) return;

    if (audioEl.paused) {
      audioEl.play();
      setIsPlaying(true);
    } else {
      audioEl.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    console.log(audioRef?.current?.paused);
  }, [audioRef]);

  return (
    <div className="flex items-center gap-x-5">
      <GiSoundWaves
        size={30}
        onClick={playSound}
        className={cn('cursor-pointer')}
      />
      {/* <SoundWaves
        isPlaying={isPlaying}
        onClick={playSound}
        className="cursor-pointer"
      /> */}
      <audio
        ref={audioRef}
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/recording2024-05-11%2014-41-43.m4a?alt=media&token=3c41b564-2670-4626-8f5c-8f69106f105a"
        hidden
      />
    </div>
  );
}

export default IntroSpeech;
