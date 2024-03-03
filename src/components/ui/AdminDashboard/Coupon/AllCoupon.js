import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import AllCouponWithDetails from "./AllCouponWithDetails";
import Loading from "../../../../shared/Loading";
import DeleteHook from "../../../../Hooks/DeleteHook";

function AllCoupon() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredCoupons, setFilteredCoupons] = useState([]); // State for filtered coupons

  useEffect(() => {
    async function fetchCoupons() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/coupon/getCoupons"
        );
        setCoupons(response?.data?.data);
        setFilteredCoupons(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchCoupons();
  }, [refetch]);

  useEffect(() => {
    // Handle initial load and clear input case
    if (!searchTerm) {
      setFilteredCoupons(coupons);
    } else {
      handleSearch();
    }
  }, [searchTerm, coupons]);

  const handleSearch = () => {
    setFilteredCoupons(
      coupons?.filter((coupon) =>
        coupon?.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All Coupon
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Explore essential coupon for health . Act now to secure the latest
          items
        </p>
      </div>
      <AllCouponWithDetails totalCoupons={coupons.length} />
      <div className="flex relative rounded-md w-full mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="inline-flex items-center gap-2 bg-secondary text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-secondary/90"
        >
          <span>Search</span>
          <span className="hidden md:block">
            <Icon icon="material-symbols:search" />
          </span>
        </button>
      </div>

      <div className=" mb-3">
        <span className=" text-gray-700">
          {" "}
          Showing {filteredCoupons.length} Results
        </span>
      </div>
      <div className="w-full overflow-x-auto">
      <table
        className="w-full text-left rounded "
        cellspacing="0"
      >
        <tbody>
          <tr>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              #
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Code
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Discount(%)
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Start Date
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              End Date
            </th>

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {/* Map through the filtered coupons instead of all coupons */}
          {filteredCoupons.map((coupon, index) => (
            <tr key={coupon._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {index + 1}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {coupon?.code}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {coupon?.discount} %
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {coupon?.startDate}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {coupon?.endDate}
              </td>

              <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `http://localhost:5000/api/v1/coupon/deleteCoupons/${coupon?._id}`,
                    });
                  }}
                  className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="material-symbols:delete-outline" />
                </div>

                <Link to={`/adminDashboard/updateCoupons/${coupon._id}`}>
                  <div className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300">
                    <Icon icon="uil:edit"></Icon>
                  </div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default AllCoupon;
