import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server_url } from "../../../../Config/API";
import Loading from "../../../../Shared/Loading";

const AdminOrderView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    try {
      fetch(`${server_url}/order/getOrdersById/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data?.data);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
  }, [id]);

  // Calculate total price of all products
  const totalPrice = data.products
    ? data.products.reduce((total, product) => {
        const productPrice = product.variants?.price
          ? product.variants.price
          : product.discountPrice
          ? product.discountPrice
          : product.orginalPrice;
        return total + productPrice * product.quantity;
      }, 0)
    : 0;

  // Calculate grand total by adding shipping charge
  const shippingCharge = parseFloat(data.shippingCharge);

  // Calculate grand total by adding shipping charge
  const grandTotal = totalPrice + (isNaN(shippingCharge) ? 0 : shippingCharge);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-xl uppercase font-semibold mb-4">Shiping Address</h2>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left rounded" cellspacing="0">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                No
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Phone
              </th>

              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Street Address
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Notes
              </th>
            </tr>
            <tr className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                1
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {data?.user?.firstName} {data?.user?.lastName}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {data?.user?.phone}
              </td>

              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {data?.user?.streetAddress}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {data?.user?.notes}
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl uppercase font-semibold mb-4 mt-4">
          All Products
        </h2>

        <table className="w-full text-left rounded" cellspacing="0">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                No
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Strength
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Price
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Quantity
              </th>
            </tr>
            {data?.products?.map((product, index) => (
              <tr key={product.productId} className="shadow">
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {index + 1}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  <img
                    className="w-12 border p-1 rounded-md shadow"
                    src={product.img}
                    alt={product.name}
                  />
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {product.name}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                    {product?.variants?.strength
                      ? product?.variants?.strength
                      : product?.strength}
                  </td>
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  ৳{" "}
                  {(
                    (product?.variants?.price
                      ? product?.variants?.price
                      : product?.discountPrice
                      ? product?.discountPrice
                      : product?.orginalPrice) || 0
                  ).toFixed(2)}
                </td>

                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <tr>
          <td className="h-16  text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
            Grand Total with shippingCharge: ৳ {data?.totalAmount?.toFixed(2)}{" "}
            BDT
          </td>
        </tr>
      </div>
    </div>
  );
};

export default AdminOrderView;
