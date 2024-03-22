import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthUser from "../Hooks/authUser";
const AdminDashboardNav = () => {
  const [issideNavOpen, setSidenavOpen] = useState(false);
  const navigate = useNavigate();
  const { userRole, logout } = AuthUser();
  //show  notice
  const [openNotice, setOpenNotice] = useState(false);
  const [openNotice2, setOpenNotice2] = useState(false);
  //show  Complain
  const [openComplain, setOpenComplain] = useState(false);
  //show  frontend
  const [openFrontend, setOpenFrontend] = useState(false);

  //show blog
  const [openBlog, setOpenBlog] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);
  const [openPrescription, setOpenPrescription] = useState(false);
  const [openSeo, setOpenSeo] = useState(false);

  //show sidenav on toggle
  const handleToggle = () => {
    issideNavOpen === true ? setSidenavOpen(false) : setSidenavOpen(true);
  };

  let activeStyle = {
    backgroundColor: "#01AEEF",
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    if (!userRole) {
      // If not logged in, redirect to login page
      toast.error("Unauthorized access!");
      navigate("/login");
      return;
    }

    // Check if the user is not an admin
    if (userRole !== "admin") {
      // If the user is not an admin, show an error message and redirect to another page
      toast.error("You do not have permission to access this page!");
      navigate("/adminDashboard"); // or wherever you want to redirect non-admin users
      return;
    }

    // If the user is an admin, continue rendering the AdminDashboardNav component
  }, [userRole, navigate]);

  return (
    <ul className="space-y-2 pt-8">
      <li>
        <NavLink
          to="dashboard"
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="bxs:dashboard" />
          </span>

          <span className="">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="allUsers"
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="fa6-solid:user-gear" />
          </span>

          <span className="">All Users</span>
        </NavLink>
      </li>

      {/* <li>
        <span
          onClick={() => setOpenInventory(!openInventory)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Inventory Control</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openInventory === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${
            openInventory === true ? "block" : "hidden"
          }`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="product-add-seller"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Product Add Seller</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="seller-product-history"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">Seller Product History</span>
            </NavLink>
          </li>
        </ul>
      </li> */}

      {/* <li>
        <span
          onClick={() => setOpenPrescription(!openPrescription)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Manage Prescription</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openPrescription === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${
            openPrescription === true ? "block" : "hidden"
          }`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="pending-prescription"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Pending Prescription </span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="prescription-history"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">Prescription History</span>
            </NavLink>
          </li>
        </ul>
      </li> */}

      {/* <li>
        <span
          onClick={() => setOpenOffline(!openOffline)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Offline Selling</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openOffline === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openOffline === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="create-offline-order"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Create Offline Order</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="offline-order-history"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">Offline Order History</span>
            </NavLink>
          </li>
        </ul>
      </li> */}

      <li>
        <NavLink
          to={"updateShipping"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-[15px]">
            <Icon icon="fa-solid:chalkboard-teacher" />
          </span>

          <span className="">Update Shipping</span>
        </NavLink>
      </li>

      <li>
        <span
          onClick={() => setOpenCategory(!openCategory)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="material-symbols:category" />
            </span>

            <span className="">Category</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openCategory === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openCategory === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="addCategory"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Add Category</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="allCategory"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">All Category</span>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* notice */}
      <li>
        <span
          onClick={() => setOpenNotice(!openNotice)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon className=" text-xl" icon="carbon:product" />
            </span>

            <span className="">Products</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openNotice === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openNotice === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="addProduct"
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Add Product</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="allProduct"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">All Product</span>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* coupon  */}

      <li>
        <span
          onClick={() => setOpenNotice2(!openNotice2)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon className=" text-xl" icon="mdi:coupon-outline" />
            </span>
            <span className="">Coupon</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openNotice2 === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openNotice2 === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to="addCoupon"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:add" />
              </span>
              <span className="ml-3">Add Coupon</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to="allCoupon"
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="text-[15px]">
                <Icon className=" text-xl" icon="material-symbols:done-all" />
              </span>
              <span className="ml-3">All Coupon</span>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* Category  */}

      {/* Complain */}
      {/* <li>
        <span
          onClick={() => setOpenComplain(!openComplain)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[18px]">
              <Icon icon="eos-icons:cronjob" />
            </span>

            <span className="">Career</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openComplain === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openComplain === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to={"add-job-post"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Icon className=" text-xl" icon="material-symbols:add" />

              <span className="ml-3">Add Job Post</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"all-job-table"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Icon className=" text-xl" icon="material-symbols:done-all" />

              <span className="ml-3">All Job</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allApplication"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">All Applications</span>
            </NavLink>
          </li>
        </ul>
      </li> */}

      {/* order */}

      <li>
        <span
          onClick={() => setOpenOrder(!openOrder)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[18px]">
              <Icon icon="mdi:cart" />
            </span>

            <span className="">Orders</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openBlog === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul className={`drop_down  ${openOrder === true ? "block" : "hidden"}`}>
          <li onClick={handleToggle}>
            <NavLink
              to={"orders"}
              className="flex items-center p-2 text-[14px] hover:bg-primary duration-300  font-normal py-2.5  rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Icon
                className=" text-xl"
                icon="fluent:branch-request-20-filled"
              />

              <span className="ml-3">All Orders</span>
            </NavLink>
          </li>
        </ul>
      </li>
      {/* 
      <li>
        <span
          onClick={() => setOpenBlog(!openBlog)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-[#D6D6D6] hover:bg-[#D6D6D6] hover:text-black duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Blogs</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openBlog === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul className={`drop_down  ${openBlog === true ? "block" : "hidden"}`}>
          <li onClick={handleToggle}>
            <NavLink
              to={"addBlog"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Add Blog</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allBlogs"}
              className="flex items-center p-2 text-[14px]  hover:bg-[#D6D6D6] hover:text-black duration-300 font-normal  py-2.5 rounded-md text-[#D6D6D6]"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">All Blogs</span>
            </NavLink>
          </li>
        </ul>
      </li> */}
      {/* frontend */}
      <li>
        <span
          onClick={() => setOpenFrontend(!openFrontend)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px]">
              <Icon icon="solar:server-square-update-bold" />
            </span>
            <span className="">Update Frontend</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openFrontend === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul
          className={`drop_down  ${openFrontend === true ? "block" : "hidden"}`}
        >
          <li onClick={handleToggle}>
            <NavLink
              to={"updateBanner"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Update Banner</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"updatesidebarBanner"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Update Sidebar Banner</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"partner"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Update Partner</span>
            </NavLink>
          </li>

          <li onClick={handleToggle}>
            <NavLink
              to={"add-home-content"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Update Landing Content</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"all-home-content"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3"> Landing Content</span>
            </NavLink>
          </li>
        </ul>
      </li>

      <li>
        <NavLink
          to={"all-news-latter"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="charm:git-request" />
          </span>

          <span className="">Subscribe Email</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"announcement"}
          className="flex items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span className="text-lg">
            <Icon icon="charm:git-request" />
          </span>

          <span className="">Announcement</span>
        </NavLink>
      </li>

      {/* seo start */}

      <li>
        <span
          onClick={() => setOpenSeo(!openSeo)}
          className="flex items-center justify-between cursor-pointer gap-5 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">
              <Icon icon="charm:git-request" />
            </span>

            <span className="">SEO</span>
          </div>
          <span
            className={`text-xl transition_move ${
              openSeo === true ? "rotate-180" : ""
            }`}
          >
            <Icon icon="mingcute:down-fill" />
          </span>
        </span>
        <ul className={`drop_down  ${openSeo === true ? "block" : "hidden"}`}>
          <li onClick={handleToggle}>
            <NavLink
              to={"seo"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">Add Seo</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink
              to={"allSeo"}
              className="flex items-center p-2 text-[14px]  hover:bg-primary duration-300 font-normal  py-2.5 rounded-md  text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="ml-3">All seo list</span>
            </NavLink>
          </li>
        </ul>
      </li>
      {/* seo end */}

      <li className="flex cursor-pointer items-center gap-2 px-2 py-2.5 text-[14px] font-normal rounded  text-white hover:bg-primary duration-300">
        <span className="text-lg">
          <Icon icon="tabler:logout" />
        </span>

        <span onClick={logout} className="">
          LogOut
        </span>
      </li>
    </ul>
  );
};

export default AdminDashboardNav;
