import ContactForm from '@/components/ContactForm';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
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
        <TechStack />
        <Projects />
        <Testimonials />
        <BackgroundBeams className="-z-50" />
        <ContactForm />
      </div>
    </>
  );
}

export default HomePage;
