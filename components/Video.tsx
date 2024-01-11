'use client';

import { Player, PlayerProps } from 'video-react';

function Video(playerProps: PlayerProps) {
  return <Player {...playerProps} />;
}

export default Video;
