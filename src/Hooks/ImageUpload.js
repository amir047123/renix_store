import { server_url } from "../Config/API";

export const singleImageUpload = async (formData, setMyImageUrl) => {
  const imageBaseUrl = `${server_url}/upload/single-image-upload`;

  fetch(imageBaseUrl, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        setMyImageUrl(data.url);
      }
    });
};
export const multipleImageUpload = async (formData, setMyImageUrl) => {
  const imageBaseUrl = `${server_url}/upload/multiple-image-upload`;

  fetch(imageBaseUrl, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        setMyImageUrl(data.imageURLs);
      }
    });
};
