import Link from 'next/link';
import React from 'react';

function NavLinks() {
  return (
    <>
      <Link
        href={'/blog'}
        className="hover:text-teal-800 dark:hover:text-teal-400"
      >
        Blog
      </Link>
    </>
  );
}

export default NavLinks;
