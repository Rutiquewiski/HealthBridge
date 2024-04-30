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
import { getAllDentists } from "../../services/ProfessionalService";
import DentistListingDTO from "../../interfaces/DentistListingDTO";

function DentistTable() {
  const [dentists, setDentists] = useState<DentistListingDTO[]>([]);

  useEffect(() => {
    getAllDentists().then((response: AxiosResponse<Pageable>) => {
      setDentists(response.data.content);
    });
  }, []);
  return (
    <>
      <TableContainer borderRadius="8px">
        <Table variant="striped" colorScheme="teal" overflowX="hidden">
          <TableCaption fontSize="x-large" placement="top">
            Registered Dentists
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
            {dentists.map((dentist: any) => (
              <Tr key={dentist.id}>
                <Td>{dentist.name}</Td>
                <Td>{dentist.phone}</Td>
                <Td>{dentist.email}</Td>
                <Td>{dentist.document}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DentistTable;
