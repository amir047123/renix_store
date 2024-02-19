import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Loading from "../../../../shared/Loading";
import DeleteHook from "../../../../Hooks/DeleteHook";
import Pagination from "../../../../shared/Pagination";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // for pagination
  const [quantity, setQuantity] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/user/specific?fieldName=${"role"}&&fieldValue=${"user"}&&size=${size}&&page=${page}`
        );
        setUsers(response?.data?.data);
        setQuantity(response?.data?.total);
        setFilteredUsers(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchUsers();
  }, [refetch, size, page]);



  
  
  if (loading) {
    return <Loading />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className=" ">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All User
        </h1>
      
      </div>

      <div className="flex relative rounded-md w-full mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter Name, Phone"
        
        
          className="w-full p-3 rounded-md border border-r-white rounded-r-none border-gray-300 focus:outline-none"
        />
        <button
         
          className="inline-flex items-center gap-2 bg-secondary text-white text-lg font-semibold py-3 px-6 rounded-r-md hover:bg-secondary/90"
        >
          <span>Search</span>
          <span className="hidden md:block">
            <Icon icon="material-symbols:search" />
          </span>
        </button>
      </div>

      {/* Display suggestions */}
      {suggestions.length > 0 && (
        <div>
          <h3>Suggestions:</h3>
          <ul>
            {suggestions.map((user) => (
              <li key={user._id}>{user.firstName} {user.lastName} - {user.phone}</li>
            ))}
          </ul>
        </div>
      )}

      <div className=" mb-3">
        <span className=" text-gray-700">
          {" "}
          Showing {filteredUsers.length} Results
        </span>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left rounded " cellSpacing="0">
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
            {filteredUsers.map((user, index) => (
              <tr key={user._id} className="shadow">
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {index + 1}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {user?.firstName} {user?.lastName}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {user?.phone}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {user?.streetAddress}
                </td>
                <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                  {/* pase id view page */}
                  <Link to={`/adminDashboard/view-user-profile/${user?._id}`}>
                    <button className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300">
                      <Icon className="text-secondary" icon="grommet-icons:view" />
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
      <Pagination quantity={quantity} page={page} setPage={setPage} size={size} setSize={setSize} />
    </div>
  );
}

export default AllUsers;
