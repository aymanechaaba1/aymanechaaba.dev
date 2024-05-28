'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Video from './Video';

function Slideshow() {
  return (
    <div className="slide-container my-10 border rounded-2xl h-[620px] mx-auto">
      <Slide arrows={false} canSwipe={true} autoplay={false}>
        <Video
          className="block w-[100%] h-[calc(1.7*80vw)] mx-auto"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSnapinsta.app_video_6C421E4E0E80602D639A17161B85C9B2_video_dashinit.mp4?alt=media&token=90244d7c-5f16-4f13-821a-3cec5ddfa279"
        />
      </Slide>
    </div>
  );
}

export default Slideshow;
