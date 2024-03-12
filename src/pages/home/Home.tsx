import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tfoot,
} from "@chakra-ui/react";
import data_appt from "../../../public/database-mock/database-appointments.json";
import data_dent from "../../../public/database-mock/database-dentists.json";
import data_doc from "../../../public/database-mock/database-doctors.json";

function Home() {
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
          maxW="100% "
          w="55%"
          h="100%"
          bg="white"
          borderStyle="solid"
          borderRadius="8px"
        >
          <TableContainer>
            <Table variant="striped" colorScheme="teal" overflowX="hidden">
              <TableCaption fontSize="large" placement="top">
                Appointments
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Professional</Th>
                  <Th>Patient</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data_appt.map((appointment: any) => (
                  <Tr>
                    <Td>{appointment.date}</Td>
                    <Td>{appointment.dentist}</Td>
                    <Td>{appointment.patient}</Td>
                    <Td>{appointment.status}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxW="100%"
          w="40%"
          h="100%"
          bg="white"
          borderStyle="solid"
          borderRadius="8px"
        >
          <Container maxW="100%" h="100%" m="1rem">
            <TableContainer>
              <Table variant="simple">
                <TableCaption fontSize="large" placement="top">
                  Registered Dentists
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Phone</Th>
                    <Th>Specialties</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data_dent.map((dentist: any) => (
                    <Tr>
                      <Td>{dentist.name}</Td>
                      <Td>{dentist.phone}</Td>
                      <Td>{dentist.specialties}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Container>
          <Container maxW="100%" h="100%" m="1rem">
            <TableContainer>
              <Table variant="simple">
                <TableCaption fontSize="large" placement="top">
                  Registered Doctors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Phone</Th>
                    <Th>Specialties</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data_dent.map((doc: any) => (
                    <Tr>
                      <Td>{doc.name}</Td>
                      <Td>{doc.phone}</Td>
                      <Td>{doc.specialties}</Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Home;
