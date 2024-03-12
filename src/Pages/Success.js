import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Link } from 'react-router-dom';
import { IoBagCheck } from "react-icons/io5";

const Success = () => {
  return (
    <div className="">
      <PageHeader></PageHeader>
      <div className=" mb-10 mt-5 flex items-center justify-center ">
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-green-600 mb-4 text-center">
            Payment Successful!
          </h2>
          <div>
            <>
              {/*<!-- Component: Card with icon --> */}
              <div className="overflow-hidden text-center  rounded text-slate-500 shadow-slate-200">
                {/*  <!-- Icon --> */}
                <figure className="p-6 pb-0">
                  <IoBagCheck size={50} className="mx-auto text-primary" />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    Order placed successfully!!
                  </h3>

                  <h2 className="text-4xl my-4 text-primary font-bold capitalize">
                    Thanks For Your order
                  </h2>
                  <p>শীঘ্রই আমাদের একজন প্রতিনিধি আপনার সাথে যোগাযোগ করবে 😍</p>
                </div>
              </div>
              {/*<!-- End Card with icon --> */}
            </>
          </div>
          <p className="text-gray-700 mb-6 text-center">
            Thank you for your payment. Your transaction has been processed
            successfully.
          </p>
          <div className="flex justify-center">
            <Link to="/">
              {" "}
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
