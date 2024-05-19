import ContactForm from '@/components/ContactForm';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Testimonials from '@/components/Testimonials';

function HomePage() {
  return (
    <>
      <div className="my-10">
        <Intro />
        <TechStack />
        <Projects />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
          <Services />
          <Testimonials />
        </div>

        <ContactForm />
      </div>
    </>
  );
}

export default HomePage;
