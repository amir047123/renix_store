import { Icon } from "@iconify/react";
import React from "react";

const AllCategoryWithDetails = ({category}) => {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 px-4  sm:grid-cols-4 sm:px-8">
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="carbon:product"></Icon>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Category</h3>
            <p class="text-3xl">{category}</p>
          </div>
        </div>
     
       
      </div>
    </div>
  );
};

export default AllCategoryWithDetails;
