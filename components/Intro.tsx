import { getAge } from '@/lib/utils';
import React from 'react';

function Intro() {
  return (
    <div className="max-w-[400px] md:max-w-[1000px] flex flex-col mx-auto items-center justify-center">
      <h1 className="text-3xl md:text-7xl text-center font-semibold tracking-tight scroll-m-20">
        Aymane Chaaba
      </h1>
      <p className="text-zinc-700 dark:text-zinc-200 text-center text-sm md:text-base font-medium tracking-tight">
        Software Engineer | Web Developer
      </p>
      <p className="dark:text-zinc-300 text-zinc-700 tracking-tighter text-center text-sm md:text-base">
        <span>from</span> <span className="">Morocco ♥️🇲🇦</span>
        {' | '}
        <span>{getAge(1999)} yo.</span>
      </p>
    </div>
  );
}

export default Intro;
