import { Outlet } from "react-router-dom";
import WebNavbar from "../Shared/WebNavbar";
import Footer from "../Shared/Footer";


const RootLayout = () => {
  return (
    <div>
      <WebNavbar ></WebNavbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default RootLayout;
