import Image from 'next/image';

const skills = [
  'NextJS, TailwindCSS, Typescript, SQL, Firebase, tRPC, Prisma, Zustand, NextAuth',
];

const hobbies = [
  'Football ⚽️',
  'Bodybuilding 🏋️‍♀️',
  'Reading 📚',
  'Movies 🍿',
  'Guitar 🎸',
];

export default function Home() {
  return (
    <div className="my-5 space-y-3">
      <section>
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/school-manager-e26b7.appspot.com/o/WhatsApp%20Image%202023-09-08%20at%2012.58.34%20PM.jpeg?alt=media&token=1eb90c0e-40de-4ae7-8578-c7e702c1f8a8`}
          alt="Aymane Chaaba"
          width={100}
          height={100}
          className="rounded-lg mb-3"
        />
        <h1 className="text-xl font-medium mb-2">
          Hey, I'm Aymane Chaaba 👋 <br />
        </h1>
        <div>
          <p>I'm a Web Developer from Morocco 🇲🇦</p>
        </div>
      </section>
      <section>
        <h1 className="font-medium  text-xl">Skills</h1>
        <ul>
          {skills.map((skill, i) => (
            <li key={i} className="text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1 className="font-medium  text-xl">Hobbies</h1>
        <div className="space-x-2 divide-x">
          {hobbies.map((hobby, i) => (
            <span key={i} className="pl-2 first:pl-0 text-sm md:text-base">
              {hobby}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
