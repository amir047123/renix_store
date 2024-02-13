import React, { useState } from "react";
import ProductSlide from "./ProductSlide";
import Rating from "react-rating";
import { IoIosStar } from "react-icons/io";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaMinus,
  FaPinterestP,
  FaPlus,
  FaRegStar,
  FaSignal,
  FaTwitter,
} from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import Description from "./Description";
const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div className=" mt-12 container ">
      {/* product details */}
      <div className="flex bg-white p-5 shadow-custom gap-8">
        <div className="max-w-[600px] ">
          <ProductSlide></ProductSlide>
        </div>
        <div className="flex-1">
          <h2 className="font-rubic font-medium uppercase text-[34px] text-[#333] my-2">
            FRESH RED SEEDLESS
          </h2>
          <div className="flex items-center gap-5 border-b border-solid border-borderColor pb-3">
            <Rating
              fullSymbol={<IoIosStar className="text-primary" />}
              emptySymbol={<FaRegStar className="text-primary text-center" />}
              initialRating={5}
              readonly
            />
            <span className="font-openSans text-[13px] text-primary">
              (1 customer review)
            </span>
          </div>
          <h2 className="font-openSans text-[32px] text-[#333e48] font-medium py-5">
            £50.00 – £60.00
          </h2>
          <p className="border border-solid border-borderColor inline-block px-3 py-1 capitalize font-openSans text-[#333] mb-3">
            color
          </p>
          <div>
            <select
              name=""
              id=""
              className="w-[200px] border border-solid border-borderColor px-5 py-2 rounded-full"
            >
              <option value="red">red</option>
              <option value="yellow">yellow</option>
            </select>
            <span className="pl-5 text-secondary capitalize inline-block">
              clear
            </span>
          </div>
          <h2 className="font-openSans text-[32px] text-[#333e48] font-medium py-5">
            £60.00
          </h2>
          <div className="flex gap-5">
            <div className="flex w-[150px]  items-center border border-solid border-borderColor rounded-full ">
              <div className=" w-[60px] h-[50px] flex justify-center items-center  hover:text-white rounded-full transition-all duration-150 hover:bg-primary cursor-pointer">
                <FaPlus className="" />
              </div>
              <input
                type="text"
                name=""
                id=""
                defaultValue={1}
                className="w-12 text-center border-0 outline-0 font-openSans font-bold text-[#333]"
              />
              <div className=" w-[60px] h-[50px] flex justify-center items-center rounded-full transition-all duration-150  hover:bg-primary hover:text-white cursor-pointer">
                <FaMinus />
              </div>
            </div>
            <button className="uppercase bg-secondary hover:bg-primary px-6 py-3 rounded-full text-white font-rubic font-medium text-lg transition-all duration-300">
              add to cart
            </button>
          </div>
          <p className="py-7  border-b border-borderColor text-[#333] font-openSans mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            Donec a neque libero.
          </p>
          <div>
            <div className="flex items-center gap-5">
              <button className="capitalize bg-gray-200 hover:bg-primary px-4 py-2 rounded-lg hover:text-white text-[#333] font-openSans  text-sm transition-all duration-300 flex items-center gap-2 ">
                <CiHeart /> add to whishlist
              </button>
              <button className="capitalize bg-gray-200 hover:bg-primary px-4 py-2 rounded-lg hover:text-white text-[#333] font-openSans  text-sm transition-all duration-300 flex items-center gap-2 ">
                <FaSignal /> compare
              </button>
            </div>
            {/* social icon */}
            <div className="flex items-center gap-3 my-6">
              <div className="border hover:bg-[#3C5B9B] hover:text-white transition-all   border-solid border-borderColor rounded-md p-3 cursor-pointer duration-300 inline-block">
                <FaFacebookF />
              </div>
              <div
                className="border hover:text-white hover:bg-[#359BED] 
                border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all duration-300 inline-block"
              >
                <FaTwitter />
              </div>
              <div className="border hover:text-white hover:bg-[#E33729] duration-300 border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all inline-block">
                <FaGooglePlusG />
              </div>
              <div className="border hover:text-white hover:bg-[#cb2027] d border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all duration-300 inline-block">
                <FaPinterestP />
              </div>
              <div className="border hover:text-white hover:bg-[#027ba5]  border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all duration-300 inline-block">
                <FaLinkedinIn />
              </div>
            </div>
            {/*  */}
            <div className="">
              <ul className="font-rubic text-sm text-[#333] list-disc space-y-2 ml-4 mb-3">
                <li>Free Wordwide Shipping</li>
                <li>30 Days Return</li>
                <li>Member Discount</li>
              </ul>
              <div className="flex gap-2">
                <p className="text-sm text-[#333]">
                  <span className="text-primary font-semibold mr-1">SKU:</span>
                  K37SA62
                </p>
                <p className="text-sm text-[#333]">
                  <span className="text-primary font-semibold mr-1">
                    Category:
                  </span>
                  Fruits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Additional infomation */}

      <div className="my-10">
        <div className="flex border-b border-borderColor gap-2">
          <div
            className={`px-5 py-3 rounded-tr-lg rounded-tl-lg  font-rubic font-medium text-sm uppercase ${
              activeTab === 1
                ? "bg-primary text-white "
                : "bg-[#efecec] text-[#292929] hover:bg-white"
            }`}
            onClick={() => handleTabClick(1)}
          >
            <span className="mt-1 inline-block"> Description</span>
          </div>
          <div
            className={`px-5 py-3 rounded-tr-lg rounded-tl-lg  font-rubic font-medium text-sm uppercase ${
              activeTab === 2
                ? "bg-primary text-white "
                : "bg-[#efecec] text-[#292929] hover:bg-white"
            }`}
            onClick={() => handleTabClick(2)}
          >
            <span className="mt-1 inline-block"> Additional information</span>
          </div>
          <div
            className={`px-5 py-3 rounded-tr-lg rounded-tl-lg  font-rubic font-medium text-sm uppercase ${
              activeTab === 3
                ? "bg-primary text-white "
                : "bg-[#efecec] text-[#292929] hover:bg-white"
            }`}
            onClick={() => handleTabClick(3)}
          >
            <span className="mt-1 inline-block"> Reviews (1)</span>
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 1 && <Description />}
          {activeTab === 2 && <AdditionalInfo />}
          {activeTab === 3 && <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
