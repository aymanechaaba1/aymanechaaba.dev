'use client';

import { ElementRef, useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { FaCopy } from 'react-icons/fa';

export default function Pre({
  children,
  filename,
  ...props
}: {
  filename: string;
  children: string;
}) {
  const preRef = useRef<ElementRef<'pre'>>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copy = () => {
    if (!preRef.current?.innerText) return;

    navigator.clipboard
      .writeText(preRef.current.innerText)
      .then(() => {
        console.log('Code copied successfully');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      })
      .catch((err) => {
        console.error('Unable to copy code: ', err);
      });
  };

  return (
    <pre ref={preRef} className="relative text-wrap" {...props}>
      {isCopied ? (
        <FaCheck size={13} className="float-right cursor-pointer" />
      ) : (
        <FaCopy
          size={13}
          className="float-right cursor-pointer"
          onClick={copy}
        />
      )}
      {children}
    </pre>
  );
}
