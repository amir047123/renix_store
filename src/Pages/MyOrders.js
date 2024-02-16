import React from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const myOrder = [1];
  return (
    <div>
      {myOrder.length === 0 ? (
        <>
          <div className="py-6 text-sm text-[#333]">
            <Link
              to={"/"}
              className="hover:bg-secondary bg-primary transition-all duration-300 text-white  px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mr-2"
            >
              Browse products
            </Link>
            <span className="block md:inline mt-5 md:mt-0">
              {" "}
              No orders available yet.
            </span>
          </div>
        </>
      ) : (
        <div>
          <table
            className="w-full max-lg:w-[800px] bg-white text-left border border-separate rounded border-slate-200"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700   w-[100px]"
                >
                  Order
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-[300px]  "
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700  w-[150px]"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0 w-[200px]"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 text-sm font-medium border-l first:border-l-0  text-left "
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-primary "
                >
                  #981
                </th>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  15 February 2024
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  On hold
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  £6.00 for 1 item
                </td>
                <td className="h-20 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <Link
                    to={"/my-account/orders/id"}
                    className="bg-primary hover:bg-secondary transition-all duration-300 hover:text-white text-white px-4 py-3  uppercase font-rubic font-medium text-sm mt-3"
                  >
                    view
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
