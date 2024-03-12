// DataLayer.js
import { useEffect } from 'react';

const DataLayer = ({ data }) => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }, [data]);

  return null;
};

export default DataLayer;
