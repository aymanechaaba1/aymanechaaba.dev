import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Separator } from '@/components/ui/separator';
import { getAge } from '@/lib/utils';
import Image from 'next/image';

function HomePage() {
  return (
    <>
      <div className="my-10">
        <Intro />
        <Projects />
        <Testimonials />
        <BackgroundBeams className="-z-50" />
      </div>
    </>
  );
}

export default HomePage;
