'use client';

import React, { ReactNode, Suspense, useState } from 'react';
import HeadlessDialog from '../HeadlessDialog';
import { FaPlayCircle } from 'react-icons/fa';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';

function RecordingDialog({ recording }: { recording: ReactNode }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <HeadlessDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className=""
      panelClassName="h-[300px] grid"
      buttonLabel={
        <FaPlayCircle
          className="absolute inset-0 m-auto text-teal-500"
          size={70}
        />
      }
    >
      <Suspense
        fallback={<p className="text-center animate-pulse">loading video...</p>}
      >
        {recording}
      </Suspense>
    </HeadlessDialog>
  );
}

export default RecordingDialog;
