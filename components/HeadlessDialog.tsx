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
import { X } from 'lucide-react';
import { Dispatch, type ReactNode, SetStateAction, useState } from 'react';
import { FaX } from 'react-icons/fa6';

function HeadlessDialog({
  buttonLabel,
  buttonClassName,
  dialogTitle,
  children,
  className,
  panelClassName,
  isOpen,
  setIsOpen,
  closeIconClassName,
}: {
  buttonLabel: string | ReactNode;
  dialogTitle?: string;
  children: Readonly<ReactNode>;
  buttonClassName?: string;
  className?: string;
  panelClassName?: string;
  isOpen: boolean | false;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeIconClassName?: string;
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
          className="relative z-20 focus:outline-none"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div
            className={cn(
              'fixed inset-0 m-auto z-50 backdrop-blur-md dark:bg-zinc-900/30 opacity-100'
            )}
          >
            <div
              className={cn(
                'fixed inset-x-4 backdrop-blur top-8 z-50 origin-top rounded-3xl bg-white/30 ring-1 ring-zinc-900/5 dark:bg-zinc-900/30 dark:ring-zinc-800 opacity-100 scale-100',
                className
              )}
            >
              <X
                className={cn(
                  'absolute top-5 right-5 opacity-80 cursor-pointer z-30',
                  closeIconClassName
                )}
                onClick={() => setIsOpen(false)}
                size={30}
              />
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className={cn('bg-transparent', panelClassName)}>
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
