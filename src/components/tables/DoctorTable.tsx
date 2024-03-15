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
import data_doc from "../../../public/database-mock/database-doctors.json";

function DoctorTable() {
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
              <Th>Specialties</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data_doc.map((doc: any) => (
              <Tr key={doc.id}>
                <Td>{doc.name}</Td>
                <Td>{doc.phone}</Td>
                <Td>{doc.specialties}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DoctorTable;
