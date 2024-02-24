import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import UpdateHooks from "../../../../Hooks/UpdateHooks";

const AdminShipping = () => {
  const [formData, setFormData] = useState({
    insideDhaka: 0,
    outsideDhaka: 0,
    tax: 0,
  });

  //   load data
  useEffect(() => {
    fetch(`https://serverrenixstore.niroghealthplus.com/api/v1/shipping/getShippings`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data.length) {
          setFormData(data?.data[0]);
        }
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData?._id) {
      await UpdateHooks(
        `https://serverrenixstore.niroghealthplus.com/api/v1/shipping/updateShippings/${formData?._id}`,
        formData
      );
      toast?.success(`Shipping data Updated !`);
    } else {
      try {
        const response = await axios.post(
          "https://serverrenixstore.niroghealthplus.com/api/v1/shipping/addShippings",
          formData
        );
        toast.success("Shipping posted!");
        console.log("POST request successful:", response);
      } catch (error) {
        toast?.error(error);
        console.error("Error making POST request:", error);
      }
    }
  };

  const percentese = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100,
  ];

  return (
    <div>
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Update Shipping
        </h1>
      
      </div>

      <div class="grid grid-cols-1 gap-4 px-4  sm:grid-cols-4 sm:px-8">
        {/* <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="fa-solid:shipping-fast"></Icon> 
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Inside Dhaka  </h3>
            <p class="text-3xl">  {formData?.insideDhaka} BDT</p>
          </div>
        </div> */}
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="fa-solid:shipping-fast"></Icon> 
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider"> Shipping </h3>
            <p class="text-3xl">{formData?.outsideDhaka} BDT</p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="tabler:receipt-tax"></Icon> 
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider"> Tax % </h3>
            <p class="text-3xl">{formData?.tax} %</p>
          </div>
        </div>
       
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
      >
        {/* date */}

        <div className="md:flex items-center">
          {/* <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
            <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
              Inside Dhaka
            </label>

            <input
              type="number"
              name="insideDhaka"
              value={formData?.insideDhaka}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
            />
          </div> */}

          <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
            <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
              Shipping Charge
            </label>

            <input
              type="number"
              name="outsideDhaka"
              value={formData?.outsideDhaka}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
            />
          </div>
        </div>

        <div className="mb-1  w-full  mr-0 md:mr-2">
          <label
            for="repeat-password"
            class="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            Tax (%)
          </label>
          <select
            name="tax"
            value={formData?.tax}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
          >
            <option value="" disabled selected>
              select
            </option>

            {percentese?.map((cat, index) => (
              <option key={index} cat={cat} value={cat}>
                {cat}%
              </option>
            ))}
          </select>
        </div>

        <div className="text-center pt-3">
          <button
            className="bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8"
            type="submit"
          >
            Update Shipping
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminShipping;
