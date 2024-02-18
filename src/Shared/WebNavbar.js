import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Cart from "../Pages/Cart";
import axios from "axios";
const WebNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "shop",
      href: "/shop",
    },
    {
      title: "CATEGORIES",
      href: "/",
      subCategory: categorys,
    },
    {
      title: "Tracking Order",
      href: "/tracking-order",
    },
    {
      title: "Conatct",
      href: "/category/salad",
    },
    {
      title: "About",
      href: "/category/juice",
    },
  ];

  useEffect(() => {
    async function fetchCategorys() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/category/getCategorys"
        );
        setCategorys(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    fetchCategorys();
  }, []);
  return (
    <header className="fixed w-full  z-[9999]">
      <div className="md:container">
        {/* Top part  */}
        <div className="relative font-rubic font-medium w-full py-4 bg-[#131e2c] text-center text-white uppercase ">
          <p
            className={`absolute transition-opacity text-[11px] md:text-[13px] text-center left-0 top-1/2 -translate-y-1/2 right-0 duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Special Offers! - Get <span className="text-primary">50%</span> off
            on vegetables
          </p>
          <p
            className={`absolute transition-opacity text-[13px] text-center top-1/2 -translate-y-1/2 left-0 right-0 duration-1000 ${
              isVisible ? "opacity-0" : "opacity-100"
            }`}
          >
            sale <span className="text-primary">40%</span> off on bulk shopping!
          </p>
        </div>

        {/* desktop Navbar */}
        <nav className="bg-white hidden relative px-[30px] md:flex items-center justify-between">
          <div className="flex items-center ">
            <div className=" pr-6 border-r h-20 flex items-center border-solid border-[#eaeaea] mr-[18px]">
              <Link to="/">
                {" "}
                <p className=" uppercase font-bold text-primary">Renix Store</p>
              </Link>
            </div>
            <ul className="hidden lg:flex items-center gap-7">
              {menuItems.map((item) => (
                <li
                  key={item.title}
                  className="font-rubic  font-medium uppercase text-sm  group"
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `${isActive ? "text-[#ed6663]" : "text-primary"}  
                    tracking-[1px]
                    `
                    }
                  >
                    {item.title}
                  </NavLink>
                  {/* Sub menu mega menu */}

                  {item?.subCategory && (
                    <ul
                      style={{
                        background: 'url("/assets/header/banner.jpg") white',
                        backgroundPosition: "right ",
                        backgroundRepeat: "no-repeat",
                        transform: "rotateX(90deg)",
                      }}
                      className="absolute group-hover:!rotate-0 transform transition-all origin-top translate-y-0 shadow-[0px_4px_13px_-3px_#808080] bg-no-repeat space-y-6 grid grid-cols-3  top-[95%] left-0 right-0 w-full p-6"
                    >
                      {item?.subCategory?.map((subca) => (
                        <li className="pb-2" key={subca.name}>
                          <Link
                            className="text-textColor font-medium hover:text-primary hover:ml-3 duration-500 transition-all mb-3 inline-block uppercase text-sm tracking-[0.5px] "
                            to={`/shop/${subca.name}`}
                          >
                            {subca.name}
                          </Link>
                          {/* nested category list */}
                          {subca?.nestedCategory && (
                            <ul className="space-y-2">
                              {subca?.nestedCategory?.map((nestedCate) => (
                                <li key={nestedCate.title}>
                                  <Link
                                    className="text-[#7a7a7a] font-normal hover:text-primary hover:ml-3 duration-500 transition-all  text-xs "
                                    to={nestedCate.href}
                                  >
                                    {nestedCate.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* cart */}

          <Cart></Cart>
        </nav>
        <div className=" hidden md:block lg:hidden bg-white border-t border-solid border-[#eaeaea] py-5 px-6 ">
          <ul className="flex items-center gap-7">
            {menuItems.map((item) => (
              <li
                key={item.title}
                className="font-rubic  font-medium uppercase text-sm  group"
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `${isActive ? "text-[#ed6663]" : "text-primary"}  
                    tracking-[1px]
                    `
                  }
                >
                  {item.title}
                </NavLink>
                {/* Sub menu mega menu */}

                {item?.subCategory && (
                  <ul
                    style={{
                      background: 'url("/assets/header/banner.jpg") white',
                      backgroundPosition: "right ",
                      backgroundRepeat: "no-repeat",
                      transform: "rotateX(90deg)",
                    }}
                    className="absolute group-hover:!rotate-0 transform transition-all origin-top translate-y-0 shadow-[0px_4px_13px_-3px_#808080] bg-no-repeat space-y-6 grid grid-cols-3  top-[95%] left-0 right-0 w-full p-6"
                  >
                    {item?.subCategory.map((subca) => (
                      <li className="pb-2" key={subca.title}>
                        <Link
                          className="text-textColor font-medium hover:text-primary hover:ml-3 duration-500 transition-all mb-3 inline-block uppercase text-sm tracking-[0.5px] "
                          to={subca.href}
                        >
                          {subca.title}
                        </Link>
                        {/* nested category list */}
                        {subca?.nestedCategory && (
                          <ul className="space-y-2">
                            {subca?.nestedCategory.map((nestedCate) => (
                              <li key={nestedCate.title}>
                                <Link
                                  className="text-[#7a7a7a] font-normal hover:text-primary hover:ml-3 duration-500 transition-all  text-xs "
                                  to={nestedCate.href}
                                >
                                  {nestedCate.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Navbar */}
        <nav className="bg-white md:hidden">
          <div className="text-center pt-7">
            <img className="mx-auto" src="/assets/header/logo.png" alt="" />
          </div>
          <div className="flex justify-between items-center px-5">
            <div>
              <FaBars
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary"
                size={30}
              />
            </div>
            <div>
              <Link
                to={""}
                className=" leading-[80px] flex items-center relative h-20 border-[#eaeaea] px-6"
              >
                <IoIosBasket className="text-secondary" size={30} />
              </Link>
            </div>
          </div>
          {/* sidebar menu items */}
          <div
            className={`${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }  absolute w-3/4 bg-white transition-all duration-500 top-0 !h-screen  pl-10 pt-10`}
          >
            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5"
            >
              <IoClose />
            </div>
            <ul className="flex flex-col items-start  gap-7">
              {menuItems.map((item) => (
                <li
                  key={item.title}
                  className="font-rubic  font-medium uppercase text-sm  group"
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `${isActive ? "text-[#ed6663]" : "text-primary"}  
                    tracking-[1px]
                    `
                    }
                  >
                    {item.title}
                  </NavLink>
                  {/* Sub menu mega menu */}

                  {item?.subCategory && (
                    <ul
                      style={{
                        background: 'url("/assets/header/banner.jpg") white',
                        backgroundPosition: "right ",
                        backgroundRepeat: "no-repeat",
                        transform: "rotateX(90deg)",
                      }}
                      className="absolute group-hover:!rotate-0 transform transition-all origin-top translate-y-0 shadow-[0px_4px_13px_-3px_#808080] bg-no-repeat space-y-6 grid grid-cols-3  top-[95%] left-0 right-0 w-full p-6"
                    >
                      {item?.subCategory.map((subca) => (
                        <li className="pb-2" key={subca.title}>
                          <Link
                            className="text-textColor font-medium hover:text-primary hover:ml-3 duration-500 transition-all mb-3 inline-block uppercase text-sm tracking-[0.5px] "
                            to={subca.href}
                          >
                            {subca.title}
                          </Link>
                          {/* nested category list */}
                          {subca?.nestedCategory && (
                            <ul className="space-y-2">
                              {subca?.nestedCategory.map((nestedCate) => (
                                <li key={nestedCate.title}>
                                  <Link
                                    className="text-[#7a7a7a] font-normal hover:text-primary hover:ml-3 duration-500 transition-all  text-xs "
                                    to={nestedCate.href}
                                  >
                                    {nestedCate.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default WebNavbar;
