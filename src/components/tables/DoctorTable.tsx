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
import DoctorListingDTO from "../../interfaces/DoctorListingDTO";
import { getAllDoctors } from "../../services/ProfessionalService";

function DoctorTable() {
  const [doctors, setDoctors] = useState<DoctorListingDTO[]>([]);

  useEffect(() => {
    getAllDoctors().then((response: AxiosResponse<Pageable>) => {
      setDoctors(response.data.content);
    });
  }, []);
  return (
    <>
      <TableContainer borderRadius="8px">
        <Table variant="striped" colorScheme="teal" overflowX="hidden">
          <TableCaption fontSize="x-large" placement="top">
            Registered Doctors
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th>Document</Th>
            </Tr>
          </Thead>
          <Tbody>
            {doctors.map((doctor: any) => (
              <Tr key={doctor.id}>
                <Td>{doctor.name}</Td>
                <Td>{doctor.phone}</Td>
                <Td>{doctor.email}</Td>
                <Td>{doctor.document}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DoctorTable;
