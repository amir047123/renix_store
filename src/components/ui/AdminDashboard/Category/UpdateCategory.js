import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import UpdateHooks from "../../../../Hooks/UpdateHooks";

const UpdateCategory = () => {
  const { id } = useParams();
  const [banner,setBanner]=useState("");
  const [icon, setIcon] = useState("");
  const [metaImage, setMetaImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    banner: "",
    icon: "",
    metaTitle: "",
    metaDescription: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/category/getCategorysById/${id}`).then(
      (res) =>
        res.json().then((data) => {
          setFormData(data?.data);
          setIcon(data?.data?.icon);
          setBanner(data?.data?.banner);
        })
    );
  }, [id]);

  const handelUpdate = async (e) => {
    e.preventDefault();
    const BASE_URL = `http://localhost:5000/api/v1/category/updateCategorys/${id}`;
    const data = { ...formData, metaImage, icon, banner };
    await UpdateHooks(
      BASE_URL,
      // { name: formData?.name, icon, banner },
      data,
      true,
      "Category info Updated"
    );
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const name = event.target.name;
    if (name == "icon") {
      singleImageUpload(formData, setIcon);
    } else {
      singleImageUpload(formData, setBanner);
    }
  };
  const handleChangeMetaImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setMetaImage);
  };
  return (
    <div>
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Update Category
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Update essential Category for health . Act now to secure the latest
          items
        </p>
      </div>
      <form
        onSubmit={handelUpdate}
        className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
      >
        {/* code  */}
        <div className="mb-1  w-full  mr-0 md:mr-2">
          <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
            placeholder="Enter a name"
            required
          />
        </div>

        <div className="mb-1 flex gap-3 items-center w-full">
          <div className="w-full">
            <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
              {" "}
              Icon image
            </label>
            <input
              onChange={handleChangeUploadImage}
              className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4]  focus:outline-none    p-2"
              name="icon"
              type="file"
            />
          </div>
          <img className="w-14 rounded-md" src={icon} alt="product img"></img>
        </div>

        <div className="mb-1 flex gap-3 items-center w-full">
          <div className="w-full">
            <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
              {" "}
              Banner image
            </label>
            <input
              onChange={handleChangeUploadImage}
              className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4]  focus:outline-none    p-2"
              name="banner"
              type="file"
            />
          </div>
          <img className="w-14 rounded-md" src={banner} alt="product img"></img>
        </div>
        {/* Seo meta tags started */}
        <div>
          <h2 className="border-b border-solid border-gray-300 mb-5 pb-3">
            SEO Meta Tags
          </h2>
          <div className="mb-5">
            <label
              className="block mb-2 text-[13px] font-normal text-gray-900 "
              htmlFor=""
            >
              Meta Title
            </label>
            <input
              name="metaTitle"
              value={formData?.metaTitle}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
              type="text"
              placeholder="Meta title"
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-[13px] font-normal text-gray-900 "
              htmlFor=""
            >
              Meta Description
            </label>
            <textarea
              name="metaDescription"
              value={formData?.metaDescription}
              onChange={handleChange}
              rows={7}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 focus:border-blue-500"
              type="text"
              placeholder="Meta description"
            />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-[13px] font-normal text-gray-900 "
              htmlFor=""
            >
              Meta Image
            </label>
            <input
              onChange={handleChangeMetaImage}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
              type="file"
              placeholder="Meta description"
            />
          </div>
        </div>

        <div className="text-center pt-3">
          <button
            className="bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8"
            type="submit"
          >
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
