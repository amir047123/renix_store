import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart, FaRegStar } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ProductListsView = () => {
  return (
    <div className="flex items-center gap-8 pr-20 border-b border-solid border-borderColor pb-4 mb-4">
      <div className="basis-[28%]">
        <img
          className="mx-auto group-hover:scale-125  transition-all duration-200"
          src="/assets/products/p1.jpg"
          alt=""
        />
      </div>
      <div className="flex-1">
        <div>
          <h2 className="font-rubic  text-[#292929] font-medium">
            <Link to={""}>Fresh Organic Mustard Leaves</Link>
          </h2>
          <div className="flex gap-4 items-center mt-1">
            <Rating
              fullSymbol={<IoIosStar className="text-primary" />}
              emptySymbol={<FaRegStar className="text-primary text-center" />}
              initialRating={5}
              readonly
            />
            <p className="border-r border-primary border-solid pr-4 capitalize text-primary font-openSans text-sm hover:text-secondary">
              1 Review
            </p>
            <p className="capitalize text-primary font-openSans text-sm hover:text-secondary">
              add your Review
            </p>
          </div>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            reprehenderit magnam rerum in ullam praesentium ab officiis minima
            tempore, sit maxime, est, nesciunt iste temporibus. Neque, dolorem
            ut! Dolor, hic?
          </p>
          <p className="font-medium font-rubic text-sm">
            <span className="line-through">£9.00</span> £6.00
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button className="flex items-center gap-3 text-white hover:bg-[#131e2c] bg-primary px-5 py-3 font-medium font-rubic uppercase duration-200 text-sm rounded-full">
              <FaShoppingCart />
              Add to cart
            </button>
            <button className="flex items-center gap-3 text-textColor hover:text-white bg-[#efecec] hover:bg-primary px-5 py-3 font-medium font-rubic uppercase duration-200 text-sm rounded-full">
              <FaRegHeart />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListsView;
