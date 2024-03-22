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
        const storedData = localStorage.getItem("productsData");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData.page === page && parsedData.size === size) {
            setData(parsedData.data);
            setQuantity(parsedData.quantity);
            setLoading(false);
            return;
          }
        }
        
        const response = await axios.get(
          `https://apistore.renixlaboratories.com.bd/api/v1/product/specific?page=${page}&size=${size}`
        );
        const newData = response.data.data;
        setData(newData);
        localStorage.setItem("productsData", JSON.stringify({ data: newData, page, size, quantity: response.data.total }));
        setQuantity(response.data.total);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [page, size]);

  useEffect(() => {
    // Clear local storage when page or size changes
    localStorage.removeItem("productsData");
  }, [page, size]);

  return { data, quantity, loading, error };
};

export default useLoadProducts;
