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
} from '@react-email/components';

type NewUser = {
  firstname: string;
  lastname: string;
  company_name: string;
  email: string;
  project_start_date:
    | 'asap'
    | 'in_1_month'
    | 'in_3_months'
    | 'in_6_months'
    | 'this_year';
  budget: '500-1000' | '1000-4999' | '5000-10000' | '10000+';
  brief_description: string;
};

function NewClientEmail({ newClient }: { newClient: NewUser }) {
  return (
    <Html>
      <Head />
      <Preview>🎉 NEW Client</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="font-bold">{newClient.company_name}</Heading>
            <Row>
              <Column>First Name</Column>
              <Column>{newClient.firstname}</Column>
            </Row>
            <Row>
              <Column>Last Name</Column>
              <Column>{newClient.lastname}</Column>
            </Row>
            <Row>
              <Column>Company Name</Column>
              <Column>{newClient.company_name}</Column>
            </Row>
            <Row>
              <Column>Email</Column>
              <Column>{newClient.email}</Column>
            </Row>
            <Row>
              <Column>Estimated Project Start Date</Column>
              <Column>{newClient.project_start_date}</Column>
            </Row>
            <Row>
              <Column>Budget</Column>
              <Column>{newClient.budget}</Column>
            </Row>
            <Row>
              <Column>Brief Description</Column>
              <Column>{newClient.brief_description}</Column>
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default NewClientEmail;
