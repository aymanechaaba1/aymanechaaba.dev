'use client';

import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { cn, formatBudget, formatLastBudget } from '@/lib/utils';
import { Textarea } from './ui/textarea';
import { useFormState, useFormStatus } from 'react-dom';
import { ElementType, LegacyRef, forwardRef, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { submitForm } from '@/actions/submitForm';
import { Button as HeadlessBtn, Field, Input } from '@headlessui/react';
import { Button } from './ui/button';

export const projectsStartDates = {
  asap: 'as soon as possible',
  in_1_month: 'in 1 month',
  in_3_months: 'in 3 months',
  in_6_month: 'in 6 months',
  this_year: 'this year',
} as const;

export const budgets = [
  '500-1000',
  '1000-4999',
  '5000-10000',
  '10000+',
] as const;

function SendButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="md:col-span-2" disabled={pending}>
      {pending ? 'Sending...' : 'Send'}
    </Button>
  );
}

function ContactForm() {
  const [state, formAction] = useFormState(submitForm, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.email) {
      toast(state?.email?.message);
    }

    state?.email?.ok && formRef.current?.reset();
  }, [state]);

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row md:items-center md:justify-evenly"
    >
      <h1 className="ac-heading text-center md:w-1/2">
        Let&apos;s Work Together
      </h1>
      <form
        action={formAction}
        className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:w-1/2 mx-auto w-full"
        ref={formRef}
      >
        <Field>
          <Label htmlFor="firstname" className="font-medium">
            First Name
          </Label>
          <Input
            id="firstname"
            name="firstname"
            autoComplete="off"
            className={cn('headless-input', {
              'border-red-500': state?.errors?.firstname,
            })}
          />
          {state?.errors?.firstname && (
            <span className="text-xs text-red-500">
              {state.errors.firstname}
            </span>
          )}
        </Field>
        <Field>
          <Label htmlFor="lastname" className="font-medium">
            Last Name
          </Label>
          <Input
            id="lastname"
            name="lastname"
            autoComplete="off"
            className={cn('headless-input', {
              'border-red-500': state?.errors?.lastname,
            })}
          />
          {state?.errors?.lastname && (
            <span className="text-xs text-red-500">
              {state.errors.lastname}
            </span>
          )}
        </Field>
        <Field>
          <Label htmlFor="company_name" className="font-medium">
            Company Name
          </Label>
          <Input
            id="company_name"
            name="company_name"
            autoComplete="off"
            className={cn('headless-input', {
              'border-red-500': state?.errors?.company_name,
            })}
          />
          {state?.errors?.company_name && (
            <span className="text-xs text-red-500">
              {state.errors.company_name}
            </span>
          )}
        </Field>
        <Field>
          <Label htmlFor="email" className="font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            autoComplete="off"
            className={cn('headless-input', {
              'border-red-500': state?.errors?.email,
            })}
          />
          {state?.errors?.email && (
            <span className="text-xs text-red-500">{state.errors.email}</span>
          )}
        </Field>
        <Field>
          <Label htmlFor="project_start_date" className="font-medium">
            Estimated Project Start Date
          </Label>
          <Select name="project_start_date" defaultValue="asap">
            <SelectTrigger
              className={cn('w-full mt-[.75rem]', {
                'border-red-500': state?.errors?.project_start_date,
              })}
            >
              <SelectValue placeholder="Select an estimated date" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.entries(projectsStartDates).map(([key, value], i) => (
                  <SelectItem key={i} value={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {state?.errors?.project_start_date && (
            <span className="text-xs text-red-500">
              {state.errors.project_start_date}
            </span>
          )}
        </Field>
        <Field>
          <Label htmlFor="budget" className="font-medium">
            Budget
          </Label>
          <Select name="budget" defaultValue={budgets[0]}>
            <SelectTrigger
              className={cn('w-full mt-[.75rem]', {
                'border-red-500': state?.errors?.budget,
              })}
            >
              <SelectValue placeholder="Select an estimated date" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {budgets.slice(0, -1).map((budget, i) => (
                  <SelectItem key={i} value={budget}>
                    {formatBudget(budget)}
                  </SelectItem>
                ))}
                <SelectItem value={budgets.at(-1)!}>
                  {formatLastBudget(budgets.at(-1)!)}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {state?.errors?.budget && (
            <span className="text-xs text-red-500">{state.errors.budget}</span>
          )}
        </Field>
        <Field className="md:col-span-2">
          <Label htmlFor="brief_description" className="font-medium">
            Brief description of your project scope
          </Label>
          <Textarea
            id="brief_description"
            name="brief_description"
            placeholder="Maximum of 2000 characters."
            className={cn('mt-[.75rem]', {
              'border-red-500': state?.errors?.brief_description,
            })}
          />
          {state?.errors?.brief_description && (
            <span className="text-xs text-red-500">
              {state.errors.brief_description}
            </span>
          )}
        </Field>
        <div />
        <SendButton />
      </form>
    </section>
  );
}

export default ContactForm;
