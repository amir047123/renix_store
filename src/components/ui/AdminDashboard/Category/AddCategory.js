import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
const AddCategory = () => {
  const [banner, setBanner] = useState("");
  const [icon, setIcon] = useState("");
  const [metaImage, setMetaImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    banner: "",
    icon: "",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl:"",
    slug: "",
  });
  const handleChangeMetaImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setMetaImage);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: formData.name,
      icon: icon,
      banner: banner,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      canonicalUrl: formData.canonicalUrl,
      metaImage: metaImage,
      slug: formData.slug,
    };
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/category/addCategorys",
        data
      );
      toast.success("Category posted!");
    } catch (error) {
      toast.error(error.message || "An error occurred");
      console.error("Error making POST request:", error);
    }
  };
  

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const name = event.target.name;
    if (name === "icon") {
      singleImageUpload(formData, setIcon);
    } else {
      singleImageUpload(formData, setBanner);
    }
  };

  return (
    <div>
      <div class=" ">
        <h1 class="text-2xl  text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Add New Category
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
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
          <img className="w-14 rounded-md" src={icon} alt="Icon"></img>
        </div>

        <div className="mb-1 flex gap-3 items-center w-full">
          <div className="w-full">
            <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
              {" "}
              Banner image
            </label>
            <input
              onChange={handleChangeUploadImage}
              className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4] focus:outline-none p-2"
              name="banner"
              type="file"
            />
          </div>
          <img className="w-14 rounded-md" src={banner} alt="banner"></img>
        </div>
        {/* Seo meta tags started */}
        <div>
          <h2 className="border-b border-solid border-gray-300 mb-5 pb-3">
          Search Engine Optimization
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
          <div className="mb-1 w-full mr-0 md:mr-2">
          <label className="block mb-2 text-[13px] font-normal text-gray-900">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            value={formData?.slug}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 focus:border-none"
            placeholder="Enter a slug"
           
          />
        </div>

          <div className="mb-5">
            <label
              className="block mb-2 text-[13px] font-normal text-gray-900 "
              htmlFor=""
            >
             Canonical Url
            </label>
            <input
              name="canonicalUrl"
              value={formData?.canonicalUrl}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
              type="text"
              placeholder="Canonical Url"
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
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;