import React, { useState, useEffect } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = storedCartItems.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));
    setCartItems(updatedCartItems);
  }, []);

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleAddToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  return (
    <div className="flex">
      {/* Search bar */}
      <div className="pr-6 leading-[80px] group flex items-center relative">
        <FaSearch size={24} />
        {/* Search dropdown */}
        <div className="absolute top-full right-0 bg-white w-[270px] border-t-[3px] border-solid border-primary px-5 py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 transform scale-0 group-hover:scale-100 rotate-0 shadow-custom">
          <div>
            <input
              type="text"
              placeholder="search product"
              className="border-2 border-solid border-borderColor h-full py-2 px-5"
            />
          </div>
        </div>
      </div>
      {/* Cart icon */}
      <div className="relative group">
        <Link to={"/cart"} className="border-x border-solid leading-[80px] flex items-center relative h-20 border-[#eaeaea] px-6">
          <span className="absolute -top-2 items-center justify-center gap-1 rounded-full bg-emerald-500 px-1.5 text-sm text-white">
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
          <IoIosBasket size={24} />
        </Link>
        {/* Cart dropdown */}
        <div className="absolute top-full right-0 bg-white w-[370px] border-t-[3px] border-solid border-primary px-5 py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 transform scale-0 group-hover:scale-100 rotate-0 shadow-custom">
          {cartItems.length ? (
            <div>
              {/* Cart items */}
              {cartItems.map((cartItem, index) => (
                <div key={index} className="flex justify-between px-3 gap-3 border-solid border-b border-borderColor py-2">
                  {/* Product image */}
                  <img className="max-w-[60px] max-h-[60px]" src={cartItem.img} alt={`product ${index}`} />
                  {/* Product details */}
                  <div className="flex-1 text-[#333333] text-[13px] mt-1">
                    <p>{cartItem.quantity} × <span className="text-secondary">{cartItem.onePiecePrice}</span></p>
                    <p className="text-[13px] hover:text-secondary">{cartItem.name}</p>
                  </div>
                  {/* Remove button */}
                  <div className="max-w-[30px] hover:text-secondary cursor-pointer" onClick={() => handleRemoveFromCart(index)}>x</div>
                </div>
              ))}
              {/* Buttons */}
              <div className="flex justify-center items-center gap-3 mt-5">
                <Link to={"/cart"} className="bg-primary text-white px-4 py-3 rounded-full transition-all duration-300 hover:bg-black font-rubic font-medium uppercase text-sm">View cart</Link>
                <Link to={"/checkout"} className="bg-primary text-white px-4 py-3 rounded-full transition-all duration-300 hover:bg-black font-rubic font-medium uppercase text-sm">Checkout</Link>
              </div>
            </div>
          ) : (
            <p className="text-center text-sm">No products in the cart.</p>
          )}
        </div>
      </div>
      {/* Account menu */}
      <div className="pl-6 group leading-[80px] h-20 flex items-center relative">
        <FaBars size={24} className="cursor-pointer" />
        {/* Account menu dropdown */}
        <div className="absolute top-full -right-[30px] bg-white w-[270px] border-t-[3px] border-solid border-primary px-5 py-4 opacity-0 invisible group-hover:visible group-hover:opacity-100 duration-200 transform scale-0 group-hover:scale-100 rotate-0 shadow-custom">
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
  );
};

export default Cart;
