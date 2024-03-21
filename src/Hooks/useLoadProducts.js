import { useState, useEffect } from "react";
import axios from "axios";

const useLoadProducts = (page, size) => {
  const [data, setData] = useState(() => {
    // Load data from local storage on initial render
    const storedData = localStorage.getItem("productsData");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/product/specific?page=${page}&size=${size}`
        );
        const newData = response.data.data;

        // Check if the fetched data is different from the existing data
        if (!arraysAreEqual(data, newData)) {
          // If different, update the local storage and state
          setData(newData);
          localStorage.setItem("productsData", JSON.stringify(newData));
        }

        setQuantity(response.data.total);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Setup interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, [page, size, data]); // Include data in the dependency array to trigger the effect on data change

  // Utility function to check if two arrays are equal
  const arraysAreEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };

  return { data, quantity, loading, error };
};

export default useLoadProducts;
