import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PageLayout from "./PageLayout";
import LoginPage from "./pages/login/LoginPage";
import ProfessionalsPage from "./pages/professionals/ProfessionalsPage";
import PatientsPage from "./pages/patients/PatientsPage";
import AppointmentsPage from "./pages/appointments/AppointmentsPage";
import AccountPage from "./pages/account/AccountPage";
import NewPatientPage from "./pages/patients/NewPatientPage";
import NewDentistPage from "./pages/professionals/NewDentistPage";
import NewDoctorPage from "./pages/professionals/NewDoctorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout></PageLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/professionals",
        element: <ProfessionalsPage></ProfessionalsPage>,
      },
      {
        path: "/new-dentist",
        element: <NewDentistPage></NewDentistPage>,
      },
      {
        path: "/new-doctor",
        element: <NewDoctorPage></NewDoctorPage>,
      },
      {
        path: "/patients",
        element: <PatientsPage></PatientsPage>,
      },
      {
        path: "/new-patient",
        element: <NewPatientPage></NewPatientPage>,
      },
      {
        path: "/appointments",
        element: <AppointmentsPage></AppointmentsPage>,
      },
      {
        path: "/account",
        element: <AccountPage></AccountPage>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);

export default router;
