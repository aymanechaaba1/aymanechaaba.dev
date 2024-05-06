'use client';

import Link from 'next/link';
import { ToggleDarkMode } from './ToggleDarkMode';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const navlinks = [
  {
    path: '/projects',
    label: 'Projects',
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
                'dark:text-white text-gray-900':
                  navlink.path.split('?').at(0) === pathname,
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
