import Link from 'next/link';
import { ToggleDarkMode } from './ToggleDarkMode';

const navlinks = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/projects/?sort=updated&per_page=5&page=1',
    label: 'projects',
  },
  {
    path: '/blog',
    label: 'blog',
  },
  {
    path: '/contact',
    label: 'contact',
  },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {navlinks.map((navlink) => (
          <Link
            key={navlink.path}
            href={navlink.path}
            className="scroll-m-20 tracking-tight font-semibold"
          >
            {navlink.label}
          </Link>
        ))}
      </div>
      <div>
        <ToggleDarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
