'use client';

import Link from 'next/link';
import NavLinks from './NavLinks';

function Navbar() {
  return (
    <nav className="flex flex-col gap-y-3">
      <NavLinks />
    </nav>
  );
}

export default Navbar;
