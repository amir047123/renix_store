import { FaList } from "react-icons/fa6";

import CategroyItems from "./CategroyItems";
import ProductCaousel from "./ProductCaousel";
import TopRelatedProducts from "./TopRelatedProducts";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import ProductCardGrid from "./ProductCardGrid";
import { Suspense, useEffect, useState } from "react";
import ProductListsView from "./ProductListsView";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PageHeader from "../ui/PageHeader";
import "./priceRange.css";
import PartnersCarousel from "../PartnersCarousel/PartnersCarousel";
import Pagination from "../shared/Pagination";
import useGetSeo from "../../Hooks/useGetSeo";
import DynamicTitle from "../shared/DynamicTitle";
import HomeContent from "../Home Description/HomeContent";
import Loading from "../../Shared/Loading";
import useLoadProducts from "../../Hooks/useLoadProducts";
const Shop = () => {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const { data, quantity, error, } = useLoadProducts(page,size);

  const seoMetaData = useGetSeo("shop_page");
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);
  const [isGrid, setIsGrid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [categorysById, setCategorysBYId] = useState({});
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState([]);

  // get specific data


  useEffect(() => {
    async function fetchCategorys() {
      try {
        const response = await axios.get("https://apistore.renixlaboratories.com.bd/api/v1/category/getCategorys");
        setCategorys(response?.data?.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error("Failed to fetch categories. Please try again later.");
      }
    }

    fetchCategorys();
  }, []);

  useEffect(() => {
    async function fetchCategoryById() {
      try {
        const { data } = await axios.get(`https://apistore.renixlaboratories.com.bd/api/v1/category/specific?fieldName=name&fieldValue=${id}`);
        setCategorysBYId(data?.data[0]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    fetchCategoryById();
  }, [id]);

  useEffect(() => {
    axios.get(`https://apistore.renixlaboratories.com.bd/api/v1/category/specific/?fieldName=${encodeURIComponent("name")}&fieldValue=${id}`)
      .then((response) => {
        if (response.data.data.length > 0) {
          setCategory(response.data.data[0]);
        } else {
          setCategory([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, [id]);

  useEffect(() => {
    try {
      axios.get(`https://apistore.renixlaboratories.com.bd/api/v1/product/specific/?fieldName=${encodeURIComponent("category")}&fieldValue=${id}&page=${page}&size=${size}`)
        .then((response) => {
          setProduct(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          toast.error("Something went wrong");
        });
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  }, [id, category, page, size]);

  useEffect(() => {
    // Validate range and update the fill color on slider
    const rangeFill = document.querySelector(".range-fill");
    const minPercentage = ((minPrice - 10) / 1990) * 100;
    const maxPercentage = ((maxPrice - 10) / 1990) * 100;
    rangeFill.style.left = minPercentage + "%";
    rangeFill.style.width = maxPercentage - minPercentage + "%";
  }, [minPrice, maxPrice]);

  const handleInputChange = (e, type) => {
    const newValue = parseInt(e.target.value);
    if (type === "min") {
      setMinPrice(newValue);
    } else {
      setMaxPrice(newValue);
    }
  };

  const handleFilterPrice = async () => {
    try {
      const response = await axios.get(`https://apistore.renixlaboratories.com.bd/api/v1/product/filterProducts`, {
        params: {
          minPrice: minPrice,
          maxPrice: maxPrice
        }
      });
      const { data } = response.data;
      setFilterByPrice(data);
    } catch (error) {
      console.error("Error filtering products:", error);
      // Handle error, e.g., display a message to the user
    }
  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const totalPages = Math.ceil(quantity / size);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <PageHeader />
      <section className="mt-4">
        <div className="container sm:px-5 2xl:px-0   ">
          <div className="grid grid-cols-12 gap-6">
            {/* left side content */}
            <div className=" col-span-full md:col-span-4 lg:col-span-3 md:order-1 order-2 ">
              {/* Product Category */}
              <div className="bg-white shadow-md  ">
                <h2 className="border-l-2  text-[#292929] border-solid border-l-primary py-[15px] px-5 font-medium uppercase font-oswald text-xl border-b border-b-[#eaeaea] ">
                  PRODUCT CATEGORIES
                </h2>
                {categorys?.length && (
                  <>
                    {categorys?.map((category) => (
                      <>
                        {" "}
                        <CategroyItems
                          key={category._id}
                          className=""
                          category={category?.name}
                        />
                        <DynamicTitle metaTitle={category.metaTitle} />
                      </>
                    ))}
                  </>
                )}
              </div>
              {/* product filter */}

              <div className="bg-white shadow-md mt-8">
                <h2 className="border-l-2 text-[#292929] border-solid border-l-primary py-[15px] px-5 font-medium uppercase font-oswald text-xl border-b border-b-[#eaeaea] ">
                  FILTER BY PRICE
                </h2>
                {/* price slider range design */}
                <div>
                  <div>
                    <div className="my-5 w-[90%] relative mx-auto">
                      <div className="range-fill"></div>

                      <input
                        type="range"
                        className="min-price "
                        value={minPrice}
                        min="10"
                        max="2000"
                        step="10"
                        onChange={(e) => handleInputChange(e, "min")}
                      />
                      <input
                        type="range"
                        className="max-price "
                        value={maxPrice}
                        min="10"
                        max="2000"
                        step="10"
                        onChange={(e) => handleInputChange(e, "max")}
                      />
                    </div>
                  </div>
                </div>
                {/* filter button */}
                <div className="flex justify-between items-center mt-12 p-3">
                  <button
                    onClick={handleFilterPrice}
                    className="rounded-full bg-primary px-4 py-2 text-white hover:bg-textColor hover:text-white transition-all duration-200 uppercase font-openSans text-sm"
                  >
                    filter
                  </button>
                  <div>
                    <p className="font-openSans text-sm text-textColor">
                      Price: ৳ {minPrice} — ৳ {maxPrice}
                    </p>
                  </div>
                </div>
              </div>
              {/* carousel */}
              <div className="mt-8">
                <ProductCaousel />
              </div>
              {/* Top related products */}
              <div className="bg-white shadow-md mt-8 ">
                <h2 className="border-l-2  text-[#292929] border-solid border-l-primary py-[15px] px-5 font-medium uppercase font-oswald text-xl border-b border-b-[#eaeaea] ">
                  TOP RATED PRODUCTS
                </h2>
                <div className="px-3 lg:px-6 mt-4">
                  {data?.slice(0, 8).map((product, index) => (
                    <TopRelatedProducts key={index} product={product} />
                  ))}
                </div>
              </div>
            </div>
            {/* all product */}
            <div className=" md:col-span-8 lg:col-span-9 md:order-2 order-1 col-span-full ">
              <div className="bg-white shadow-md">
                {/* Banner slider */}
                {/* <BannerSlider /> */}
                {/* Product lists */}
                <div className="">
                  {/* sorting */}
                  <div className="flex justify-between items-center border-y border-solid border-borderColor py-6 px-5">
                    <div className="flex gap-2 items-center">
                      <div
                        className={`${
                          isGrid
                            ? "text-white bg-primary"
                            : "border border-solid border-borderColor"
                        }  p-3 `}
                        onClick={() => setIsGrid(true)}
                      >
                        <BsFillGrid3X3GapFill />
                      </div>
                      <div
                        className={`${
                          !isGrid
                            ? "text-white bg-primary"
                            : "border border-solid border-borderColor"
                        }  p-3 `}
                        onClick={() => setIsGrid(false)}
                      >
                        <FaList />
                      </div>
                    </div>

                    {/* <div className="md:pr-5">
                    <select
                      name="orderby"
                      aria-label="Shop order"
                      className="border border-solid border-borderColor px-3 md:px-4 py-2 md:py-3 rounded-full outline-0"
                    >
                      <option value="menu_order" selected="selected">
                        Default sorting
                      </option>

                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div> */}
                  </div>
                  <Suspense fallback={<div>Loading...</div>}>
                    {isGrid ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {id ? (
                          filterByPrice?.length > 0 ? (
                            <>
                              {filterByPrice?.map((product, index) => (
                                <ProductCardGrid
                                  key={index}
                                  product={product}
                                />
                              ))}
                            </>
                          ) : (
                            <>
                              {product?.map((product, index) => (
                                <ProductCardGrid
                                  key={index}
                                  product={product}
                                />
                              ))}
                            </>
                          )
                        ) : filterByPrice?.length > 0 ? (
                          filterByPrice?.map((product, index) => (
                            <ProductCardGrid key={index} product={product} />
                          ))
                        ) : (
                          data?.map((product, index) => (
                            <ProductCardGrid key={index} product={product} />
                          ))
                        )}
                      </div>
                    ) : (
                      <div className=" py-4">
                        {filterByPrice?.length > 0
                          ? filterByPrice?.map((product, index) => (
                              <ProductListsView key={index} product={product} />
                            ))
                          : data?.map((product, index) => (
                              <ProductListsView key={index} product={product} />
                            ))}
                      </div>
                    )}
                  </Suspense>
                </div>
              </div>

              {/* paginaion */}
              <div className="text-center ">
                <Pagination
                  currentPage={page + 1} // Pagination component starts from page 1
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <PartnersCarousel />
      <HomeContent></HomeContent>

      {id ? (
        <>
          <DynamicTitle
            metaTitle={categorysById?.metaTitle}
            metaImage={categorysById?.metaImage}
            metaDescription={categorysById?.metaDescription}
            canonicalUrl={categorysById?.canonicalUrl}
          />
        </>
      ) : (
        <DynamicTitle
          metaTitle={seoMetaData?.metaTitle}
          metaImage={seoMetaData?.metaImage}
          metaDescription={seoMetaData?.metaDescription}
          canonicalUrl={seoMetaData?.canonicalUrl}
        />
      )}
    </div>
  );
};

export default Shop;
