import { Button, Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DentistTable from "../../components/tables/DentistTable";
import DoctorTable from "../../components/tables/DoctorTable";

function ProfessionalsPage() {
  const navigate = useNavigate();

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
        gap="1.5rem"
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
          flexDirection="column"
          justifyContent="space-between"
        >
          <DentistTable></DentistTable>
          <Container>
            <Button
              w="40%"
              m="1rem"
              colorScheme="teal"
              onClick={() => navigate("/new-dentist")}
            >
              Register Dentist
            </Button>
            <Button w="40%" m="1rem" colorScheme="teal">
              Modify Dentist
            </Button>
          </Container>
        </Container>
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
          flexDirection="column"
          justifyContent="space-between"
        >
          <DoctorTable></DoctorTable>
          <Container>
            <Button
              w="40%"
              m="1rem"
              colorScheme="teal"
              onClick={() => navigate("/new-doctor")}
            >
              Register Doctor
            </Button>
            <Button w="40%" m="1rem" colorScheme="teal">
              Modify Doctor
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default ProfessionalsPage;
