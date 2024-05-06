import Image from 'next/image';

function Logo({ url }: { url: string }) {
  return (
    <Image
      src={url}
      width={100}
      height={100}
      alt="logo"
      className="object-cover dark:invert"
    />
  );
}

export default Logo;
