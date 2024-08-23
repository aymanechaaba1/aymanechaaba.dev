import React, { Suspense } from 'react';
import Review, { ReviewType } from './Review';
import Reviews from './Reviews';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { storage } from '@/lib/firebase';
import CustomVideo from './CustomVideo';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

export let reviews: ReviewType[] = [
  {
    id: uuidv4(),
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2F434468144_266681146505497_9172552946024311321_n.jpg?alt=media&token=c886a513-2e10-40b1-9c20-ff014fee89dc',
    testimonial: 'Our speed score like went through the roof 🚀! x3 at least',
    fullName: 'Brian',
    brand: {
      name: 'Survival Gear BSO',
      logo: 'https://www.survivalgear.us/cdn/shop/files/logo_8aacd8c9-3570-438f-9578-3aef12909b20_100x@2x.png?v=1631644190',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FIMG_0583.webp?alt=media&token=3fb1870f-6c65-4710-af84-c8087f39dfdc',
    testimonial: (
      <p>
        Aymane is very talented when it comes to Web Design, E-Commerce. He
        combines coding with design and marketing to create high converting
        stores, my conversion rate went from{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
          2%
        </span>{' '}
        to{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
          14%
        </span>{' '}
      </p>
    ),
    fullName: 'Savannah Rose',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/04b4eb3c7f8ae828c4ce90827b2be31c-1628213266768/80f2fef3-602a-4d20-adfa-53274219182b.png',
    testimonial:
      'Working with Aymane was a game-changer for our eCommerce business. Their expertise in Shopify development transformed our store into a sleek, user-friendly platform that has significantly boosted our sales.',
    fullName: 'Muskan Mumtaz',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/65c7c3ac40bfef7dc0e9690d36254007-1706590921710771484339/JPEG_20240318_101803_7982147811851693682.jpg',
    testimonial:
      'Exceptional design and development skills! Aymane created a stunning website that perfectly aligns with our brand. Their attention to detail and creativity are unmatched.',
    fullName: 'Doug Bins',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/830cb7bbd6acc472efa9b5e614c203dc-1699571087601/efd9fe1a-32c6-4182-88f9-662ab083a06d.jpg',
    testimonial:
      "We couldn't be happier with the results. Aymane's proficiency in Shopify and web development led to a seamless and highly functional website. Highly recommended!",
    fullName: 'Mary Bogan',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c863f3f4d0452c4dd3659ad9911640b2-1657651101702668344.018732/6C22AB62-37C1-4504-A236-2B786EB45113',
    testimonial:
      'From concept to execution, Aymane delivered a top-notch Shopify store. Their technical skills and design sense are both impressive, and they were a pleasure to work with.',
    fullName: 'Agnes Wisozk PhD',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    testimonial:
      "I was blown away by Aymane's ability to bring our vision to life. The website design is beautiful, and the Shopify integration is flawless. An outstanding professional!",
    fullName: 'Erik Carroll',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/kev_chee.jpeg',
    testimonial:
      'Thanks to Aymane, our Shopify site is not only visually appealing but also optimized for performance. Their expertise has significantly improved our user experience and conversion rates.',
    fullName: 'Marvin Treutel',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/WarwickOnX.jpeg',
    testimonial:
      "If you're looking for a talented web designer and developer, look no further. Aymane took our project from good to great with their innovative design and technical skills.",

    fullName: 'Ervin Gleason',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/sarahannyong.jpeg',
    testimonial:
      'Working with Aymane was a fantastic experience. Their deep knowledge of Shopify and web development made the entire process smooth and efficient. The final product exceeded our expectations.',
    fullName: 'Belinda Hane',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/catratbat_uk.jpeg',
    testimonial:
      'We had high hopes for our Shopify site redesign, and Aymane surpassed them all. Their work is not only professional but also incredibly effective in driving customer engagement.',
    fullName: 'Owen Rhodes',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/quantumlandbook.jpeg',
    testimonial:
      'The website Aymane created for us is a masterpiece. Their design skills are top-notch, and their ability to integrate complex features into Shopify is impressive.',
    fullName: 'Lauren Wilkinson',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/idenizturk_art.jpeg',
    testimonial:
      'I’m thrilled with the results of our new site, thanks to Aymane. Their expertise in Shopify and web design is evident in every aspect of the finished product.',
    fullName: 'Deniz',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/jam73e.jpeg',
    testimonial:
      'Highly skilled and professional, Aymane delivered a website that is both aesthetically pleasing and functionally robust. Their Shopify development skills are second to none.',
    fullName: 'Agnes Donnelly',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/itsNazishMohsin.jpeg',
    testimonial:
      'Our Shopify store is now more attractive and functional than ever, all thanks to Aymane. Their work exceeded our expectations and brought our ideas to life.',
    fullName: 'Nazish',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/DeepForestUA.jpeg',
    testimonial:
      'From the initial consultation to the final launch, Aymane demonstrated exceptional skill and dedication. The Shopify store they developed is both beautiful and highly effective.',
    fullName: 'Edwin',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.buymeacoffee.com/assets/img/wall-of-love/twitter/talouis.jpeg',
    testimonial:
      "I've worked with several developers, but Aymane stands out for their creativity and technical prowess. They crafted a Shopify site that perfectly reflects our brand’s identity.",
    fullName: 'Tricia Louis',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64d8aba8477b1fd32c42649c_2_AHR4im_400x400.jpg',
    testimonial:
      'Fantastic work! Aymane managed to enhance our website’s design and functionality, making it more user-friendly and visually appealing. Our customers love the new look.',
    fullName: 'Shari Aufderhar',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/62b688b135d5c2de27145fee_iPWQxhQI_400x400.jpg',
    testimonial:
      'The project with Aymane was seamless. Their expertise in Shopify development and web design ensured that our site not only looks great but also performs excellently.',
    fullName: 'Eric Hayes',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/6252566c68fc3e0a9e507f16_vD4e_135_400x400.jpg',
    testimonial:
      "We were impressed by Aymane's ability to understand our needs and deliver a Shopify store that met all our requirements. Their work is both efficient and creative.",
    fullName: 'Ervin Grimes',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/62b688086a25e4d7211cc275_W37vViPF_400x400.jpg',
    testimonial:
      'Our website’s new look, thanks to Aymane, is modern and engaging. Their technical skills and design sensibility are truly exceptional.',
    fullName: 'Ismael Parker',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/625255bceafd93d5d6c72765_L8mTdMrR_400x400.jpg',
    testimonial:
      'I can’t recommend Aymane enough. They designed and developed a Shopify store that is both functional and visually stunning, leading to increased traffic and sales.',
    fullName: 'Fereber',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/6231b7c6921be7463c82d86b_c_4eVbRV_400x400.jpg',
    testimonial:
      'The new site designed by Aymane is a game changer. Their ability to blend design and functionality has resulted in a Shopify store that stands out in the market.',
    fullName: 'Jenny Rowe',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/627f4f0b0cce1b67df23f54c_I-cyEcKl_400x400.jpg',
    testimonial:
      'Working with Aymane was a delight. Their professionalism and expertise in web design and Shopify development were evident throughout the project.',
    fullName: 'Faye Jerde',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/64d4438e8bf75a595d015f89_c6MprQ6S_400x400.jpg',
    testimonial:
      'We are absolutely thrilled with the Shopify store Aymane developed for us. Their attention to detail and innovative approach have made a significant impact on our business.',
    fullName: 'Martina',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/625258761e670d8c3b5847f3_Ubma2Y7j_400x400.jpg',
    testimonial:
      "The quality of Aymane's work speaks for itself. Our new Shopify site is not only beautifully designed but also performs flawlessly.",
    fullName: 'Ira Delmar',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://cdn.prod.website-files.com/61789b489343c8242282a0ae/61eb73d929ac523affb85fa2_D0oKTXAr_400x400.jpg',
    testimonial:
      'If you want a Shopify developer who combines creativity with technical expertise, Aymane is the person to hire. Their work is top-tier and highly effective.',
    fullName: 'Mathew Olsberg',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://framerusercontent.com/images/CQwYoRpt8zdjxuW757Q9N0YPmqo.png',
    testimonial:
      'Aymane took our web design to the next level with their exceptional Shopify development skills. The new site is engaging, efficient, and perfectly suited to our needs.',
    fullName: 'Kassie Jast',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar: 'https://randomuser.me/api/portraits/women/89.jpg',
    testimonial:
      "Impressed by Aymane's ability to deliver a high-quality Shopify store under tight deadlines. Their professionalism and skill are truly commendable.",
    fullName: 'Joanne Patterson',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
  {
    id: uuidv4(),
    avatar:
      'https://yt3.ggpht.com/B8sOkdvexb8jJ7zJGxxRAcvVcTATwvZljZjtIsiRYqLwitVs3oGMqSOmFuGzZkWy0TtLpzKwwg=s88-c-k-c0x00ffffff-no-rj',
    testimonial:
      'Our new website, designed by Aymane, is a perfect reflection of our brand. Their ability to integrate design and functionality seamlessly is impressive.',
    fullName: 'Antoinette',
    brand: {
      name: 'Shop Honey Jade',
      logo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FSavannah%20Rose.avif?alt=media&token=dc43de17-36f4-4986-a016-3189fcbb91b0',
    },
    role: 'Founder & CEO',
  },
];

async function SocialProof() {
  let urls = [];
  let refs = await listAll(ref(storage, 'testimonialVideos/'));
  for (const ref of refs.items) {
    let url = await getDownloadURL(ref);
    urls.push(url);
  }

  let newReviews = [...reviews].map((review, i) => ({
    ...review,
    avatar: review.avatar || faker.image.avatar(),
  }));

  return (
    <div>
      <Reviews reviews={newReviews} />
      <div className="flex items-center gap-x-5 container justify-center py-5">
        {urls.map((url, i) => (
          <CustomVideo key={i} url={url} />
        ))}
      </div>

      <div className="w-full h-[700px] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-fec6a.appspot.com/o/testimonials%2FIMG_0583.webp?alt=media&token=3fb1870f-6c65-4710-af84-c8087f39dfdc)] bg-cover bg-center bg-no-repeat relative">
        <div className="w-full h-[700px] bg-gradient-to-b from-pink-400/20" />
        <h1 className="text-3xl text-white font-semibold tracking-tight text-center mt-6 text-shadow drop-shadow-xl absolute top-0 px-4">
          &quot;My Sales skyrocket 🚀 after Aymane&apos;s Changes&quot;{' '}
          <span>
            - Savannah, CEO of{' '}
            <a
              href="https://shophoneyjade.com.au/"
              className="underline text-transparent bg-clip-text bg-gradient-to-r from-pink-100 to-pink-200 border-b-[3px] border-pink-200"
            >
              shophoneyjade.com.au
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default SocialProof;
