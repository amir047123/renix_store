import { Outlet } from "react-router-dom";
import WebNavbar from "../shared/WebNavbar";
import Footer from "../shared/Footer";


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
