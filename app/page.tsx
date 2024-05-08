import { BackgroundBeams } from '@/components/ui/background-beams';
import { Separator } from '@/components/ui/separator';
import { getAge } from '@/lib/utils';
import Image from 'next/image';

function HomePage() {
  return (
    <>
      <div className="my-10">
        <div className="max-w-[400px] md:max-w-[1000px] flex flex-col mx-auto items-center justify-center">
          <h1 className="text-3xl md:text-7xl text-center font-semibold tracking-tight scroll-m-20">
            Aymane Chaaba
          </h1>
          <p className="text-center text-sm md:text-base font-medium tracking-tight">
            Software Engineer | Web Developer
          </p>
          <p className="text-center text-sm md:text-base">
            <span>from</span> <span className="">Morocco ♥️🇲🇦</span>
            {' | '}
            <span>{getAge(1999)} yo.</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
