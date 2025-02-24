'use client';

import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

function LogosScroll(props: { logos: ReactNode[] }) {
  return (
    <div className="logo-scroll w-full overflow-hidden">
      <motion.div
        // initial={{ translateX: '-100%' }}
        // animate={{ translateX: '100%' }}
        // transition={{
        //   repeat: Infinity,
        //   duration: 10,
        //   ease: 'linear',
        // }}
        className="flex items-center justify-center gap-x-4"
      >
        {props.logos.map((logo) => logo)}
      </motion.div>
    </div>
  );
}

export default LogosScroll;
