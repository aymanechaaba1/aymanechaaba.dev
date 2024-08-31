'use client';

import { submitContactForm } from '@/actions/submitContactForm';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import styled from 'styled-components';
import { Bricolage_Grotesque } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

const StyledForm = styled.form``;
const StyledFieldset = styled.fieldset``;
const StyledInputContainer = styled.div`
  all: unset;
  width: 100%;
  display: flex;
`;
const StyledInput = styled.input`
  all: unset;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.02);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.375;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  margin-top: 0.25rem;
  display: block;
  --tw-border-opacity: 1;

  &:focus {
    outline-color: transparent !important;
    background: hsla(0, 0%, 100%, 0.07);
  }
`;
const StyledLabelErrorMsg = styled.label`
  font-size: 0.75rem;
  line-height: 1.5;
  --tw-text-opacity: 1;
  color: rgb(239 61 87 / var(--tw-text-opacity));
  margin-bottom: 0 !important;
`;
const StyledTextArea = styled.textarea`
  all: unset;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.02);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  color: #fff;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  line-height: 1.375;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  height: 100px;

  &:focus {
    outline-color: transparent !important;
    background: hsla(0, 0%, 100%, 0.07);
  }
`;
const StyledSubmitButton = styled.button``;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <StyledSubmitButton
      type="submit"
      disabled={pending}
      className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-foreground text-background hover:text-border-stronger focus-visible:text-border-control border-foreground-light hover:border-foreground-lighter focus-visible:outline-border-strong data-[state=open]:border-foreground-lighter data-[state=open]:outline-border-strong text-base leading-4 px-3 py-2 h-[34px]"
    >
      {pending ? <Loader2 className="animate-spin" /> : 'submit'}
    </StyledSubmitButton>
  );
}

function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, null);

  return (
    <div className="container">
      <h1 className={`${bricolage.className} text-3xl my-4 text-[#dde1ee]`}>
        How can we help?
      </h1>
      <StyledForm
        action={formAction}
        className="grid grid-cols-1 gap-y-3 text-left w-full"
      >
        <StyledFieldset className="w-full">
          <div>
            <StyledInputContainer className="">
              <StyledInput
                name="fullName"
                type="text"
                placeholder="fullName*"
                className=""
                autoComplete="off"
              />
            </StyledInputContainer>
            <StyledLabelErrorMsg htmlFor="">
              {state?.fullName}
            </StyledLabelErrorMsg>
          </div>
        </StyledFieldset>
        <StyledFieldset className="grid grid-cols-1 gap-2 w-full">
          <div>
            <StyledInputContainer className="">
              <StyledInput
                name="email"
                type="email"
                autoComplete="off"
                placeholder="email*"
                className=""
              />
            </StyledInputContainer>
            <StyledLabelErrorMsg htmlFor="">{state?.email}</StyledLabelErrorMsg>
          </div>
        </StyledFieldset>
        <StyledFieldset className="grid grid-cols-1 gap-2 w-full">
          <div>
            <StyledInputContainer className="">
              <StyledTextArea
                name="message"
                autoComplete="off"
                placeholder="message*"
                className=""
                minLength={30}
              />
            </StyledInputContainer>
            <StyledLabelErrorMsg htmlFor="">
              {state?.message}
            </StyledLabelErrorMsg>
          </div>
        </StyledFieldset>
        <SubmitButton />
      </StyledForm>
    </div>
  );
}

export default ContactPage;
