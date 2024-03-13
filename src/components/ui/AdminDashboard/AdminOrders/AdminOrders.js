import React, { useEffect, useState } from "react";
import { GrView } from "react-icons/gr";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import moment from "moment";
import { server_url } from "../../../../Config/API";
import { Icon } from "@iconify/react";
import AuthUser from "../../../../Hooks/authUser";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import Loading from "../../../../Shared/Loading";
import { capitalize } from "@mui/material/utils";
import Pagination from "../../../../Shared/Pagination";

const AdminOrders = () => {
  const [nav, setNav] = useState("pending");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { userInfo } = AuthUser();
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [u, setU] = useState([]);

  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(50);

  useEffect(() => {
    fetch(`http://63.250.41.158:5000/api/v1/user/getUsersByNum/${userInfo?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setU(data?.data);
      });
  }, [userInfo]);

  useEffect(() => {
    setLoading(true);
    const url = `http://63.250.41.158:5000/api/v1/order/specific?fieldName=${"status"}&&fieldValue=${nav}&&size=${size}&&page=${page}`;
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data?.data);
          setFilterData(data?.data);
          setQuantity(data?.total);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      toast.error("something wrong");
    }
  }, [nav, refetch, u, page, size]);

  const handelUpdate = async (status, id) => {
    await UpdateHooks(`${server_url}/order/updateOrders/${id}`, {
      status: status,
    });
    toast.success(`Order status is ${status} `);
    setRefetch(!refetch);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const n = e.target.name.value;
    const fromDate = e.target.formDate.value;
    const toDate = e.target.toDate.value;

    const results = data?.filter((d) => {
      return (
        (d?.user?.name
          ? d?.user?.name.toLowerCase()?.includes(n?.toLowerCase())
          : true) &&
        (fromDate && fromDate
          ? moment(d?.date).isBetween(fromDate, toDate)
          : true)
      );
    });
    setFilterData(results);
  };

  // Calculate total pending order amount
  const totalPendingOrderAmount = data
    .filter((item) => item.status === "pending")
    .reduce((acc, item) => acc + item.totalAmount, 0);

  // Calculate total confirm order amount
  const totalConfirmOrderAmount = data
    .filter((item) => item.status === "confirm")
    .reduce((acc, item) => acc + item.totalAmount, 0);
  const totalDeliveringOrderAmount = data
    .filter((item) => item.status === "delivering")
    .reduce((acc, item) => acc + item.totalAmount, 0);
  const totalDeliveredOrderAmount = data
    .filter((item) => item.status === "delivered")
    .reduce((acc, item) => acc + item.totalAmount, 0);

  const totalRejectOrderAmount = data
    .filter((item) => item.status === "reject")
    .reduce((acc, item) => acc + item.totalAmount, 0);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4  sm:grid-cols-4 ">
        {/* Pending Order length */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4  bg-yellow-500">
            <Icon className="h-12 w-12 text-white" icon="carbon:product" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider">Pending Order</h3>
            <p className="text-sm">
              {data.filter((item) => item.status === "pending").length}
            </p>
          </div>
        </div>

        {/* Total Confirm Order length */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-500">
            <Icon className="h-12 w-12 text-white" icon="mdi:company" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider"> Confirm Order </h3>
            <p className="text-sm">
              {data.filter((item) => item.status === "confirm").length}
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-blue-500">
            <Icon className="h-12 w-12 text-white" icon="mdi:company" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider"> Delivering Order </h3>
            <p className="text-sm">
              {data.filter((item) => item.status === "delivering").length}
            </p>
          </div>
        </div>

        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-blue-800">
            <Icon className="h-12 w-12 text-white" icon="mdi:company" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider"> Delivered Order </h3>
            <p className="text-sm">
              {data.filter((item) => item.status === "delivered").length}
            </p>
          </div>
        </div>

        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-red-500">
            <Icon className="h-12 w-12 text-white" icon="mdi:company" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider"> Reject Order </h3>
            <p className="text-sm">
              {data.filter((item) => item.status === "reject").length}
            </p>
          </div>
        </div>

        {/* Total Pending Order Amount */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4  bg-yellow-500">
            <Icon className="h-12 w-12 text-white" icon="bxs:category-alt" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider">Pending Amount</h3>
            <p className="text-sm">{totalPendingOrderAmount.toFixed(2)} BDT</p>
          </div>
        </div>

        {/* Total Confirm Order Amount */}
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-green-500">
            <Icon
              className="h-12 w-12 text-white"
              icon="material-symbols:category-outline"
            />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider">Confirm Amount</h3>
            <p className="text-sm">{totalConfirmOrderAmount.toFixed(2)} BDT</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4  bg-blue-500">
            <Icon
              className="h-12 w-12 text-white"
              icon="material-symbols:category-outline"
            />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider">Delivering Amount</h3>
            <p className="text-sm">
              {totalDeliveringOrderAmount.toFixed(2)} BDT
            </p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-blue-800">
            <Icon
              className="h-12 w-12 text-white"
              icon="material-symbols:category-outline"
            />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider">Delivered Amount</h3>
            <p className="text-sm">
              {totalDeliveredOrderAmount.toFixed(2)} BDT
            </p>
          </div>
        </div>

        <div className="flex items-center bg-white border rounded-sm overflow-hidden shadow">
          <div className="p-4 bg-red-500">
            <Icon
              className="h-12 w-12 text-white"
              icon="material-symbols:category-outline"
            />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-xs tracking-wider">Reject Order Amount</h3>
            <p className="text-sm">{totalRejectOrderAmount.toFixed(2)} BDT</p>
          </div>
        </div>
      </div>

      <div className=" flex text-xs list-none gap-3 justify-center  shadow rounded-lg px-2 py-4">
        <button
          onClick={() => setNav("pending")}
          className={`cursor-pointer px-2 md:px-10 rounded-full py-2 ${
            nav === "pending"
              ? "bg-primary text-white duration-500"
              : "bg-primary/10"
          }`}
        >
          PENDING
        </button>
        <button
          onClick={() => setNav("confirm")}
          className={`cursor-pointer px-2 md:px-10 rounded-full py-2 ${
            nav === "confirm"
              ? "bg-primary text-white duration-500"
              : "bg-primary/10"
          }`}
        >
          CONFIRMED
        </button>
        <button
          onClick={() => setNav("delivering")}
          className={`cursor-pointer px-2 md:px-10 rounded-full py-2 ${
            nav === "delivering"
              ? "bg-primary text-white duration-500"
              : "bg-primary/10"
          }`}
        >
          DELIVERING
        </button>
        <button
          onClick={() => setNav("delivered")}
          className={`cursor-pointer px-2 md:px-10 rounded-full py-2 ${
            nav === "delivered"
              ? "bg-primary text-white duration-500"
              : "bg-primary/10"
          }`}
        >
          DELIVERED
        </button>
        <button
          onClick={() => setNav("reject")}
          className={`cursor-pointer px-2 md:px-10 rounded-full py-2 ${
            nav === "reject"
              ? "bg-primary text-white duration-500 transition-all"
              : "bg-primary/10"
          }`}
        >
          REJECTED
        </button>
      </div>

      <div className="pt-5">
        <form
          onSubmit={handleSearch}
          className="flex flex-wrap items-center   gap-3 mb-6"
        >
          <div>
            <label className="block mb-1">Form Date</label>
            <input
              name="formDate"
              type="date"
              className="border focus:outline-none bg-[#F0FDF4] px-3 py-2 rounded-md"
            ></input>
          </div>
          <div>
            <label className="block mb-1">To Date</label>
            <input
              name="toDate"
              type="date"
              className="border focus:outline-none bg-[#F0FDF4] px-3 py-2 rounded-md"
            ></input>
          </div>

          <div>
            <label className="block mb-1">Name</label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-xl text-textColor">
                  <CiSearch />
                </span>
              </div>
              <input
                type="text"
                name="name"
                className="bg-[#F0FDF4] border text-gray-900 text-sm rounded-lg  block w-full pl-10 px-2.5 py-3  focus:outline-none"
                placeholder="Search by name"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-primary px-3 py-2 rounded-md mt-6"
          >
            Search
          </button>
        </form>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100   border  rounded-lg">
              <tr className="py-4 rounded-lg">
                <th
                  scope="col"
                  className="px-6 py-3  border text-[13px] font-medium capitalize"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border  text-[13px] font-medium capitalize"
                >
                  Customer
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 border text-[13px] font-medium capitalize"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  border text-[13px] font-medium capitalize"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3  border text-[13px] font-medium capitalize"
                >
                  Payment Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 border  text-[13px] font-medium capitalize"
                >
                  transaction id
                </th>
                <th
                  scope="col"
                  className=" py-3 border px-3 text-[13px] font-medium capitalize"
                >
                  Quantity
                </th>

                <th
                  scope="col"
                  className="px-3 py-3 border  text-[13px] font-medium capitalize"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filterData?.map((item, i) => (
                <tr
                  key={item?._id}
                  item={item}
                  className="bg-white border-b border-[#D0D2DA]"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 border font-medium text-gray-900 whitespace-nowrap "
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4 border  whitespace-nowrap">
                    <p>
                      {item?.user?.firstName} {item?.user?.lastName}
                    </p>
                  </td>

                  <td className="px-6 py-4 border whitespace-nowrap">
                    <p>{moment(item?.date).format("YYYY-MM-DD")}</p>
                  </td>

                  <td className="px-6 py-4 border whitespace-nowrap">
                    <p>{item?.totalAmount?.toFixed(2)} BDT</p>
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap">
                    <td className="px-6 py-4 border whitespace-nowrap">
                  {item?.tran_id !== "N/A" ? "Online payment" : "Cash on Delivery"}
                    </td>
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap">
                    <p>{item?.tran_id}</p>
                  </td>
                  <td className="px-6 py-4 border whitespace-nowrap">
                    <p>{item?.products?.length}</p>
                  </td>

                  <td className=" py-4 whitespace-nowrap">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="flex items-center gap-3">
                        <Link
                          to={`/adminDashboard/orders/${item?._id}`}
                          title="view all products"
                          className="text-lg text-white bg-green-200 w-7  h-7 rounded-lg flex items-center justify-center"
                        >
                          <GrView />
                        </Link>

                        <select
                          onChange={(e) =>
                            handelUpdate(e?.target?.value, item?._id)
                          }
                          className="px-2 py-2 border focus:outline-none rounded-md"
                        >
                          <option
                            selected={item?.status === "pending"}
                            value="pending"
                          >
                            Pending
                          </option>
                          <option
                            selected={item?.status === "confirm"}
                            value="confirm"
                          >
                            Confirm
                          </option>
                          <option
                            selected={item?.status === "delivering"}
                            value="delivering"
                          >
                            Delivering
                          </option>
                          <option
                            selected={item?.status === "delivered"}
                            value="delivered"
                          >
                            Delivered
                          </option>
                          <option
                            selected={item?.status === "reject"}
                            value="reject"
                          >
                            Reject
                          </option>
                        </select>
                      </span>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        quantity={quantity}
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
        // Provide the capitalize function to the Pagination component
        sx={{ "& .MuiPaginationItem-root": { textTransform: capitalize } }}
      />
    </div>
  );
};

export default AdminOrders;
