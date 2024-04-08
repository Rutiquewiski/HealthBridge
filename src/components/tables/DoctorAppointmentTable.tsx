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
import { useEffect, useState } from "react";
import { getAllDoctorAppointments } from "../../services/AppointmentService";
import { AxiosResponse } from "axios";
import Pageable from "../../interfaces/Pageable";
import DoctorAppointmentListingDTO from "../../interfaces/DoctorAppointmentListingDTO";
import moment from "moment";

function DoctorAppointmentTable() {
  const [appointments, setAppointments] = useState<
    DoctorAppointmentListingDTO[]
  >([]);

  useEffect(() => {
    getAllDoctorAppointments().then((response: AxiosResponse<Pageable>) => {
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
                <Td>{appointment.doctor.name}</Td>
                <Td>{appointment.patient.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DoctorAppointmentTable;
