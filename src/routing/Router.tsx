import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Layout from "./Layout";
import Home from "../pages/Home";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
