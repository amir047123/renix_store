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

        // Update the local storage if the fetched data is different
        if (!arraysAreEqual(data, newData)) {
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

    // Cleanup function to cancel the request (if needed)
    return () => {
      // cleanup logic here
    };
  }, [page, size]);

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
