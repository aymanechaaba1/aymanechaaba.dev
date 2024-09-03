import Link from 'next/link';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import { Separator } from './ui/separator';
import { LuExternalLink } from 'react-icons/lu';
import { FaFacebook, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const GITHUB_URL = `https://github.com/aymanechaaba1`;
const TWITTER_URL = `https://twitter.com/aymanedev`;

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      <Separator />
      <footer className="container py-4">
        <div className="flex items-center justify-between mb-1">
          <Link
            href={`/terms`}
            className="text-sm transition-colors uppercase tracking-wider text-gray-400 hover:text-gray-200 [--foreground-lighter:0deg_0%_53.7%]"
          >
            Terms
          </Link>
          <Link
            href={`/privacy`}
            className="text-sm transition-colors uppercase tracking-wider text-gray-400 hover:text-gray-200 [--foreground-lighter:0deg_0%_53.7%] text-right"
          >
            Privacy
          </Link>
          <Link
            href={`/contact`}
            className="text-sm transition-colors uppercase tracking-wider text-gray-400 hover:text-gray-200 [--foreground-lighter:0deg_0%_53.7%]"
          >
            Contact
          </Link>
        </div>
        <div className="w-full h-[1px] bg-[rgba(255,255,255,.1)] my-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 my-2 items-center text-gray-400">
          <div>
            <Link
              href={`https://wa.link/ygb0ym`}
              className="align-middle flex items-center gap-x-1 hover:text-gray-200 transition-colors"
              target="_blank"
            >
              +212 643 86 88 18 <LuExternalLink size={13} className="" />
              <FaWhatsapp size={13} />
            </Link>
            <p className="">contact@aymanechaaba.dev</p>
          </div>
          <p className="text-left md:text-right">Rabat, Morocco 🇲🇦</p>
        </div>
        <div className="w-full h-[1px] bg-[rgba(255,255,255,.1)] my-3" />
        <div className="space-y-[4px] flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61561449040436"
              className=""
            >
              <FaFacebook className="text-gray-400 hover:text-gray-200 transition-colors" />
            </Link>
          </div>
          <p className="text-sm text-gray-400">{currentYear} ©️ Aymane</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
