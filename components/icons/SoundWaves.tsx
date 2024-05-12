import { cn } from '@/lib/utils';

function SoundWaves({
  isPlaying,
  onClick,
  className,
}: {
  isPlaying: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn('flex items-center gap-x-[1px] h-[14px]', className)}
      onClick={onClick}
    >
      <div
        className={cn(
          'w-[1px] h-[4px] bg-zinc-900 dark:bg-zinc-200 delay-0 transition',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[9px] bg-zinc-900 dark:bg-zinc-200 delay-100 transition',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[13px] bg-zinc-900 dark:bg-zinc-200 delay-300',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[9px] bg-zinc-900 dark:bg-zinc-200 delay-500',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn('w-[1px] h-[4px] bg-zinc-900 dark:bg-zinc-200 delay-75', {
          'animate-wave': isPlaying,
        })}
      />
      <div
        className={cn(
          'w-[1px] h-[6px] bg-zinc-900 dark:bg-zinc-200 delay-300',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[11px] bg-zinc-900 dark:bg-zinc-200 delay-200',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[16px] bg-zinc-900 dark:bg-zinc-200 delay-300',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[14px] bg-zinc-900 dark:bg-zinc-200 delay-500',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[6px] bg-zinc-900 dark:bg-zinc-200 delay-600',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[9px] bg-zinc-900 dark:bg-zinc-200 delay-500',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[8px] bg-zinc-900 dark:bg-zinc-200 delay-300',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[5px] bg-zinc-900 dark:bg-zinc-200 delay-500',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
      <div
        className={cn(
          'w-[1px] h-[3px] bg-zinc-900 dark:bg-zinc-200 delay-300',
          {
            'animate-wave': isPlaying,
          }
        )}
      />
    </div>
  );
}

export default SoundWaves;
