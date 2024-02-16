import { useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
const WebNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cart = true;
  let carts = [1, 2];
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
             <Link to="/"> <p className=" uppercase font-bold text-primary">Renix Store</p></Link>
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
            {/* search icons */}
            <div className="pr-6 leading-[80px] group flex items-center relative">
              <FaSearch size={24} />
              <div className="absolute top-full right-0 bg-white w-[270px] border-t-[3px] border-solid border-primary px-5  py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 transform scale-0 group-hover:scale-100 rotate-0 shadow-custom">
                <div>
                  <input
                    type="text"
                    placeholder="search product"
                    className="border-2 border-solid border-borderColor h-full py-2 px-5 "
                  />
                </div>
              </div>
            </div>
            {/* Cart icons */}
            <div className="relative group">
              <Link
                to={"/cart"}
                className="border-x border-solid leading-[80px] flex items-center relative h-20 border-[#eaeaea] px-6"
              >
                <span className="absolute -top-2 items-center justify-center gap-1 rounded-full bg-emerald-500 px-1.5 text-sm text-white">
                  7
                </span>

                <IoIosBasket size={24} />
              </Link>
              <div className="absolute top-full right-0 bg-white w-[370px] border-t-[3px] border-solid border-primary px-5  py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 transform scale-0 group-hover:scale-100 rotate-0 shadow-custom">
                {cart ? (
                  <div className="">
                    <div className="flex justify-between border-b border-solid px-5 border-borderColor pb-3">
                      <p>1 items</p>
                      <p>
                        <span>£</span>
                        <span>56.00</span>
                      </p>
                    </div>
                    {carts.map((cartItems) => (
                      <div
                        key={cartItems}
                        className="flex justify-between px-3 gap-3  border-solid  border-b border-borderColor py-2 "
                      >
                        <img
                          className="max-w-[60px] max-h-[60px]"
                          src="/assets/products/p1.jpg"
                          alt="product"
                        />
                        <div className="flex-1 text-[#333333] text-[13px] mt-1">
                          <p>
                            1 × <span className="text-secondary">6.00</span>
                          </p>

                          <p className="text-[13px] hover:text-secondary">
                            Fresh Organic Mustard Leaves
                          </p>
                        </div>
                        <div className="max-w-[30px] hover:text-secondary cursor-pointer">
                          x
                        </div>
                      </div>
                    ))}
                    {/* Buttons */}
                    <div className="flex justify-center items-center gap-3 mt-5 ">
                      <Link
                        to={"/cart"}
                        className="bg-primary text-white px-4 py-3 rounded-full transition-all duration-300 hover:bg-black font-rubic font-medium uppercase text-sm"
                      >
                        View cart
                      </Link>
                      <Link
                        to={"/checkout"}
                        className="bg-primary text-white px-4 py-3 rounded-full transition-all duration-300 hover:bg-black font-rubic font-medium uppercase text-sm"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-sm">
                    No products in the cart.
                  </p>
                )}
              </div>
            </div>
            {/* account menus */}
            <div className="pl-6 group leading-[80px] h-20 flex items-center relative">
              <FaBars size={24} className="cursor-pointer" />

              {/* my carts menu */}
              <div className="absolute top-full -right-[30px] bg-white w-[270px] border-t-[3px] border-solid border-primary px-5  py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 transform scale-0 group-hover:scale-100 rotate-0 shadow-custom">
                <ul className="flex flex-col gap-[6px] uppercase text-xs font-rubic font-medium">
                  <li className="border-b border-solid border-[#eaeaea] py-[14px] uppercase">
                    <Link to={"/my-account"}>MY ACCOUNT</Link>
                  </li>
                  <li className="border-b border-solid border-[#eaeaea] uppercase py-[14px]">
                    <Link to={"/wishlist"}>WISHLIST</Link>
                  </li>
                  <li className="py-[14px] uppercase">
                    <Link to={"/checkout"}>CHECKOUT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
