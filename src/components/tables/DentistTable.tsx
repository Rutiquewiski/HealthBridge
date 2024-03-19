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

import DentistListingDTO from "../../interfaces/DentistListingDTO.ts";
import { useEffect, useState } from "react";
import { getAllDentists } from "../../services/DentistService";

function DentistTable() {
  const [dentists, setDentists] = useState<DentistListingDTO[]>([]);

  useEffect(() => {
    getAllDentists().then((response: any) => {
      setDentists(response.data.content);
    });
  }, []);

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption fontSize="large" placement="top">
            Registered Dentists
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dentists.map((dentist: DentistListingDTO) => (
              <Tr key={dentist.id}>
                <Td>{dentist.name}</Td>
                <Td>{dentist.phone}</Td>
                <Td>{dentist.email}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DentistTable;
