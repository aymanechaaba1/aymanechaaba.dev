'use client';

import { submitForm } from '@/app/_actions';
import { Label } from './ui/label';
import { Input } from './ui/input';
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
import { Button } from './ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

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

export type InitState = {
  email?: {
    ok: boolean;
    message: string;
  };
  errors?: {
    firstname?: string[] | undefined;
    lastname?: string[] | undefined;
    company_name?: string[] | undefined;
    email?: string[] | undefined;
    project_start_date?: string[] | undefined;
    budget?: string[] | undefined;
    brief_description?: string[] | undefined;
  };
};

const initState: InitState = {
  errors: {
    firstname: undefined,
    lastname: undefined,
    company_name: undefined,
    email: undefined,
    project_start_date: undefined,
    budget: undefined,
    brief_description: undefined,
  },
};

function ContactForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(submitForm, initState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    toast(state?.email?.message);
    state?.email?.ok && formRef.current?.reset();
  }, [state]);

  return (
    <form
      action={formAction}
      className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4"
      ref={formRef}
    >
      <div className="space-y-2">
        <Label htmlFor="firstname" className="font-medium">
          First Name
        </Label>
        <Input
          id="firstname"
          name="firstname"
          className={cn({
            'border-red-500': state?.errors?.firstname,
          })}
        />
        {state?.errors?.firstname && (
          <span className="text-xs text-red-500">{state.errors.firstname}</span>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastname" className="font-medium">
          Last Name
        </Label>
        <Input
          id="lastname"
          name="lastname"
          className={cn({
            'border-red-500': state?.errors?.lastname,
          })}
        />
        {state?.errors?.lastname && (
          <span className="text-xs text-red-500">{state.errors.lastname}</span>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="company_name" className="font-medium">
          Company Name
        </Label>
        <Input
          id="company_name"
          name="company_name"
          className={cn({
            'border-red-500': state?.errors?.company_name,
          })}
        />
        {state?.errors?.company_name && (
          <span className="text-xs text-red-500">
            {state.errors.company_name}
          </span>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="font-medium">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          className={cn({
            'border-red-500': state?.errors?.email,
          })}
        />
        {state?.errors?.email && (
          <span className="text-xs text-red-500">{state.errors.email}</span>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="project_start_date" className="font-medium">
          Estimated Project Start Date
        </Label>
        <Select name="project_start_date" defaultValue="asap">
          <SelectTrigger
            className={cn('w-full', {
              'border-red-500': state?.errors?.project_start_date,
            })}
          >
            <SelectValue placeholder="Select an estimated date" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.entries(projectsStartDates).map(([key, value]) => (
                <SelectItem value={key}>{value}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {state?.errors?.project_start_date && (
          <span className="text-xs text-red-500">
            {state.errors.project_start_date}
          </span>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="budget" className="font-medium">
          Budget
        </Label>
        <Select name="budget" defaultValue={budgets[0]}>
          <SelectTrigger
            className={cn('w-full', {
              'border-red-500': state?.errors?.budget,
            })}
          >
            <SelectValue placeholder="Select an estimated date" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {budgets.slice(0, -1).map((budget) => (
                <SelectItem value={budget}>{formatBudget(budget)}</SelectItem>
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
      </div>
      <div className="space-y-2">
        <Label htmlFor="brief_description" className="font-medium">
          Brief description of your project scope
        </Label>
        <Textarea
          id="brief_description"
          name="brief_description"
          placeholder="Maximum of 2000 characters."
          className={cn({
            'border-red-500': state?.errors?.brief_description,
          })}
        />
        {state?.errors?.brief_description && (
          <span className="text-xs text-red-500">
            {state.errors.brief_description}
          </span>
        )}
      </div>
      <div />
      <Button type="submit" disabled={pending}>
        {pending ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
}

export default ContactForm;
