import React from 'react';
import { storage } from '@/lib/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

async function StoreRecordings() {
  let urls = [];
  let res = await listAll(ref(storage, 'recordings/'));
  // console.log(res.items);
  for (const item of res.items) {
    let url = await getDownloadURL(item);
    urls.push(url);
  }

  return (
    <div
      className="flex items-center gap-x-5 mt-5 container overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"
      dir="ltr"
    >
      {/* {urls.length > 0 && (
        <video
          autoPlay
          controls
          playsInline
          loop
          muted
          poster="/sky.jpg"
          preload="none"
          width="250"
          className="rounded-xl shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] snap-center"
        >
          <source src={urls[0]} type="video/webm" />
          <source src={urls[0]} type="video/mp4" />
          Download the video.
        </video>
      )}
      {urls.slice(1).map((url, i) => (
        <video
          key={i}
          controls
          muted
          width="250"
          className="rounded-xl shadow-[inset_0px_1px_0px_rgb(255_255_255_/_0.08),_inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.1),_0px_2px_4px_rgb(0_0_0_/_0.04),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.04)] dark:shadow-[inset_0px_0px_0px_0.5px_rgb(255_255_255_/_0.08),_0px_1px_2px_rgb(0_0_0_/_0.5),_0px_2px_4px_rgb(0_0_0_/_0.12),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.32)] snap-center"
        >
          <source src={url} type="video/webm" />
          <source src={url} type="video/mp4" />
          Download the video.
        </video>
      ))} */}
    </div>
  );
}

export default StoreRecordings;
