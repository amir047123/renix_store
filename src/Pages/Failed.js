import React from "react";
import PageHeader from "../components/ui/PageHeader";
import { Link } from "react-router-dom";

const Failed = () => {
  return (
    <div>
      <PageHeader></PageHeader>
      <div className=" flex items-center justify-center mt-5">
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Payment Failed
          </h2>
          <p className="text-gray-700 mb-6">
            We're sorry, but your payment could not be processed at this time.
          </p>
          <div className="flex justify-center">
            <Link to="/checkout">
              {" "}
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Try Again
              </button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Failed;
