import { LOGO_URL } from '@/config';
import Logo from './Logo';
import Navbar from './Navbar';
import HeadlessDialog from './HeadlessDialog';
import { ToggleDarkMode } from './ToggleDarkMode';
import Link from 'next/link';
import NavLinks from './NavLinks';

function Header() {
  return (
    <div className="flex items-center justify-between top-0 backdrop-blur bg-white/30 dark:bg-background/30 z-10 py-2 px-4 sticky">
      <Logo url={LOGO_URL} />
      <nav className="hidden md:flex gap-x-3 rounded-full py-2 px-4 zinc-ring-shadow text-sm gap-y-3 mt-3">
        <NavLinks />
      </nav>
      <div className="flex items-center gap-x-3">
        <HeadlessDialog buttonLabel="Menu" dialogTitle="Navigation">
          <Navbar />
        </HeadlessDialog>
        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default Header;
