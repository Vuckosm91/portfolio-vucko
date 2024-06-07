import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyled";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
