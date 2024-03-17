import { useEffect } from "react";

const DataLayer = ({ data }) => {
  useEffect(() => {
    // Check if the data layer is empty before pushing the data
    if (window.dataLayer && window.dataLayer.length === 0) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(data);
    }
  }, [data]);
  
  return null;
};

export default DataLayer;
