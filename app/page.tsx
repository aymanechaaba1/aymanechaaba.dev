import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
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
      </div>
    </>
  );
}

export default HomePage;
