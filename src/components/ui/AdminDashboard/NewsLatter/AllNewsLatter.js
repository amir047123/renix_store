import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import DeleteHook from "../../../../Hooks/DeleteHook";
import Loading from "../../../../shared/Loading";


function AllNewsLatter() {
  const [newsLatter, setNewsLatter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filterNewsLatter, setFilterNewsLatter] = useState([]); // State for filtered contactRenixes

  useEffect(() => {
    async function fetchNewsLatter() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/newsLatter/getNewsLatters"
        );
        setNewsLatter(response?.data?.data);
        setFilterNewsLatter(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchNewsLatter();
  }, [refetch]);

  useEffect(() => {
    // Handle initial load and clear input case
    if (!searchTerm) {
      setFilterNewsLatter(newsLatter);
    } else {
      handleSearch();
    }
  }, [searchTerm, newsLatter]);

  const handleSearch = () => {
    setFilterNewsLatter(
      newsLatter?.filter((requestMedicine) =>
        requestMedicine?.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
          requestMedicine?.email
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" m-5">
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          All News Latter 
        </h1>
     
      </div>

      <div className="flex relative rounded-md w-full mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter Name , Email"
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
          Showing {filterNewsLatter.length} Results
        </span>
      </div>

      <table
        className="w-full text-left rounded w-overflow-x-auto "
        cellspacing="0"
      >
        <tbody>
          <tr className="  bg-secondLightPrimary">
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
              Email{" "}
            </th>
          
         

            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {filterNewsLatter.map((newsLatter, index) => (
            <tr key={newsLatter._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {index + 1}
              </td>
            
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {newsLatter?.email}
              </td>
             

              <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `http://localhost:5000/api/v1/newsLatter/deleteNewsLatter/${newsLatter?._id}`,
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
  );
}

export default AllNewsLatter;
