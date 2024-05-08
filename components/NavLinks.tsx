import Link from 'next/link';
import React from 'react';

function NavLinks() {
  return (
    <>
      <Link
        href={'/projects'}
        className="hover:text-teal-800 dark:hover:text-teal-400"
      >
        Projects
      </Link>
      <Link
        href={'/work'}
        className="hover:text-teal-800 dark:hover:text-teal-400"
      >
        Work
      </Link>
      <Link
        href={'/uses'}
        className="hover:text-teal-800 dark:hover:text-teal-400"
      >
        Uses
      </Link>
    </>
  );
}

export default NavLinks;
