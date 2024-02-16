import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";

const Reviews = () => {
  return (
    <div className="bg-white p-6 shadow-custom">
      <div>
        <p className="font-rubic text-xl text-[#333] font-medium py-6">
          1 review for Fresh Red Seedless
        </p>
        <div className="flex gap-4 border-b border-solid border-borderColor pb-6 mb-6">
          <div className="w-[80px] ">
            <img
              className="rounded-full w-full object-cover"
              src="/assets/products/user.png"
              alt="userimage"
              srcset=""
            />
          </div>
          <div className="flex-1">
            <Rating
              fullSymbol={<IoIosStar className="text-primary" />}
              emptySymbol={<FaRegStar className="text-primary text-center" />}
              initialRating={5}
              readonly
            />
            <p className="text-[#333] py-2">
              <span className="font-bold">admin</span> – 27 December 2018
            </p>
            <p className="text-[#333]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
              placeat dolorum? Perferendis, aspernatur asperiores aut
              reprehenderit magni facere ea alias perspiciatis corrupti sint.
              Molestiae sed odio dolore nisi dolores atque.
            </p>
          </div>
        </div>
        <p className="text-black text-lg font-bold border-b border-solid border-borderColor pb-6 mb-6 ">
          Add a review
        </p>
        <p className="text-[#333] mb-6 text-sm md:text-base  ">
          <span>Your email address will not be published.</span>{" "}
          <span className="md:inline block md:mt-0 mt-3">
            Required fields are marked <span className="text-secondary">*</span>
          </span>{" "}
        </p>
        <p className="text-[#333] text-sm mb-6 ">
          Your rating
          <span className="text-secondary">*</span>
        </p>
        <div>
          <Rating
            onChange={(rate) => alert(rate)}
            fullSymbol={<IoIosStar className="text-black" />}
            emptySymbol={<FaRegStar className="text-black text-center" />}
            fractions={2}
          />
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <p className="text-[#333] ">
              Your review
              <span className="text-secondary">*</span>
            </p>
            <textarea
              className="border border-solid border-borderColor rounded-md w-full outline-0 h-[90px] px-6 py-3"
              name=""
              id=""
              cols="45"
              rows="8"
            ></textarea>
          </div>
          <div>
            <p className="text-[#333] ">
              Name
              <span className="text-secondary">*</span>
            </p>
            <input className="border border-solid border-borderColor rounded-md w-full outline-0  px-6 py-3" />
          </div>
          <div>
            <p className="text-[#333] ">
              Email
              <span className="text-secondary">*</span>
            </p>
            <input className="border border-solid border-borderColor rounded-md w-full outline-0  px-6 py-3" />
          </div>
        </div>
        <button className="px-9 py-3 uppercase bg-primary hover:bg-secondary transition-all duration-200 rounded-full font-rubic font-medium text-sm text-white inline-block mt-5">
          submit{" "}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
