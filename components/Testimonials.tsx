import { Testimonial as T } from '@/types';
import { v4 as uuidv4 } from 'uuid';
import Testimonial from './Testimonial';
import VideoWrapper from './VideoWrapper';
import Video from './Video';
import { BRIAN_VIDEO } from '@/config';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

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
    video: BRIAN_VIDEO,
  },
];

function Testimonials() {
  return (
    <>
      <h1 className="ac-heading text-center">Testimonials</h1>
      <div className="relative">
        <Suspense fallback={<Loader2 className="animate-spin text-center" />}>
          <CustomVideo />
        </Suspense>
        {/* <TestimonialsStack items={testimonials} /> */}
      </div>
    </>
  );
}

export default Testimonials;

async function CustomVideo() {
  let pathRef = ref(storage, 'Sequence 04.mp4');

  let url = await getDownloadURL(pathRef);

  return <Video src={url} />;
}
