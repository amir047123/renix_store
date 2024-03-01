import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetSeo = (pageName) => {
  const [getSeo, setGetSeo] = useState(null);
  useEffect(() => {
    const fetchSeo = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/seo/specific?fieldName=page&fieldValue=${pageName}`
      );
      setGetSeo(data?.data[0]);
      console.log(data?.data[0]);
    };

    fetchSeo();
  }, [pageName]);

  return getSeo;
};

export default useGetSeo;
