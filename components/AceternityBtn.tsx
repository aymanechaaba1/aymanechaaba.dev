import { ReactNode } from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';

function AceternityBtn({ label, icon }: { label?: string; icon?: ReactNode }) {
  return (
    <div className="mt-5 flex justify-center text-center font-semibold tracking-tight scroll-m-20">
      <HoverBorderGradient
        containerClassName="rounded-full w-full"
        as="button"
        className="bg-white dark:bg-[hsl(221,40%,8%)] text-zinc-900 dark:text-white flex items-center justify-center space-x-2 w-full"
      >
        {label && <span className="text-center">{label}</span>}
        {icon && icon}
      </HoverBorderGradient>
    </div>
  );
}

export default AceternityBtn;
