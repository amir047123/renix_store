import React, { useEffect, useState } from "react";
import DynamicTitle from "../components/shared/DynamicTitle";
import useGetSeo from "../Hooks/useGetSeo";
import Loading from "../Shared/Loading";

const TrackingOrder = () => {
  const seoMetaData = useGetSeo("traking_order_page");
  const [trackingId, setTrackingId] = useState("");
  const [myOrder, setMyOrder] = useState([]);
  const [searched, setSearched] = useState(false); // Track whether search button is clicked
  const [loading, setLoading] = useState(false); // Track loading state

  useEffect(() => {
    if (!searched || !trackingId) return; // No need to fetch if search button is not clicked or trackingId is empty

    const getMyOrder = async () => {
      setLoading(true); // Set loading to true before making the fetch request
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/order/specific?fieldName=tracking_id&fieldValue=${trackingId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch order data");
        }
        const res = await response.json();
        setMyOrder(res.data);
      } catch (error) {
        console.error("Error fetching order data:", error.message);
      } finally {
        setLoading(false); // Set loading to false after fetch request is completed
      }
    };

    getMyOrder();
    
    // Push data to DataLayer when search button is clicked
    window.dataLayer.push({
      event: "search_order",
      tracking_id: trackingId,
    });
  }, [searched, trackingId]);

  const handleInputChange = (event) => {
    setTrackingId(event.target.value);
  };

  const handleSearch = () => {
    setSearched(true); // Set searched to true when search button is clicked
  };

  return (
    <div className=" mt-40 mb-10">
      <DynamicTitle
        metaTitle={seoMetaData?.metaTitle}
        metaImage={seoMetaData?.metaImage}
        metaDescription={seoMetaData?.metaDescription}
        canonicalUrl={seoMetaData?.canonicalUrl}

      />
      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <div className="text-center">
          <h1 className="font-bold uppercase text-3xl text-primary">
            Track your Order
          </h1>
          <p className="">
            Track your Order details in one place with real-time updates. Track
            your product by Tracking Number.
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

        {loading && <Loading />}

        {searched && myOrder.length > 0 && !loading && (
          <div className="mt-8">
            <ul>
              {myOrder.map((order) => (
                <li key={order._id}>
                  <p className="text-xs font-openSans mb-3 text-[#333]">
                    Order <mark>{order?.tracking_id}</mark> was placed on{" "}
                    <mark>
                      {" "}
                      {order.date
                        ? new Date(order.date).toLocaleDateString()
                        : ""}
                    </mark>{" "}
                    and is currently <mark>{order?.status}</mark>.
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

export default TrackingOrder;
