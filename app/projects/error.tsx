'use client';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="grid place-content-center place-items-center gap-4 min-h-screen">
      <h2 className="scroll-m-20 text-3xl text-center font-semibold tracking-tight">
        Something went wrong!
      </h2>
      <Button variant={'secondary'} onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
