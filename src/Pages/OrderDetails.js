import React from "react";

const OrderDetails = () => {
  return (
    <div>
      <p className="text-xs font-openSans mb-3 text-[#333]">
        Order <mark>#981</mark> was placed on <mark>15 February 2024</mark> and
        is currently <mark>On hold</mark>.
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
          <tr>
            <th
              scope="row"
              className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200   text-primary "
            >
              Fresh Organic Mustard Leaves × 1
            </th>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200    text-[#333]">
              15 February 2024
            </td>
          </tr>
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
              £6.00
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
              Direct bank transfer
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
              £6.00
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
              Dolor suscipit offic
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
          68 White Old Extension
          <br />
          Libero quibusdam vol
          <br />
          Omnis et aut iste ar
          <br />
          FATA
          <br />
          MAGNAMAUTVITAESED
          <br />
          Pakistan
          <p className="my-4">+1 (692) 261-2789</p>
          <p className="">qilenodi@mailinator.com</p>
        </address>
      </div>
    </div>
  );
};

export default OrderDetails;
