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
import { Dispatch, type ReactNode, SetStateAction, useState } from 'react';

function HeadlessDialog({
  buttonLabel,
  buttonClassName,
  dialogTitle,
  children,
  className,
  isOpen,
  setIsOpen,
}: {
  buttonLabel: string | ReactNode;
  dialogTitle?: string;
  children: Readonly<ReactNode>;
  buttonClassName?: string;
  className?: string;
  isOpen: boolean | false;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={cn('outline-none cursor-pointer', buttonClassName)}
      >
        {buttonLabel}
      </div>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          open={isOpen}
          onClose={() => setIsOpen(false)}
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
