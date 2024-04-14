import { Container, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

function NewPatientPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

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
              <Input
                mb="1rem"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                mb="1rem"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                mb="1rem"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <FormLabel>Document</FormLabel>
              <Input
                mb="1rem"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                required
              />
              <FormLabel>Medical History</FormLabel>
              <Textarea
                height="350px"
                maxHeight="350px"
                mb="1rem"
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              />
            </Form>
          </Container>
          <Container p="1rem" minW="45%">
            <Form>
              <FormLabel>Street</FormLabel>
              <Input
                mb="1rem"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
              <FormLabel>Number</FormLabel>
              <Input
                mb="1rem"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <FormLabel>Complement</FormLabel>
              <Input
                mb="1rem"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
              <FormLabel>Neighborhood</FormLabel>
              <Input
                mb="1rem"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                required
              />
              <FormLabel>Postal Code</FormLabel>
              <Input
                mb="1rem"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <FormLabel>City</FormLabel>
              <Input
                mb="1rem"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <FormLabel>State</FormLabel>
              <Input
                mb="1rem"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default NewPatientPage;
