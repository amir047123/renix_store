import { useState } from 'react';
import axios from 'axios';
import { server_url } from "../../src/Config/API";

const useMultipleFileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFiles = async (formData, config) => {
    try {
      setLoading(true);
      const response = await axios.post(`${server_url}/upload/multiple-image-upload`, formData, config);
      setUploadedFiles(response.data.imageURLs || []); 
      setLoading(false);
    } catch (error) {
      setError(error.message || 'An error occurred while uploading files');
      setLoading(false);
    }
  };

  const clearUploadedFiles = () => {
    setUploadedFiles([]);
  };

  return { uploadedFiles, error, loading, uploadFiles, clearUploadedFiles };
};

export default useMultipleFileUpload;
