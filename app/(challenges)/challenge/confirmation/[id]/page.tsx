import { db } from '@/lib/firebase';
import { Button } from '@headlessui/react';
import { doc, getDoc } from 'firebase/firestore';
import { redirect } from 'next/navigation';
import React from 'react';

async function ConfirmationPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">
        Your Seat is Secured! 🎉
      </h1>
      <p className="text-center mt-1 font-medium w-2/3 mx-auto">
        You are now officially registered for the Full Stack AI SaaS Challenge!
      </p>
      <p className="text-center bg-gray-800 text-white ring-1 font-semibold text-2xl ring-gray-700 mt-4 py-3">
        👇🏼 Here&apos;s your Next Step
      </p>
      <div className="flex justify-center">
        <Button
          type="button"
          className="inline-flex ring-4 ring-emerald-600 hover:ring-emerald-800 w-full mt-5 rounded-md items-center gap-2 max-w-[400px] mx-auto bg-emerald-700 text-center justify-center uppercase text-xl py-1.5 px-3 font-bold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-emerald-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          Join the Challenge Space & Community
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
