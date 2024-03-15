import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { useAuth } from "./components/auth/AuthProvider";

function PageLayout() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default PageLayout;
