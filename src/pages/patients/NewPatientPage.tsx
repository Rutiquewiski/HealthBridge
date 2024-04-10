import { Container, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form } from "react-router-dom";

function NewPatientPage() {
  return (
    <>
      <Container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        maxW="100vw"
        w="95vw"
        h="90vh"
      >
        <Container
          p="1rem"
          maxW="100% "
          w="100%"
          h="100%"
          bg="white"
          borderStyle="solid"
          borderColor="RGB(109, 187, 191)"
          borderWidth="1px"
          borderRadius="8px"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Container p="1rem" minW="45%">
            <Form>
              <FormLabel>Name</FormLabel>
              <Input mb="1rem" />
              <FormLabel>E-mail</FormLabel>
              <Input type="email" mb="1rem" />
              <FormLabel>Phone</FormLabel>
              <Input type="tel" mb="1rem" />
              <FormLabel>Document</FormLabel>
              <Input mb="1rem" />
              <FormLabel>Medical History</FormLabel>
              <Textarea mb="1rem" />
            </Form>
          </Container>
          <Container p="1rem" minW="45%">
            <Form>
              <FormLabel>Street</FormLabel>
              <Input mb="1rem" />
              <FormLabel>Number</FormLabel>
              <Input type="email" mb="1rem" />
              <FormLabel>Complement</FormLabel>
              <Input type="tel" mb="1rem" />
              <FormLabel>Neighborhood</FormLabel>
              <Input mb="1rem" />
              <FormLabel>Postal Code</FormLabel>
              <Input mb="1rem" />
              <FormLabel>City</FormLabel>
              <Input mb="1rem" />
              <FormLabel>State</FormLabel>
              <Input mb="1rem" />
            </Form>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default NewPatientPage;
