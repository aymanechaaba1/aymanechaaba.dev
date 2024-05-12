'use client';

import { cn } from '@/lib/utils';
import { ElementRef, useEffect, useRef, useState } from 'react';
import { GiSoundWaves } from 'react-icons/gi';
import SoundWaves from './icons/SoundWaves';
import { SPEECH_AUDIO } from '@/config';

function IntroSpeech() {
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio(SPEECH_AUDIO) : undefined
  );
  const [isPlaying, setIsPlaying] = useState(false);

  let [audio] = useState(audioRef.current);

  const playSound = () => {
    isPlaying ? audio?.pause() : audio?.play();

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio?.addEventListener('ended', handleEnded);

    return () => {
      audio?.removeEventListener('ended', handleEnded);
    };
  }, [audio]);

  return (
    <div className="flex items-center gap-x-5">
      {/* <GiSoundWaves
        size={30}
        onClick={playSound}
        className={cn('cursor-pointer')}
      /> */}
      <SoundWaves
        isPlaying={isPlaying}
        onClick={playSound}
        className="cursor-pointer"
      />
      {/* <audio ref={audioRef} src={SPEECH_AUDIO} hidden /> */}
    </div>
  );
}

export default IntroSpeech;
