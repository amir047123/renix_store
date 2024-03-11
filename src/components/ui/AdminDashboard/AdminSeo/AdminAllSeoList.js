import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteHook from "../../../../Hooks/DeleteHook";
import axios from "axios";
import useGetSeo from "../../../../Hooks/useGetSeo";

const AdminAllSeoList = () => {
  const [refetch, setRefetch] = useState(false);
  const data = useGetSeo("product_details_page");

  const [allSeo, setAllSeo] = useState([]);
  useEffect(() => {
    const fetchAllSeo = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/seo/getAllSeo"
      );
      setAllSeo(data?.data);
    };
    fetchAllSeo();
  }, []);

  return (
    <div>
      <h1 class="text-4xl font-bold capitalize text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
        All SEO List
      </h1>
      <div className=" mb-3">
        <span className=" text-gray-700"> Showing 24 Results</span>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left rounded  " cellspacing="0">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                No{" "}
              </th>

              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Page Name
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Meta Image
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Meta tilte
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Meta description
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Slug
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Canonical Url
              </th>
              <th
                scope="col"
                className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>
            {/* Map all seo */}
            {allSeo?.map((seo, index) => (
              <tr key={seo._id} className="shadow">
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {index + 1}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {seo?.page}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  <img
                    className="w-12 border p-1 rounded-md shadow"
                    src={seo?.metaImage}
                    alt="img"
                  ></img>
                </td>

                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {seo?.metaTitle}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {seo?.metaDescription}
                </td>

                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {seo?.slug}
                </td>
                <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                  {seo?.canonicalUrl}
                </td>
                <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                  <div
                    onClick={() => {
                      DeleteHook({
                        refetch,
                        setRefetch,
                        setAllData: setAllSeo,
                        id: seo?._id,
                        url: `http://localhost:5000/api/v1/seo/deleteSeo/${seo?._id}`,
                      });
                    }}
                    className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                  >
                    <Icon icon="material-symbols:delete-outline" />
                  </div>

                  <Link to={`/adminDashboard/updateSeo/${seo._id}`}>
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
};

export default AdminAllSeoList;
