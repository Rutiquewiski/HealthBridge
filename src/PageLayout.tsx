import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

function PageLayout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default PageLayout;
