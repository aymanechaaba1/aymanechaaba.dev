import { Service as S } from '@/types';
import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

function Service({ service }: { service: S }) {
  return (
    <div className="flex justify-between items-center gap-x-5">
      <IoCheckmark />
      <div className="flex-1">{service.description}</div>
    </div>
  );
}

export default Service;
