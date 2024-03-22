import { Icon } from "@iconify/react";
import React from "react";

const AllCouponWithDetails = ({ totalCoupons }) => {
  return (
    <div class="grid grid-cols-1 gap-4 px-4  sm:grid-cols-4 sm:px-8">
      <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
        <div class="p-4 bg-green-400">
          <Icon className=" h-12 w-12 text-white" icon="carbon:product"></Icon>
        </div>
        <div class="px-4 text-gray-700">
          <h3 class="text-sm tracking-wider">Total Coupon</h3>
          <p class="text-3xl">{totalCoupons}</p>
        </div>
      </div>
    </div>
  );
};

export default AllCouponWithDetails;
