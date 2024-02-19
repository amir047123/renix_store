import { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaSearch } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Cart from "../Pages/Cart";
import axios from "axios";
import useGetCartsProduct from "../Hooks/useGetCartsProduct";
const WebNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openCartMenu, setOpenCartMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [product, setProduct] = useState([]);
  const { cartProducts, setCartProducts, total } = useGetCartsProduct();
  const totalCartItemsNum = cartProducts?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

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
      href: "/category",
      subCategory: categorys,
    },
    {
      title: "Tracking Order",
      href: "/tracking-order",
    },
    {
      title: "Product Checking",
      href: "/product-checking",
    },
    {
      title: "Appointment",
      href: "https://renixlaboratories.com.bd/appointment",
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
  // search functionality and handle add to cart

  //Remove Cart
  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartProducts];
    updatedCartItems.splice(index, 1);
    setCartProducts(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Product get
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/product/getProducts`
      );
      const res = await response.json();
      setProduct(res.data);
    };
    getProducts();
  }, []);
  // serach items
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const results = product.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  // Menu sticky
  useEffect(() => {
    let prevScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const threshold = 40;

          if (Math.abs(currentScrollY - prevScrollY) >= threshold) {
            if (currentScrollY >= 180) {
              setIsSticky(true);
              setIsHidden(currentScrollY < prevScrollY);
            } else {
              setIsSticky(false);
              setIsHidden(false);
            }
            prevScrollY = currentScrollY;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //  main return
  return (
    <header
      className={` stickyMenu w-full ${isSticky || isOpen ? "stickys " : ""} ${
        isHidden ? "hiddens" : "notHidden"
      }`}
    >
      <div className="">
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
                    replace={true}
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
                        minHeight: "271px",
                      }}
                      className="absolute group-hover:!rotate-0 transform transition-all origin-top translate-y-0 shadow-[0px_4px_13px_-3px_#808080] bg-no-repeat flex flex-wrap gap-5 top-[95%] left-0 right-0 w-full p-6"
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

          <Cart
            searchQuery={searchQuery}
            handleRemoveFromCart={handleRemoveFromCart}
            handleSearch={handleSearch}
            searchResults={searchResults}
            total={total}
            totalCartItemsNum={totalCartItemsNum}
            cartProducts={cartProducts}
          ></Cart>
        </nav>
        <div className=" hidden md:block lg:hidden bg-white border-t border-solid border-[#eaeaea] py-5 px-6 ">
          <ul className="flex items-center gap-7">
            {menuItems?.map((item) => (
              <li
                key={item}
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
                      minHeight: "100%",
                    }}
                    className="absolute z-[9999] group-hover:!rotate-0 transform transition-all origin-top translate-y-0 shadow-[0px_4px_13px_-3px_#808080] bg-no-repeat  flex gap-5 flex-wrap  top-[95%] left-0 right-0 w-full p-6"
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
          <div className="flex justify-between items-center px-5 gap-10">
            <div>
              <FaBars
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary"
                size={30}
              />
            </div>
            {/* Search bar */}

            <div className=" flex-1">
              <div>
                <input
                  type="text"
                  name="productName"
                  placeholder="search product"
                  className="border-2 outline-0 w-full border-solid border-borderColor h-full py-2 px-5"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                {searchQuery && (
                  <div>
                    <p className="text-sm mb-2">
                      Showing {searchResults.length} results
                    </p>
                    <ul>
                      {searchResults.map((result) => (
                        <li key={result.id}>{result.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setOpenCartMenu(!openCartMenu)}
                className="leading-[80px] flex items-center relative h-20  px-6"
              >
                <span className="absolute top-4 items-center justify-center gap-1 rounded-full bg-emerald-500 px-1.5 text-sm text-white right-6">
                  {cartProducts?.length > 0 ? cartProducts?.length : 0}
                </span>
                <IoIosBasket size={34} />
              </button>
              {/* Cart dropdown */}
              <div
                className={`absolute top-full right-0 bg-white w-[370px] border-t-[3px] border-solid border-primary px-5 py-4 duration-200 transform ${
                  openCartMenu ? "scale-100 visible" : "scale-0 invisible"
                }rotate-0 shadow-custom `}
              >
                {cartProducts.length ? (
                  <div className="">
                    <div className="flex justify-between border-b border-solid px-5 border-borderColor pb-3">
                      <p>{totalCartItemsNum} items</p>
                      <p>
                        <span>৳ </span>
                        <span>{total}</span>
                      </p>
                    </div>
                    {/* Cart items */}
                    <div className="h-[200px] overflow-y-auto">
                      {cartProducts.map((cartItem, index) => (
                        <div
                          key={index}
                          className="flex justify-between px-3 gap-3 border-solid border-b border-borderColor py-2 "
                        >
                          {/* Product image */}
                          <img
                            className="max-w-[60px] max-h-[60px]"
                            src={cartItem.img}
                            alt={`product ${index}`}
                          />
                          {/* Product details */}
                          <div className="flex-1 text-[#333333] text-[13px] mt-1">
                            <p>
                              {cartItem.quantity} ×{" "}
                              <span className="text-secondary">
                                {cartItem.discountedPrice}
                              </span>
                            </p>
                            <p className="text-[13px] hover:text-secondary">
                              {cartItem.name}
                            </p>
                          </div>
                          {/* Remove button */}
                          <div
                            className="max-w-[30px] hover:text-secondary cursor-pointer"
                            onClick={() => handleRemoveFromCart(index)}
                          >
                            x
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-center items-center gap-3 mt-5">
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
          </div>
          {/* sidebar menu items */}
          <div
            className={`${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }  absolute w-3/4 bg-white transition-all duration-500 top-0 !h-screen  pl-10 pt-10`}
          >
            {/* close icon */}
            <div
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5"
            >
              <IoClose />
            </div>
            {/* Menus  mobile*/}
            <ul className="flex flex-col items-start  gap-7">
              {menuItems.map((item) => (
                <li
                  key={item.title}
                  className="font-rubic  font-medium uppercase text-sm w-full pr-10"
                >
                  <NavLink
                    onClick={
                      item?.subCategory &&
                      (() => setOpenDropdown(!openDropdown))
                    }
                    to={item.href}
                    className={({ isActive }) =>
                      `${isActive ? "text-[#ed6663]" : "text-primary"}  
                    tracking-[1px] flex justify-between 
                    `
                    }
                  >
                    {item.title}
                    {item?.subCategory && (
                      <FaAngleDown
                        className={` transition-all duration-300 ${
                          openDropdown ? "rotate-180" : "rotate-0"
                        }`}
                        size={24}
                      />
                    )}
                  </NavLink>
                  {/* Sub menu mega menu mobile*/}

                  {item?.subCategory && (
                    <ul
                      className={`bg-gray-100 shadow-md w-full ${
                        openDropdown ? "py-3 px-2 mt-6" : ""
                      }  `}
                      style={{
                        transition: "max-height 0.5s ease-in-out",
                        maxHeight: openDropdown ? "fit-content" : "0",
                        overflow: "hidden",
                      }}
                    >
                      {item?.subCategory?.map((subca) => (
                        <li className="pb-2" key={subca.name}>
                          <Link
                            className="text-textColor font-medium hover:text-primary hover:ml-3 duration-500 transition-all mb-1 inline-block uppercase text-sm tracking-[0.5px] "
                            to={subca.href}
                          >
                            {subca.name}
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
