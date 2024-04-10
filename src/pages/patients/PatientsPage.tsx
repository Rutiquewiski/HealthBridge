import { Button, Container } from "@chakra-ui/react";
import PatientTable from "../../components/tables/PatientTable";
import { useNavigate } from "react-router-dom";

function PatientsPage() {
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
          <PatientTable></PatientTable>
          <Container>
            <Button
              w="40%"
              m="1rem"
              colorScheme="teal"
              onClick={() => navigate("/new-patient")}
            >
              Register Patient
            </Button>
            <Button w="40%" m="1rem" colorScheme="teal">
              Modify Patient
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default PatientsPage;
