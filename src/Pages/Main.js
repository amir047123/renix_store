import React from 'react';
import WebNavbar from '../Shared/WebNavbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div>
          <WebNavbar/>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;