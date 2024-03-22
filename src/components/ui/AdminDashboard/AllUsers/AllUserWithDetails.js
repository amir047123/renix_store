import { Icon } from "@iconify/react";
import React from "react";

const AllUserWithDetails = ({totalUser,divisionLength, districtLength, upazilaLength}) => {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 px-4  sm:grid-cols-4 sm:px-8">
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="icon-park-solid:data-user"></Icon>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total User</h3>
            <p class="text-3xl">{totalUser}</p>
          </div>
        </div>
     
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="ep:place"></Icon>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Division</h3>
            <p class="text-3xl">{divisionLength}</p>
          </div>
        </div>
       
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="mdi:place-outline"></Icon>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total District</h3>
            <p class="text-3xl">{districtLength}</p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="grommet-icons:map"></Icon>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Upazila</h3>
            <p class="text-3xl">{upazilaLength}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUserWithDetails;
