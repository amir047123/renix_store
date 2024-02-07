import { useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
const WebNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      title: "fruits",
      href: "/category/fruits",
      subCategory: [
        {
          title: "sub fruit",
          href: "/category/sub",
          nestedCategory: [
            { title: "nested fruit 77", href: "/category/fruits" },
            { title: "nested fruit 89", href: "/category/fruits" },
          ],
        },
        {
          title: "sub fruit 2",
          href: "/category/fruits",
          nestedCategory: [
            { title: "nested fruit 55", href: "/category/fruits" },
            { title: "nested fruit 56", href: "/category/fruits" },
          ],
        },
        {
          title: "sub fruit 7",
          href: "/category/fruits",
          nestedCategory: [
            { title: "nested fruit 78", href: "/category/fruits" },
            { title: "nested fruit 65", href: "/category/fruits" },
          ],
        },
        {
          title: "sub fruit 3",
          href: "/category/fruits",
          nestedCategory: [
            { title: "nested fruit14", href: "/category/fruits" },
            { title: "nested fruit 45", href: "/category/fruits" },
          ],
        },
        {
          title: "sub fruit 4",
          href: "/category/fruits",
          nestedCategory: [
            { title: "nested fruit ", href: "/category/fruits" },
            { title: "nested fruit 22", href: "/category/fruits" },
          ],
        },
        {
          title: "sub fruit 5",
          href: "/category/fruits",
          nestedCategory: [
            { title: "nested fruit 1", href: "/category/" },
            { title: "nested fruit 2", href: "/category/fruits" },
          ],
        },
      ],
    },

    {
      title: "salad",
      href: "/category/salad",
      // subCategory: [
      //   { title: "salad", href: "/category/salad" },
      //   { title: "salad", href: "/category/salad" },
      //   { title: "salad", href: "/category/salad" },
      //   { title: "salad", href: "/category/salad" },
      //   { title: "salad", href: "/category/salad" },
      //   { title: "salad", href: "/category/salad" },
      // ],
    },
    {
      title: "Juice",
      href: "/category/juice",
    },
    // {
    //   title: "Contact us",
    //   href: "/contact-us",
    // },
  ];
  return (
    <header className="fixed w-full">
      <div className="container">
        {/* Top part  */}
        <div className="relative font-rubic font-medium w-full py-4 bg-[#131e2c] text-center text-white uppercase ">
          <p
            className={`absolute transition-opacity text-[13px] text-center left-0 top-1/2 -translate-y-1/2 right-0 duration-1000 ${
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

        {/* Navbar */}
        <nav className="bg-white relative px-[30px] flex items-center justify-between">
          <div className="flex items-center ">
            <div className=" pr-6 border-r h-20 flex items-center border-solid border-[#eaeaea] mr-[18px]">
              <img src="/assets/header/logo.png" alt="" />
            </div>
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
          <div className="flex">
            <div className="pr-6 leading-[80px] h-20 flex items-center">
              <FaSearch size={24} />
            </div>
            <Link
              to={""}
              className="border-x border-solid leading-[80px] flex items-center h-20 border-[#eaeaea] px-6"
            >
              <IoIosBasket size={24} />
            </Link>
            <div className="pl-6 group leading-[80px] h-20 flex items-center relative">
              <FaBars size={24} className="cursor-pointer" />

              {/* my carts menu */}
              <div className="absolute top-full -right-[30px] bg-white w-[270px] border-t-[3px] border-solid border-primary px-5  py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 transform scale-0 group-hover:scale-100 rotate-0 shadow-custom">
                <ul className="flex flex-col gap-[6px] uppercase text-xs font-rubic font-medium">
                  <li className="border-b border-solid border-[#eaeaea] py-[14px]">
                    <Link>MY ACCOUNT</Link>
                  </li>
                  <li className="border-b border-solid border-[#eaeaea] py-[14px]">
                    <Link>WISHLIST</Link>
                  </li>
                  <li className="py-[14px]">
                    <Link>CHECKOUT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default WebNavbar;
