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

import data_dent from "../../../public/database-mock/database-dentists.json";

function DentistTable() {
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
              <Th>Specialties</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data_dent.map((dentist: any) => (
              <Tr key={dentist.id}>
                <Td>{dentist.name}</Td>
                <Td>{dentist.phone}</Td>
                <Td>{dentist.specialties}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DentistTable;
