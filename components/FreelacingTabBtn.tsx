'use client';

import React from 'react';
import AceternityBtn from './AceternityBtn';
import { IoArrowDown } from 'react-icons/io5';
import { useSectionRef } from './providers/RefProvider';
import Link from 'next/link';

function FreelacingTabBtn({ element }: { element?: HTMLElement }) {
  function scrollToForm() {
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Link href={'#contact'}>
      <AceternityBtn label="Fill in the Form" />
    </Link>
  );
}

export default FreelacingTabBtn;
