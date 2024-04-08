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
import DentistAppointmentListingDTO from "../../interfaces/DentistAppointmentListingDTO";
import { useEffect, useState } from "react";
import { getAllDentistAppointments } from "../../services/AppointmentService";
import { AxiosResponse } from "axios";
import Pageable from "../../interfaces/Pageable";
import moment from "moment";

function DentistAppointmentTable() {
  const [appointments, setAppointments] = useState<
    DentistAppointmentListingDTO[]
  >([]);

  useEffect(() => {
    getAllDentistAppointments().then((response: AxiosResponse<Pageable>) => {
      setAppointments(response.data.content);
    });
  }, []);
  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" overflowX="hidden">
          <TableCaption fontSize="x-large" placement="top">
            Appointments
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Professional</Th>
              <Th>Patient</Th>
            </Tr>
          </Thead>
          <Tbody>
            {appointments.map((appointment: any) => (
              <Tr key={appointment.id}>
                <Td>{moment(appointment.date).format("DD MMM - HH:mm")}</Td>
                <Td>{appointment.dentist.name}</Td>
                <Td>{appointment.patient.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DentistAppointmentTable;
