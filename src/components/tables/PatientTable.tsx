import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import Pageable from "../../interfaces/Pageable";
import PatientListingDTO from "../../interfaces/PatientListingDTO";
import { getAllPatients } from "../../services/PatientService";

function PatientTable() {
  const [patients, setPatients] = useState<PatientListingDTO[]>([]);

  useEffect(() => {
    getAllPatients().then((response: AxiosResponse<Pageable>) => {
      setPatients(response.data.content);
    });
  }, []);
  return (
    <>
      <TableContainer borderRadius="8px">
        <Table variant="striped" colorScheme="teal" overflowX="hidden">
          <TableCaption fontSize="x-large" placement="top">
            Registered Patients
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {patients.map((patient: any) => (
              <Tr key={patient.id}>
                <Td>{patient.name}</Td>
                <Td>{patient.phone}</Td>
                <Td>{patient.email}</Td>
                <Td>{patient.document}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PatientTable;
