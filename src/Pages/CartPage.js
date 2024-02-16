// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import PageHeader from "../components/ui/PageHeader";
import useGetCartsProduct from "../Hooks/useGetCartsProduct";

const CartPage = () => {
  const { cartProducts, setCartProducts, total } = useGetCartsProduct();
  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartProducts.filter((item) => item._id !== itemId);
    setCartProducts(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <PageHeader title="Cart" />
      <div className="mx-auto max-lg:overflow-x-auto w-full">
        <div className="pt-12 container">
          <div className="bg-white p-5 shadow-custom max-lg:min-w-[900px]">
            {cartProducts.length === 0 ? (
              <>
                <div>
                  <p className="font-rubic text-sm text-[#333] mb-6">
                    Your cart is currently empty.
                  </p>
                  <Link
                    to={"/"}
                    className="hover:bg-secondary bg-primary transition-all duration-300 text-white px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm"
                  >
                    Return to shop
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Table header */}
                <div className="grid grid-cols-12 border-b border-borderColor pb-3 place-items-center font-rubic font-medium text-sm uppercase text-[#222]">
                  <div className="invisible col-span-1">image</div>
                  <div className="col-span-4">
                    <p>PRODUCT</p>
                  </div>
                  <div className="col-span-2">
                    <p>PRICE</p>
                  </div>
                  <div className="col-span-2">
                    <p>QUANTITY</p>
                  </div>
                  <div className="col-span-2">
                    <p>SUBTOTAL</p>
                  </div>
                  <div className="invisible col-span-1">
                    <p>Action</p>
                  </div>
                </div>
                {/* Table body */}
                <div>
                  {cartProducts.map((item) => (
                    <div
                      key={item._id}
                      className="grid grid-cols-12 place-items-center border-b text-[#333] border-borderColor pb-3"
                    >
                      <div className=" col-span-1">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="col-span-4 font-rubic">
                        <Link
                          className="hover:text-secondary transition-all duration-300 text-[#333]"
                          to={""}
                        >
                          {item.name}
                        </Link>
                      </div>
                      <div className="col-span-2 font-openSans">
                        <p> ৳ {item.discountedPrice}</p>
                      </div>
                      <div className="col-span-2 font-openSans">
                        <p className="border border-borderColor rounded-full w-4 h-4 p-5 leading-4 flex justify-center items-center">
                          {item.quantity}
                        </p>
                      </div>
                      <div className="col-span-2 font-openSans">
                        <p>৳ {item.discountedPrice * item.quantity}</p>
                      </div>
                      <div className=" col-span-1 font-openSans">
                        <div className="border border-borderColor rounded-full w-12 h-12  leading-4 flex justify-center items-center">
                          <div onClick={() => handleRemoveFromCart(item._id)}>
                            <RiDeleteBinLine size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Table footer */}
                <div>
                  <div className="flex justify-between items-center py-5 border-b border-borderColor">
                    <div>
                      <input
                        type="text"
                        className="text-sm rounded-full border border-solid border-borderColor py-3 px-4"
                        placeholder="Coupon code"
                      />
                      <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-2">
                        Apply coupon{" "}
                      </button>
                    </div>
                    <div>
                      <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm">
                        Update Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Total sub total */}
                <div className="py-3 mt-5">
                  <h3 className="text-xl text-[#333] capitalize mb-2 font-medium font-openSans">
                    Cart totals
                  </h3>
                  <div className="grid grid-cols-2 border border-solid  border-borderColor space-y-2">
                    <p className="border-r p-3 border-b border-solid border-borderColor">
                      Subtotal
                    </p>
                    <p className=" border-b p-3 border-solid border-borderColor">
                      ৳ {total}
                    </p>
                    <p className="border-r p-3 border-solid border-borderColor">
                      total
                    </p>
                    <p className="p-3">৳ {total}</p>
                  </div>
                  <div className="text-right mt-5">
                    <Link
                      to={"/checkout"}
                      className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-2"
                    >
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
