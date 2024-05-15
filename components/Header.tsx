import { LOGO_URL } from '@/config';
import Logo from './Logo';
import Navbar from './Navbar';
import HeadlessDialog from './HeadlessDialog';
import { ToggleDarkMode } from './ToggleDarkMode';
import Link from 'next/link';
import NavLinks from './NavLinks';

function Header() {
  return (
    <div className="flex items-center justify-between top-0 backdrop-blur bg-white/30 dark:bg-background/30 z-10 py-2 container sticky">
      <Logo url={LOGO_URL} />
      <nav className="hidden md:flex gap-x-3 rounded-full py-2 px-4 zinc-ring-shadow text-sm gap-y-3">
        <NavLinks />
      </nav>
      <div className="flex items-center gap-x-3">
        <HeadlessDialog
          className="p-5"
          buttonLabel="Menu"
          buttonClassName="group md:hidden flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
          dialogTitle="Navigation"
        >
          <Navbar />
        </HeadlessDialog>
        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default Header;
