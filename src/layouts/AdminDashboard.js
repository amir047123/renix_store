import React, { useEffect, useRef, useState } from "react";
import "./AdminDashboard.css";
import { NavLink, useNavigate, Outlet, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// import logo from "../../Assets/Nirog Health logo-01.png";
import { toast } from "react-toastify";
import AdminDashboardNav from "./AdminDashboardNav";
import logo from "../../src/Assets/logo renix store.svg"

const AdminDashboard = () => {

  const navWrapper = useRef();
  //hide sidenav by default
  const [issideNavOpen, setSidenavOpen] = useState(false);


  //show sidenav on toggle
  const handleToggle = () => {
    issideNavOpen === true ? setSidenavOpen(false) : setSidenavOpen(true);
  };

  const [loading,setLoading]=useState(false);
const [u,setU]=useState([]);
  const navigate = useNavigate();


  // useEffect(() => {
  //  fetchData();
  //  setLoading(false);
  // }, [user]);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        issideNavOpen &&
        navWrapper.current &&
        !navWrapper.current.contains(event.target)
      ) {
        setSidenavOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    //return wrapper.current;
  }, [issideNavOpen]);

 

  return (
    <section className="bg-white min-h-screen ">
      <div className="w-full">
        <div className="md:flex">
          <div className="w-full lg:w-1/5 lg:block hidden">
            <div
              id="drawer-navigation"
              className="drawer_height w-1/5 fixed left-0 top-0 p-4 overflow-y-auto h-full  bg-[#0a2004] z-10 "
              tabindex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <div className="py-4 ">
                <Link to={"/"} className="flex items-center justify-center">
                  <img className=" w-44" src={logo}></img>
                </Link>

                <AdminDashboardNav />
              </div>
            </div>
          </div>
          {/* dashboard main part */}
          <div className="w-full lg:w-4/5">
            <div>
              <div className="bg-[#e7f7f4]  py-4 px-3">
                <div className="flex items-center ">
                  <span
                    className=" text-white  mx-3 lg:hidden cursor-pointer"
                    title="Open sidenav"
                    onClick={handleToggle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                      />
                    </svg>
                  </span>
                  <button
                    onClick={() => navigate(-1)}
                    className="bg-white hover:bg-white/80 text-secondary w-fit p-1 text-2xl rounded-full"
                  >
                    <Icon icon="icon-park-solid:back" />
                  </button>
                  <div className="flex items-center ml-auto gap-2 w-fit">
                    <span className="text-lg font-semibold text-black  inline-block">
                      <h2>Renix Administration </h2>
                    </span>
                    {/* user dropdown */}

                    <Icon
                      className=" text-2xl text-black"
                      icon="mdi:user-outline"
                    ></Icon>
                    <div
                      className=" flex items-center cursor-pointer relative"
                      //  onClick={handleShow}
                    >
                      {/* <img
                        src={logo}
                        alt=""
                        className="rounded-full w-54 h-full "
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <Outlet />
              </div>
              {/* sidenav for mobile screen */}
              <div ref={navWrapper} className=" ">
                <div
                  id="drawer-navigation"
                  className={`side_nav_admin block lg:hidden z-40 h-screen p-4   w-80 overflow-y-auto bg-secondary  ${
                    issideNavOpen === true ? "activ" : ""
                  }`}
                  tabindex="-1"
                >
                  {/* <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5> */}

                  <button
                    type="button"
                    data-drawer-dismiss="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-5 right-5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={handleToggle}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
                      fill="white"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                  <div className="overflow-y-auto px-7">
                    <NavLink
                      to={"/"}
                      className="flex items-center justify-center pt-10"
                    >
                      logo here
                      {/* <img src={logo} className="h-12 mr-3" alt="Renix Logo" /> */}
                    </NavLink>
                    <AdminDashboardNav />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
