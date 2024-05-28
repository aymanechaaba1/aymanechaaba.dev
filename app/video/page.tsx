import Slideshow from '@/components/Slideshow';
import Video from '@/components/Video';
import VideoWrapper from '@/components/VideoWrapper';
import { BRIAN_VIDEO, SPEECH_AUDIO } from '@/config';
import React from 'react';

function VideoPage() {
  return (
    <>
      <Video
        className="block h-[600px] w-[500px] border rounded-2xl mx-auto my-10"
        src={BRIAN_VIDEO}
      />
    </>
  );
}

export default VideoPage;
