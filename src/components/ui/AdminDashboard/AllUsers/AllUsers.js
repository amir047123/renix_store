import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import DeleteHook from "../../../Hooks/DeleteHook";
import Loading from "../../../Shared/Loading";
import AllUserWithDetails from "./AllUserWithDetails";
import Pagination from "../../../Shared/Pagination";
import { Link } from "react-router-dom";

function AllUsers() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredusers, setFilteredusers] = useState([]);

  const [divisionLength, setDivisionLength] = useState(0);
  const [districtLength, setDistrictLength] = useState(0);
  const [upazilaLength, setUpazilaLength] = useState(0);

  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);

  useEffect(() => {
    async function fetchusers() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/user/specific?fieldName=${"role"}&&fieldValue=${"user"}&&size=${size}&&page=${page}`
        );
        setusers(response?.data?.data);
        setQuantity(response?.data?.total);
        setFilteredusers(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchusers();
  }, [refetch, size, page]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredusers(users);
    } else {
      handleSearch();
    }
  }, [searchTerm, users]);

  const handleSearch = () => {
    setFilteredusers(
      users?.filter(
        (user) =>
          user?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.upazila.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user?.phone.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  useEffect(() => {
    // Calculate the lengths and update state
    const divisionLength = users.reduce(
      (total, user) => total + (user.division ? user.division.length : 0),
      0
    );
    const districtLength = users.reduce(
      (total, user) => total + (user.district ? user.district.length : 0),
      0
    );
    const upazilaLength = users.reduce(
      (total, user) => total + (user.upazila ? user.upazila.length : 0),
      0
    );

    setDivisionLength(divisionLength);
    setDistrictLength(districtLength);
    setUpazilaLength(upazilaLength);
  }, [users]);

  // console.log(users.length);

  if (loading) {
    return <Loading />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All User
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Explore essential Seller for health . Act now to secure the latest
          items
        </p>
      </div>

      <AllUserWithDetails
        totalUser={quantity}
        divisionLength={divisionLength}
        districtLength={districtLength}
        upazilaLength={upazilaLength}
      />
      <div className="flex relative rounded-md w-full mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter Name , Phone , Division , District , Upazila"
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
          Showing {filteredusers.length} Results
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
              className="h-16 px-6  text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Name{" "}
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Phone{" "}
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Division{" "}
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              District{" "}
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Upazila{" "}
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Address{" "}
            </th>

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {/* Map through the filtered users instead of all users */}
          {filteredusers.map((user, index) => (
            <tr key={user._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {index + 1}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {user?.name}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {user?.phone}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {user?.division}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {user?.district}
              </td>

              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {user?.upazila}
              </td>

              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {user?.address}
              </td>

              <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                {/* pase id view page */}
                <Link to={`/adminDashboard/view-user-profile/${user?._id}`}>
                  <button className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300">
                    <Icon
                      className="text-secondary"
                      icon="grommet-icons:view"
                    />
                  </button>
                </Link>

                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `http://localhost:5000/api/v1/user/deleteUsers/${user?._id}`,
                    });
                  }}
                  className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="material-symbols:delete-outline" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <Pagination
        quantity={quantity}
        page={page}
        setPage={setPage}
        size={size}
        setSize={setSize}
      />
    </div>
  );
}

export default AllUsers;
