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
      No downloads available yet.
    </div>
  );
};

export default Downloads;
