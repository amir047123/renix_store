import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import AllProductWithDetails from "./AllProductWithDetails";
import DeleteHook from "../../../../Hooks/DeleteHook";
import Loading from "../../../../shared/Loading";

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [uniqueCompanies, setUniqueCompanies] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueGenericCategories, setUniqueGenericCategories] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://serverrenixstore.niroghealthplus.com/api/v1/product/getProducts"
        );
        setProducts(response?.data?.data);
        setFilteredProducts(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchProducts();
  }, [refetch]);

  const handleSearch = () => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products?.filter(
          (product) =>
            product?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product?.category?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    // Extract unique company names and their lengths
    const companies = [
      ...new Set(products.map((product) => product.companyName)),
    ];
    const companyLengths = companies.map((company) => ({
      companyName: company,
      length: products.filter((product) => product.companyName === company)
        .length,
    }));
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    const categoryLengths = categories.map((category) => ({
      categoryName: category,
      length: products.filter((product) => product.category === category)
        .length,
    }));
    // Extract unique generic categories and their lengths
    const genericCategories = [
      ...new Set(products.map((product) => product.genericCategory)),
    ];
    const genericCategoryLengths = genericCategories.map((genericCategory) => ({
      genericCategoryName: genericCategory,
      length: products.filter(
        (product) => product.genericCategory === genericCategory
      ).length,
    }));
    setUniqueCompanies(companyLengths);
    setUniqueCategories(categoryLengths);
    setUniqueGenericCategories(genericCategoryLengths);
  }, [products]);

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
          All Product
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Explore essential products for health . Act now to secure the latest
          items
        </p>
      </div>

      <div>
        <AllProductWithDetails
          length={products.length}
          uniqueCompanies={uniqueCompanies}
          uniqueCategories={uniqueCategories}
          uniqueGenericCategories={uniqueGenericCategories}
        ></AllProductWithDetails>
      </div>

      <div className="flex relative rounded-md w-full mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter product name or category"
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
          Showing {filteredProducts.length} Results
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
              No{" "}
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
              Pieces Price
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              stock
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              categories
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              status
            </th>
            <th
              scope="col"
              className="h-16 px-6 text-sm font-medium stroke-slate-700 text-slate-700 bg-slate-100"
            >
              Action
            </th>
          </tr>
          {/* Map through the filtered products instead of all products */}
          {filteredProducts.map((product, index) => (
            <tr key={product._id} className="shadow">
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {index + 1}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                <img
                  className="w-12 border p-1 rounded-md shadow"
                  src={product?.img}
                  alt="img"
                ></img>
              </td>

              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {product?.name}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {product?.onePiecePrice}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {product?.stock}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {product?.category}
              </td>
              <td className="h-16 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                {product?.status}
              </td>
              <td className="h-16 px-6  transition duration-300 border-slate-200  text-secondary text-lg flex gap-2 items-center cursor-pointer">
                <div
                  onClick={() => {
                    DeleteHook({
                      refetch,
                      setRefetch,
                      url: `https://serverrenixstore.niroghealthplus.com/api/v1/product/deleteProducts/${product?._id}`,
                    });
                  }}
                  className="border border-secondary py-2 px-3 rounded-md hover:bg-secondary/10 duration-300"
                >
                  <Icon icon="material-symbols:delete-outline" />
                </div>

                <Link to={`/adminDashboard/updateProducts/${product._id}`}>
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

export default AllProduct;
