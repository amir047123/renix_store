import { FaList } from "react-icons/fa6";
import { categoryData } from "../../utils/categoryData";
import BannerSlider from "./BannerSlider";
import CategroyItems from "./CategroyItems";
import ProductCaousel from "./ProductCaousel";
import TopRelatedProducts from "./TopRelatedProducts";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import ProductCardGrid from "./ProductCardGrid";
import { useEffect, useState } from "react";
import ProductListsView from "./ProductListsView";
import Loading from "../../shared/Loading";

const Shop = () => {
  const allCategory = categoryData;
  const [isGrid, setIsGrid] = useState(true);
  let arr = [1, 2, 3, 4, 5, 6];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    try {
      fetch(
        `http://localhost:5000/api/v1/product/getProducts`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data?.data);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      // return <div>{err}</div>;
    }
  }, []);
 if (loading) {
    return <Loading />;
  }
  return (
    <section className="mt-8">
      <div className="container sm:px-5 2xl:px-0  ">
        <div className="grid grid-cols-12 gap-6">
          {/* left side content */}
          <div className=" col-span-full md:col-span-4 lg:col-span-3 md:order-1 order-2 ">
            {/* product filter */}

            <div className="bg-white shadow-md">
              <h2 className="border-l-2 text-[#292929] border-solid border-l-primary py-[15px] px-5 font-medium uppercase font-oswald text-xl border-b border-b-[#eaeaea] ">
                FILTER BY PRICE
              </h2>
              <input type="range" />
            </div>
            {/* Product Category */}
            <div className="bg-white shadow-md mt-8 ">
              <h2 className="border-l-2  text-[#292929] border-solid border-l-primary py-[15px] px-5 font-medium uppercase font-oswald text-xl border-b border-b-[#eaeaea] ">
                PRODUCT CATEGORIES
              </h2>
              {allCategory.map((category, index) => (
                <CategroyItems key={index} category={category} />
              ))}
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
  {data?.slice(0, 10).map((product, index) => (
    <TopRelatedProducts key={index} product={product} />
  ))}
</div>

            </div>
          </div>
          {/* all product */}
          <div className=" md:col-span-8 lg:col-span-9 md:order-2 order-1 col-span-full bg-white shadow-md">
            {/* Banner slider */}
            <BannerSlider />
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

                <div className="md:pr-5">
                  <select
                    name="orderby"
                    aria-label="Shop order"
                    className="border border-solid border-borderColor px-3 md:px-4 py-2 md:py-3 rounded-full outline-0"
                  >
                    <option value="menu_order" selected="selected">
                      Default sorting
                    </option>
                    <option value="popularity">Sort by popularity</option>
                    <option value="rating">Sort by average rating</option>
                    <option value="date">Sort by latest</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="price-desc">
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
              </div>

              {isGrid ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  {data?.map((product, index) => (
                    <ProductCardGrid key={index} product={product} />
                  ))}
                </div>
              ) : (
                <div className=" py-4">
                  {data?.map((product, index) => (
                    <ProductListsView key={index} product={product}/>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
