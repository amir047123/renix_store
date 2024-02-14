import { Icon } from "@iconify/react";
import React from "react";

const AllProductWithDetails = ({ length, uniqueCompanies, uniqueCategories, uniqueGenericCategories }) => {
  return (
    <div>
      <div class="grid grid-cols-1 gap-4 px-4  sm:grid-cols-4 sm:px-8">
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-green-400">
           <Icon className=" h-12 w-12 text-white" icon="carbon:product"></Icon>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Product</h3>
            <p class="text-3xl">{length }</p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-blue-400">
          <Icon className=" h-12 w-12 text-white" icon="mdi:company"></Icon>

          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Brand</h3>
            <p class="text-3xl">{uniqueCompanies.length}</p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-indigo-400">
          <Icon className=" h-12 w-12 text-white" icon="bxs:category-alt"></Icon>

          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Total Category</h3>
            <p class="text-3xl">{uniqueCategories.length}</p>
          </div>
        </div>
        <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div class="p-4 bg-red-400">
            <Icon className=" h-12 w-12 text-white" icon="material-symbols:category-outline"></Icon>
          </div>
          <div class="px-4 text-gray-700">
            <h3 class="text-sm tracking-wider">Generic Category</h3>
            <p class="text-3xl">{uniqueGenericCategories.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductWithDetails;
