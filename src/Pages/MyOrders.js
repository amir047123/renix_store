import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthUser from "../Hooks/authUser";

const MyOrders = () => {
  const { userInfo } = AuthUser();

  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    const getMyOrder = async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/order/specific?fieldName=userId&fieldValue=${userInfo._id}`
      );
      const res = await response.json();
      setMyOrder(res.data);
    };
    getMyOrder();
  }, [userInfo._id]);
  // Assuming myOrder is your array of orders
  const grandTotal = myOrder.reduce((accumulator, order) => {
    const orderTotal = order.products.reduce((total, product) => {
      return total + product.quantity * product.discountPrice;
    }, 0);
    return orderTotal;
  }, 0);

  console.log(grandTotal);

  console.log(myOrder);
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
              {myOrder?.map((order) => (
                <tr key={order._id}>
                  <th
                    scope="row"
                    className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-primary "
                  >
                    #981
                  </th>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {order.date}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {order.status}
                  </td>
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    {grandTotal} for {order?.products?.length} item
                  </td>
                  <td className="h-20 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                    <Link
                      to={`/my-account/orders/${order._id}`}
                      className="bg-primary hover:bg-secondary transition-all duration-300 hover:text-white text-white px-4 py-3  uppercase font-rubic font-medium text-sm mt-3"
                    >
                      view
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
