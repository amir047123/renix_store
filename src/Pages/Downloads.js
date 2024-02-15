import React from "react";
import { Link } from "react-router-dom";

const Downloads = () => {
  return (
    <div className="py-6 text-sm text-[#333]">
      <Link
        to={"/"}
        className="hover:bg-secondary bg-primary transition-all duration-300 text-white  px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mr-2"
      >
        Browse products
      </Link>
      <span className="block md:inline mt-5 md:mt-0">
        No downloads available yet.
      </span>
    </div>
  );
};

export default Downloads;
