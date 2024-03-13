import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import DynamicTitle from "../components/shared/DynamicTitle";
import useGetSeo from "../Hooks/useGetSeo";
import SharedLoading from "../shared/SharedLoading";

const ProductChecking = () => {
  const seoMetaData = useGetSeo("product_checking_page");
  const [trackingId, setTrackingId] = useState("");
  const [myOrder, setMyOrder] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!trackingId) return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/product/specific?fieldName=productCode&fieldValue=${trackingId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch order data");
      }
      const res = await response.json();
      setMyOrder(res.data);

      // Push data to the dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "productChecked",
        products: res.data.map((order) => ({
          id: order._id,
          name: order.name,
          price: order.onePiecePrice,
          // Add more product attributes as needed
        })),
      });

      setSearched(true);
    } catch (error) {
      console.error("Error fetching order data:", error.message);
    } finally {
      setLoading(false); // Set loading to false after fetch request is completed
    }
  };

  const handleInputChange = (event) => {
    setTrackingId(event.target.value);
  };

  return (
    <div className="mt-40 mb-10">
      <DynamicTitle
        metaTitle={seoMetaData?.metaTitle}
        metaImage={seoMetaData?.metaImage}
        metaDescription={seoMetaData?.metaDescription}
        canonicalUrl={seoMetaData?.canonicalUrl}

      />
      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <div className="text-center">
          <h1 className="font-bold uppercase text-3xl text-primary">
            Check Your Product
          </h1>
          <p className="">
            Check your product details in one place with real-time updates.
            Check your your product by code.
          </p>
        </div>

        <div className="mt-8 w-full max-w-sm">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={handleInputChange}
          />
          <button
            className="w-full bg-primary text-white px-4 py-2 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {loading && <SharedLoading />}

        {searched && myOrder.length > 0 && !loading && (
          <div className="mt-8">
            <ul>
              {myOrder.map((order) => (
                <li key={order._id}>
                  <p className="text-xs font-openSans mb-3 text-[#333]">
                    Product <mark>{order?.tracking_id}</mark> Name is{" "}
                    <mark>
                      {" "}
                      {order.date
                        ? new Date(order.date).toLocaleDateString()
                        : ""}
                    </mark>{" "}
                    <mark>{order?.name}</mark>.
                    <div className="bg-white group pb-6 relative border-r border-b last:border-r-0  mt-5  w-52 border-solid border-borderColor">
                      <div className="text-center">
                        <div className="relative overflow-hidden">
                          <img
                            className="mx-auto group-hover:scale-125 transition-all duration-200"
                            src={order?.img}
                            alt=""
                          />
                        </div>
                        <h2 className="font-rubic text-[#292929] font-medium px-6 lg:px-0">
                          <Link to={`/productDetails/${order?._id}`}>
                            {order?.name}
                          </Link>
                        </h2>
                        <Rating
                          fullSymbol={<IoIosStar className="text-primary" />}
                          emptySymbol={
                            <FaRegStar className="text-primary text-center" />
                          }
                          initialRating={5}
                          readonly
                        />
                        <p className="font-medium font-rubic text-sm">
                          <span className="">৳ {order?.onePiecePrice}</span>{" "}
                        </p>
                      </div>
                    </div>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searched && myOrder.length === 0 && !loading && (
          <p>No order found for the provided tracking ID.</p>
        )}
      </div>
    </div>
  );
};

export default ProductChecking;
