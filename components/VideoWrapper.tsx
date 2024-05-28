import React, { ReactNode } from 'react';

function VideoWrapper({ children }: { children: Readonly<ReactNode> }) {
  return (
    <div className="w-[400px] h-[500px] mx-auto flex justify-center my-5">
      {children}
    </div>
  );
}

export default VideoWrapper;
