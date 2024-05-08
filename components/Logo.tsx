import Image from 'next/image';
import Link from 'next/link';

function Logo({ url }: { url: string }) {
  return (
    <div className="origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
      <Link href={'/'} className="">
        <Image
          priority
          src={url}
          width={100}
          height={100}
          alt="logo"
          className="circle"
        />
      </Link>
    </div>
  );
}

export default Logo;
