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
import { getAllDoctors } from "../../services/ProfessionalService";
import DoctorListingDTO from "../../interfaces/DoctorListingDTO";
import { AxiosResponse } from "axios";
import Pageable from "../../interfaces/Pageable";

function DoctorTable() {
  const [doctors, setDoctors] = useState<DoctorListingDTO[]>([]);

  useEffect(() => {
    getAllDoctors().then((response: AxiosResponse<Pageable>) => {
      setDoctors(response.data.content);
    });
  }, []);
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption fontSize="large" placement="top">
            Registered Doctors
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {doctors.map((doc: any) => (
              <Tr key={doc.id}>
                <Td>{doc.name}</Td>
                <Td>{doc.phone}</Td>
                <Td>{doc.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DoctorTable;
