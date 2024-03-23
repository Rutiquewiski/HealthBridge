import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import DentistAppointmentTable from "../../components/tables/DentistAppointmentTable";
import DentistTable from "../../components/tables/DentistTable";
import DoctorTable from "../../components/tables/DoctorTable";
import DoctorAppointmentTable from "../../components/tables/DoctorAppointmentTable";

function HomePage() {
  return (
    <>
      <Container
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        maxW="100vw"
        w="95vw"
        h="90vh"
      >
        <Container
          p="1rem"
          maxW="100% "
          w="55%"
          h="100%"
          bg="white"
          borderStyle="solid"
          borderColor="RGB(109, 187, 191)"
          borderWidth="1px"
          borderRadius="8px"
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab>Dentist Appointments</Tab>
              <Tab>Doctor Appointments</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <DentistAppointmentTable></DentistAppointmentTable>
              </TabPanel>
              <TabPanel>
                <DoctorAppointmentTable></DoctorAppointmentTable>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
        <Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          maxW="100%"
          w="40%"
          h="100%"
          bg="white"
          borderStyle="solid"
          borderRadius="8px"
          borderColor="RGB(109, 187, 191)"
          borderWidth="1px"
        >
          <Container maxW="100%" h="100%" m="1rem">
            <DentistTable></DentistTable>
          </Container>
          <Container maxW="100%" h="100%" m="1rem">
            <DoctorTable></DoctorTable>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default HomePage;
