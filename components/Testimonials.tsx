import { Testimonial as T } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import Testimonial from './Testimonial';
import { TestimonialsStack } from './ui/TestimonialsStack';

const testimonials: T[] = [
  {
    id: uuidv4(),
    name: 'Savannah Rose',
    company: 'Savannah Rose Cosmetics',
    role: 'Founder & CEO',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FIMG_0583.webp?alt=media&token=3fb1870f-6c65-4710-af84-c8087f39dfdc',
    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2F345877547_1426841894717602_6459520702394060510_n.jpg?alt=media&token=10d65da8-8015-443b-b2db-3cfeb8df2129',
    text: 'Aymane changed how my website looks, it was very messed up, he implemented every feature I wanted.',
    website: 'https://shophoneyjade.com.au',
  },
  {
    id: uuidv4(),
    name: 'Brian',
    company: 'Survival Gear BSO',
    role: 'Founder & CEO',
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2F434468144_266681146505497_9172552946024311321_n.jpg?alt=media&token=c886a513-2e10-40b1-9c20-ff014fee89dc',
    logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2F345877547_1426841894717602_6459520702394060510_n.jpg?alt=media&token=10d65da8-8015-443b-b2db-3cfeb8df2129',
    text: "Aymane was really great with us, anything we asked him to do, he's pretty much been able to do it, the turnaround time was fantastic! Our speed score like went through the roof.",
    website: 'https://www.survivalgear.us',
    video: '',
  },
];

function Testimonials() {
  return (
    <section className="mt-10 flex flex-col md:flex-row items-center gap-x-[3rem] mx-auto md:max-w-[800px]">
      <h1 className="ac-heading text-center">Testimonials</h1>
      <div className="">
        {/* {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))} */}
        <TestimonialsStack items={testimonials} />
      </div>
    </section>
  );
}

export default Testimonials;
