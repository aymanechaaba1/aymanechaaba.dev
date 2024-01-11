import { ReactNode } from 'react';

function Icon({
  width,
  height,
  fill,
  children,
}: {
  width?: string;
  height?: string;
  fill?: string;
  children: ReactNode;
}) {
  return (
    <svg width={width} height={height}>
      {children}
    </svg>
  );
}

export default Icon;
