import {
  Button,
  Container,
  FormLabel,
  Input,
  Textarea,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { registerPatient } from "../../services/PatientService";
import DentalSpecialtyListingDTO from "../../interfaces/DentalSpecialtyListingDTO";
import { getDentalSpecialties } from "../../services/ProfessionalService";
import { AxiosResponse } from "axios";
import Pageable from "../../interfaces/Pageable";

function NewDentistPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  const [specialties, setSpecialties] = useState<DentalSpecialtyListingDTO[]>(
    []
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");

  const [street_address, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  function validateForm() {
    if (
      !name ||
      !email ||
      !phone ||
      !document ||
      !street_address ||
      !number ||
      !postal_code ||
      !city ||
      !state
    ) {
      toast({
        title: "Please fill in all required fields",
        status: "error",
        isClosable: true,
      });
      return false; // Prevent form submission if any field is empty
    }
    return true; // Form is valid, proceed with submission
  }

  async function handleSubmit() {
    if (!validateForm()) return; // Ends function is validation fails, preventing the request

    try {
      await registerPatient({
        name,
        email,
        phone,
        document,
        medicalHistory,
        address: {
          street_address,
          neighborhood,
          number,
          complement,
          postal_code,
          city,
          state,
        },
      });

      onOpen();
      clearFields();
    } catch (error: any) {
      toast({
        title: "An error occurred",
        description: error.response.data,
        status: "error",
        isClosable: true,
      });
    }
  }

  function handleCancel() {
    navigate("/professionals");
  }

  function clearFields() {
    setName("");
    setEmail("");
    setPhone("");
    setDocument("");
    setMedicalHistory("");
    setStreet("");
    setNumber("");
    setComplement("");
    setNeighborhood("");
    setPostalCode("");
    setCity("");
    setState("");
  }

  useEffect(() => {
    getDentalSpecialties().then((response: AxiosResponse<Pageable>) => {
      setSpecialties(response.data.content);
      console.log(specialties);
    });
  }, []);

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
              <FormLabel>Name *</FormLabel>
              <Input
                mb="1rem"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <FormLabel>E-mail *</FormLabel>
              <Input
                type="email"
                mb="1rem"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel>Phone *</FormLabel>
              <Input
                type="tel"
                mb="1rem"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <FormLabel>Document *</FormLabel>
              <Input
                mb="1rem"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                required
              />
              <FormLabel>Dental Specialties</FormLabel>
              <Select
                mb="1rem"
                value={medicalHistory}
                onChange={(e) => setMedicalHistory(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty.name} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </Select>
            </Form>
          </Container>
          <Container p="1rem" minW="45%">
            <Form>
              <FormLabel>Street *</FormLabel>
              <Input
                mb="1rem"
                value={street_address}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
              <FormLabel>Number *</FormLabel>
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
              />
              <FormLabel>Postal Code *</FormLabel>
              <Input
                mb="1rem"
                value={postal_code}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <FormLabel>City *</FormLabel>
              <Input
                mb="1rem"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <FormLabel>State *</FormLabel>
              <Input
                mb="1rem"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form>
            <Container
              display="flex"
              justifyContent="center"
              gap="2rem"
              mt="1rem"
            >
              <Button colorScheme="red" onClick={handleCancel}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={handleSubmit}>
                Register
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Patient registered successfully!</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NewDentistPage;
