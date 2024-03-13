import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const percentese = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];


const AddCoupon = () => {
  const [formData,setFormData]=useState({
code:"",
discount:0,
startDate:"",
endDate:"",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://63.250.41.158:5000/api/v1/coupon/addCoupons",
        formData
      );
      toast.success("Coupon posted!");
    } catch (error) {
      toast?.error(error)
      console.error("Error making POST request:", error);
    }
  };


  return (
    <div>
       <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Add Coupon
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Add essential coupon for health . Act now to secure the latest
          items
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
      >
        {/* code  */}
        <div className="mb-1  w-full  mr-0 md:mr-2">
          <label
            for="repeat-password"
            class="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            Code
          </label>
          <input
            type="text"
            name="code"
            value={formData?.code}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
            placeholder="Enter a code"
       required
          />
         
        </div>

        {/* percent  */}
        <div className="mb-1  w-full  mr-0 md:mr-2">
          <label
            for="repeat-password"
            class="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            Discount
          </label>
          <select
          name="discount"
            value={formData?.discount}
            onChange={handleChange}
            id="condition"
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
          >
            <option value="" disabled selected>
              Choose prercent
            </option>

             
            {percentese?.map((cat, index) => (
              <option key={index} cat={cat} value={cat}>
                {cat}%
              </option>
            ))}
          </select>
        </div>

        

        {/* date */}

        <div className="md:flex items-center">
          <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Start Date
            </label>

            <input
            type="date"
          
            name="startDate"
            value={formData?.startDate}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
          />
          </div>

          <div className="mb-1  w-full md:w-[50%] mr-0 md:ml-2">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              End Date
            </label>
            <input
              type="date"
              name="endDate"
            value={formData?.endDate}
            onChange={handleChange}
              placeholder="Selete start date"
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
            />
          </div>
        </div>


        <div className="text-center pt-3">
          <button
            className="bg-primary hover:bg-lightPrimary text-white   py-2 rounded-lg text-lg w-fit px-8"
            type="submit"
          >
            Add Coupon
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;
