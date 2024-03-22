import { useState, useEffect } from "react";
import axios from "axios";

const useLoadProducts = (page, size) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch cached data from local storage
        const cachedData = JSON.parse(localStorage.getItem("productsData")) || [];

        // Fetch data from the server only if no cached data exists or if page or size changes
        if (cachedData.length === 0 || cachedData.page !== page || cachedData.size !== size) {
          const response = await axios.get(
            `http://localhost:5000/api/v1/product/specific?page=${page}&size=${size}`
          );
          const newData = response.data.data;
          setData(newData);
          localStorage.setItem("productsData", JSON.stringify({ data: newData, page, size }));
          setQuantity(response.data.total);
        } else {
          // Use cached data if it's available and up-to-date
          setData(cachedData.data);
          setQuantity(cachedData.quantity);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request (if needed)
    return () => {
      // cleanup logic here
    };
  }, [page, size]);

  return { data, quantity, loading, error };
};

export default useLoadProducts;
