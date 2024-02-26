import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server_url } from "../../../../Config/API";
import Loading from "../../../../shared/Loading";

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
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">No</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Phone</th>

              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">City</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Email</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Street Address</th>
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
                {data?.user?.city}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {data?.user?.email}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {data?.user?.streetAddress}
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-xl uppercase font-semibold mb-4 mt-4">All Products</h2>

        <table className="w-full text-left rounded" cellspacing="0">
          <tbody>
            <tr>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">No</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Image</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Discount Price</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Original Price</th>
              <th scope="col" className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100">Quantity</th>
            </tr>
            {data?.products?.map((product, index) => (
              <tr key={product.productId} className="shadow">
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {index + 1}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  <img className="w-12 border p-1 rounded-md shadow" src={product.img} alt={product.name} />
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {product.name}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  ৳ {product.discountPrice}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  ৳ {product.orginalPrice}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderView;