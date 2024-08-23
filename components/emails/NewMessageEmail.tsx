import React from 'react';
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Tailwind,
  Text,
} from '@react-email/components';

function NewMessageEmail(props: {
  fullName: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>NEW Message from {props.fullName}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="font-bold">{props.fullName}</Heading>
            <Text>{props.email}</Text>
            <Text>{props.message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NewMessageEmail;
