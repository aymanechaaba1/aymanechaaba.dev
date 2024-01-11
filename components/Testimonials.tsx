import cloudinary from '@/lib/cloudinary';
import { PlayerProps } from 'video-react';

const testimonials: PlayerProps[] = [
  {
    src: 'https://res.cloudinary.com/deywpwmdq/video/upload/v1704912367/testimonials/f4vtzpgun11co5bbwigh.mp4',
    poster:
      'https://res.cloudinary.com/deywpwmdq/image/upload/v1704912476/testimonials/pp1sr5q2hhxkiniy8oqh.png',
  },
];

type Testimonial = {
  public_id: string;
  url: string;
};

async function Testimonials() {
  const { resources: testimonials } = await cloudinary.search
    .expression('folder:testimonials')
    .sort_by('public_id', 'desc')
    .execute();

  return (
    <div className="flex flex-nowrap gap-4 w-full overflow-x-scroll mt-3">
      {testimonials?.map((testimonial: Testimonial) => (
        <div
          key={testimonial.public_id}
          className="flex-shrink-0 flex-grow-0 basis-auto w-1/2 md:w-1/3 lg:w-1/4"
        >
          <video controls className="w-full rounded-lg">
            <source src={testimonial.url} />
          </video>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
