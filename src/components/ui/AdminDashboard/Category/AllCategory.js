import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import AllCategoryWithDetails from "./AllCategoryWithDetails";
import DeleteHook from "../../../../Hooks/DeleteHook";
import Loading from "../../../../Shared/Loading";

function AllCategory() {
  const [categorys, setCategorys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filteredCategorys, setFilteredCategorys] = useState([]); // State for filtered categorys
   
  

  useEffect(() => {
    async function fetchCategorys() {
      try {
        const response = await axios.get(
          "https://apistore.renixlaboratories.com.bd/api/v1/category/getCategorys"
        );
        setCategorys(response?.data?.data);
        setFilteredCategorys(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchCategorys();
  }, [refetch]);

  const handleSearch = () => {
    setFilteredCategorys(
      categorys?.filter((category) =>
        category?.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  if (loading) {
    return <Loading />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All Category
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Explore essential Category for health . Act now to secure the latest
          items
        </p>
      </div>
      <AllCategoryWithDetails
        category={categorys.length}
      ></AllCategoryWithDetails>

      <div className="flex relative rounded-md w-full mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter category name"
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
          Showing {filteredCategorys.length} Results
        </span>
      </div>
      <div className="w-full overflow-x-auto">
      <table
        className="w-full text-left rounded  "
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
              icon
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Banner
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
              Action
            </th>
          </tr>
          {/* Map through the filtered categorys instead of all categorys */}
          {filteredCategorys.map((category, index) => (
            <tr key={category._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {index + 1}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                <img
                  className="w-14 rounded-md shadow"
                  src={category?.icon}
                  alt="img"
                ></img>
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                <img
                  className="w-14 rounded-md shadow"
                  src={category?.banner}
                  alt="img"
                ></img>
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {category?.name}
              </td>

              <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `https://apistore.renixlaboratories.com.bd/api/v1/category/deleteCategorys/${category?._id}`,
                    });
                  }}
                  className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="material-symbols:delete-outline" />
                </div>

                <Link to={`/adminDashboard/updateCategorys/${category._id}`}>
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

export default AllCategory;
