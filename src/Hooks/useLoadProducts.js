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
        const response = await axios.get(`http://localhost:5000/api/v1/product/specific?page=${page}&size=${size}`);
        setData(response.data.data);
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

  return { data, quantity, loading, error };
};

export default useLoadProducts;
