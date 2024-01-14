'use client';

import Link from 'next/link';
import { ToggleDarkMode } from './ToggleDarkMode';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const navlinks = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/projects?sort=updated&per_page=5&page=1',
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
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-end gap-5">
      <div className="flex items-center gap-4">
        {navlinks.map((navlink) => (
          <Link
            key={navlink.path}
            href={navlink.path}
            className={cn(
              'scroll-m-20 tracking-tight font-semibold text-gray-500',
              {
                'text-white': navlink.path.split('?').at(0) === pathname,
              }
            )}
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
