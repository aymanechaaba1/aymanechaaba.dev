import Link from 'next/link';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import { Separator } from './ui/separator';

const GITHUB_URL = `https://github.com/aymanechaaba1`;
const TWITTER_URL = `https://twitter.com/aymanedev`;

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <>
      <Separator />
      <footer className="flex items-center justify-between container py-2">
        <p className="text-sm text-muted-foreground">
          {currentYear} ©️ Aymane Chaaba
        </p>
        <div className="flex items-center gap-3">
          <Link target="_blank" href={GITHUB_URL}>
            <GithubIcon width="18" />
          </Link>
          <Link target="_blank" href={TWITTER_URL}>
            <TwitterIcon width="18" />
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
