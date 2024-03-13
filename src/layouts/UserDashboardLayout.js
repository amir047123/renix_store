import React from "react";
import { Outlet } from "react-router-dom";
import UserDashboardNav from "../Shared/UserDashboardNav";

const UserDashboardLayout = () => {
  return (
    <div>
      <UserDashboardNav Outlet={Outlet} />
    </div>
  );
};

export default UserDashboardLayout;
