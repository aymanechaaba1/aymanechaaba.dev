'use client';

import React, { ReactNode } from 'react';
import HeadlessDialog from '@/components/HeadlessDialog';
import Timer from '@/components/Timer';
import Image from 'next/image';
import Link from 'next/link';
import { CloseButton, Input } from '@headlessui/react';
import clsx from 'clsx';
import { Button } from '@headlessui/react';
import * as z from 'zod';
import { secureSeat } from '@/actions/secureSeat';
import { X } from 'lucide-react';
import Form from 'next/form';

function ChallengeDialog({ buttonLabel }: { buttonLabel: ReactNode }) {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <HeadlessDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      buttonLabel={buttonLabel}
    >
      <CloseButton
        onClick={() => setIsOpen(false)}
        className="absolute right-0 top-0 rounded-full shadow-lg ring-1 ring-gray-200 dark:ring-gray-600 bg-white dark:bg-gray-900 text-black w-[25px] h-[25px] hover:scale-[1.1]"
      >
        <X
          size={17}
          className="mx-auto text-center dark:text-white"
          strokeWidth={2}
        />
      </CloseButton>
      <Image
        src={`https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2157351071/settings_images/6ecfd6a-6d6e-88e4-372d-45f31e6858a_5_Day_AI_SaaS_Challenge.png`}
        width={1920}
        height={1080}
        alt=""
        className="object-cover w-full mt-5 rounded-lg cursor-pointer"
      />
      <h2 className="mt-2 text-center text-xl font-semibold px-4">
        You are almost there.. Enter the details below to secure your seat!
      </h2>
      <p className="text-center">
        (Hurry... The doors close after the first 1000 signups)
      </p>
      {/* <Form action={secureSeat} className="mx-auto py-5 px-10">
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-black/10 placeholder:font-semibold placeholder:text-lg dark:bg-white/5 py-2 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          placeholder="Full Name..."
          type="text"
          name="full_name"
          autoComplete="off"
          autoFocus
        />
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-black/10 dark:bg-white/5 placeholder:text-gray-300 dark:placeholder:text-gray-400 placeholder:font-semibold placeholder:text-lg py-2 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          placeholder="Email..."
          type="email"
          autoComplete="off"
          name="email"
        />
        <Button
          type="submit"
          className="inline-flex w-full mt-5 items-center gap-2 rounded-md bg-emerald-700 text-center justify-center uppercase text-2xl py-1.5 px-3 font-bold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-emerald-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          Secure my Seat
        </Button>
      </Form> */}
    </HeadlessDialog>
  );
}

export default ChallengeDialog;
