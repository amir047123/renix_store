import React, { useState } from "react";
import Rating from "react-rating";
import { IoIosStar, IoMdSearch } from "react-icons/io";
import { FaPlus, FaRegHeart, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCardGrid = ({ product }) => {
  const discountedPrice =
    product?.onePiecePrice - (product?.onePiecePrice * product?.discount) / 100;

  const [cartQuantity, setCartQuantity] = useState(
    parseInt(localStorage.getItem(`cartItem_${product?._id}`)) || 0
  );

  const handleAddToCart = () => {
    const newQuantity = cartQuantity + 1;
    setCartQuantity(newQuantity);
    localStorage.setItem(`cartItem_${product?._id}`, newQuantity);
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...existingCartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  

  return (
    <div className="bg-white group pb-6 relative border-r border-b border-solid border-borderColor">
      <div className="text-center">
        <div className="relative overflow-hidden">
          <img
            className="mx-auto group-hover:scale-125 transition-all duration-200"
            src={product?.img}
            alt=""
          />
        </div>

        <h2 className="font-rubic text-[#292929] font-medium px-6 lg:px-0">
          <Link to={`/productDetails/${product?._id}`}>{product?.name}</Link>
        </h2>
        <Rating
          fullSymbol={<IoIosStar className="text-primary" />}
          emptySymbol={<FaRegStar className="text-primary text-center" />}
          initialRating={5}
          readonly
        />
        <p className="font-medium font-rubic text-sm">
          <span className="line-through">৳ {product?.onePiecePrice}</span>{" "}
          {product?.discount > 0 && (
            <>
              ৳ {discountedPrice} <br />
            </>
          )}
          <span className="text-green-500">{product?.discount}% off</span>
        </p>
      </div>
      <div
        className="absolute opacity-0 group-hover:opacity-100 bg-primary hover:bg-secondary duration-200 p-2 rounded-full text-white border-solid border-[3px] border-white -translate-x-1/2 left-1/2 bottom-32 cursor-pointer"
        onClick={handleAddToCart}
      >
        {cartQuantity > 0 ? cartQuantity : <FaPlus size={30} />}
      </div>
      <div className="absolute flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 p-2 rounded-full border-white -translate-x-1/2 left-1/2 top-1/2">
        <div className="cursor-pointer bg-white hover:bg-black duration-200 p-2 rounded-full text-black hover:text-white">
          <IoMdSearch />
        </div>
        <div className="cursor-pointer bg-white hover:bg-black duration-200 p-2 rounded-full text-black hover:text-white">
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
