'use client';

import { cn } from '@/lib/utils';
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { type ReactNode, useState } from 'react';

function HeadlessDialog({
  buttonLabel,
  buttonClassName,
  dialogTitle,
  children,
  className,
}: {
  buttonLabel: string | ReactNode;
  dialogTitle: string;
  children: Readonly<ReactNode>;
  buttonClassName?: string;
  className?: string;
}) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={open} className={cn('outline-none', buttonClassName)}>
        {buttonLabel}
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div
            className={cn(
              'fixed inset-0 z-50 backdrop-blur-lg dark:bg-zinc-900/30 opacity-100'
            )}
          >
            <div
              className={cn(
                'fixed inset-x-4 backdrop-blur top-8 z-50 origin-top rounded-3xl bg-white/30 ring-1 ring-zinc-900/5 dark:bg-zinc-900/30 dark:ring-zinc-800 opacity-100 scale-100',
                className
              )}
            >
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="bg-transparent">
                  <DialogTitle
                    as="h3"
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
                  >
                    {dialogTitle}
                  </DialogTitle>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default HeadlessDialog;
