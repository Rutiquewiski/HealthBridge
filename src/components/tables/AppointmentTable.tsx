import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import data_appt from "../../../public/database-mock/database-appointments.json";

function AppointmentTable() {
  return (
    <>
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
              <Tr key={appointment.id}>
                <Td>{appointment.date}</Td>
                <Td>{appointment.dentist}</Td>
                <Td>{appointment.patient}</Td>
                <Td>{appointment.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AppointmentTable;
