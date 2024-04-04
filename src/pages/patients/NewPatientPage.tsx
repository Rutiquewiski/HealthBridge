import { Container } from "@chakra-ui/react";

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
          flexDirection="column"
          justifyContent="space-between"
        >
          FORM HERE
        </Container>
      </Container>
    </>
  );
}

export default NewPatientPage;
