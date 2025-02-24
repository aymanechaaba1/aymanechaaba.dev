import { unstable_noStore } from 'next/cache';
import React from 'react';

function CurrentYear() {
  const currentYear = new Date().getFullYear();
  unstable_noStore();

  return <span>{currentYear}</span>;
}

export default CurrentYear;
