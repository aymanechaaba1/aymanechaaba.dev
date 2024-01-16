'use client';

import { Button } from './ui/button';

function FallbackError({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="mt-1 space-y-3">
      <h4 className="scroll-m-20 text-xl font-semibold dark:text-gray-200 text-gray-900 tracking-tight">
        Something went wrong!
      </h4>
      <Button variant={'secondary'} onClick={() => resetErrorBoundary()}>
        Try again
      </Button>
    </div>
  );
}

export default FallbackError;
