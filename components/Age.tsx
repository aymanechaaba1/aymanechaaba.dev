import { getAge } from '@/lib/utils';
import { unstable_noStore as noStore } from 'next/cache';
import React from 'react';

function Age() {
  noStore();

  return <span>{getAge(1999)} yo.</span>;
}

export default Age;
