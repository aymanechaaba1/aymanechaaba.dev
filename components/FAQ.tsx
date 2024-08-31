'use client';

import React, { ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ArrowDown } from 'lucide-react';
import { FaArrowDown } from 'react-icons/fa6';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Faq = {
  question: string;
  answer: ReactNode;
};
function FAQ({ faq }: { faq: Faq }) {
  const [expanded, setExpanded] = useState<boolean>();

  const handleChange = (e: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      className={cn(
        'rounded-xl bg-gray-950 border border-gray-800 shadow-lg text-gray-300',
        {
          'border-emerald-600': expanded,
        }
      )}
    >
      <AccordionSummary
        expandIcon={<FaArrowDown className="text-gray-300" />}
        aria-controls="panel1-content"
        id="panel1-header"
        className=" rounded-xl"
      >
        <div className="font-semibold">{faq.question}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="text-gray-400">{faq.answer}</div>
      </AccordionDetails>
    </Accordion>
  );
}

export default FAQ;
