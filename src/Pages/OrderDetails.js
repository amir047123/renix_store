import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({});
  useEffect(() => {
    const getMyOrder = async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/order/getOrdersById/${id}`
      );
      const res = await response.json();
      setOrderDetails(res.data);
    };
    getMyOrder();
  }, [id]);
  const grandTotal = orderDetails?.products?.reduce(
    (accumulator, item) => accumulator + item.quantity * item.discountPrice,
    0
  );

  return (
    <div>
      <p className="text-xs font-openSans mb-3 text-[#333]">
        Order <mark>#981</mark> was placed on <mark> {orderDetails?.date}</mark>{" "}
        and is currently <mark>{orderDetails?.status}</mark>.
      </p>
      <h4 className="text-base font-openSans  text-[#333]">Order details</h4>
      <table
        className="w-full text-left border border-separate rounded border-slate-200"
        cellspacing="0"
      >
        <thead>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-[700px]   "
            >
              Product
            </th>
            <th
              scope="col"
              className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {orderDetails?.products?.map((product) => (
            <tr key={product._id}>
              <th
                scope="row"
                className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   text-primary "
              >
                {product.name} × {product.quantity}
              </th>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200    text-[#333]">
                {product.quantity * product.discountPrice}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   stroke-slate-700 "
            >
              Subtotal:
            </th>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   text-[#333] ">
              {grandTotal}
            </td>
          </tr>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   stroke-slate-700"
            >
              Payment method:
            </th>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   text-[#333] ">
              {orderDetails.onlinePay ? "Online pay" : "Cash on delivery"}
            </td>
          </tr>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   stroke-slate-700"
            >
              Total:
            </th>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   text-[#333] ">
              {grandTotal}
            </td>
          </tr>
          <tr>
            <th
              scope="col"
              className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   stroke-slate-700 "
            >
              Note:
            </th>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   text-[#333] ">
              {orderDetails?.user?.notes}
            </td>
          </tr>
        </tfoot>
      </table>
      <div>
        <h2 className="text-base font-openSans text-[#333] my-3">
          Billing address
        </h2>
        <address className=" font-openSans text-sm text-[#999]">
          Lois Ingram
          <br />
          Nichols Cain Trading
          <br />
          {orderDetails?.user?.streetAddress}
          <br />
          Libero quibusdam vol
          <br />
          Omnis et aut iste ar
          <br />
          {orderDetails?.user?.postcode}
          <br />
          MAGNAMAUTVITAESED
          <br />
          {orderDetails?.user?.country}
          <p className="my-4">{orderDetails?.user?.phone}</p>
          <p className="">{orderDetails?.user?.email}</p>
        </address>
      </div>
    </div>
  );
};

export default OrderDetails;
