import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  multipleImageUpload,
  singleImageUpload,
} from "../../../../Hooks/ImageUpload";

const GenericCategories = ["Allopathic", "Herbal", "Airobotics", "Unani"];

const AddProducts = () => {
  const [img, setImg] = useState("");
  const [metaImage, setMetaImage] = useState("");
  const [dosageForm, setDosageForm] = useState("");
  const editor = useRef(null);
  const [description, setDescription] = useState("");
  const editor2 = useRef(null);
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([""]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [productCode, setProductCode] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    genericCategory: "",
    medicineType: "tablet",
    genericName: "",
    category: "",
    strength: "",
    discount: 0,
    stock: 0,
    companyName: "",
    oneCartoon: 0,
    oneBox: 0,
    oneStrip: 0,
    onePiecePrice: 0,
    canonicalUrl: "",
    metaTitle: "",
    metaDescription: "",
    slug: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/category/getCategorys")
      .then((res) => res.json())
      .then((data) => setCategory(data?.data));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData, 54);
  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const data = {
    ...formData,
    description,
    dosageForm,
    img,
    tags,
    productCode,
    metaImage,
    images: selectedFiles,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/product/addProducts",
        data
      );
      toast.success("Medicine data posted!");
      setFormData({
        name: "",
        genericCategory: "",
        medicineType: "tablet",
        genericName: "",
        category: "",
        strength: "",
        discount: 0,
        stock: 0,
        companyName: "",
        oneCartoon: 0,
        oneBox: 0,
        oneStrip: 0,
        onePiecePrice: 0,
        canonicalUrl: "",
        metaTitle: "",
        metaDescription: "",
        slug: "",
      });
      setTags([""]);
      setProductCode("");
      console.log(response, "response");
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImg);
  };
  const handleChangeMetaImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setMetaImage);
  };

  const handleTagsChange = (index, e) => {
    const newTags = [...tags];
    newTags[index] = e.target.value;
    setTags(newTags);
  };

  const handleAddTagField = () => {
    setTags([...tags, ""]);
  };

  const handleRemoveTagField = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };
  // uplaod image for product carousel
  const handleAdditionalImageUpload = (event) => {
    const files = event.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }
    multipleImageUpload(formData, setSelectedFiles);
  };
  return (
    <div>
      <div className=" ">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Add Product
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
        // autocomplete="off"
      >
        <div className="md:flex items-center">
          {/* medicine name */}

          <div className="mb-1  w-full  mr-0 md:mr-2">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Medicine Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData?.name}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
              placeholder="Medicine Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-1  w-full mr-0 md:mr-2">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Price
            </label>
            <input
              type="number"
              name="onePiecePrice"
              value={formData?.onePiecePrice}
              onChange={handleChange}
              required
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
              placeholder="Enter Price"
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="product-code"
              className="block mb-2 text-[13px] font-normal text-gray-900"
            >
              Product Code
            </label>
            <input
              type="text"
              id="product-code"
              name="productCode"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
              placeholder="Enter Product Code"
            />
          </div>
        </div>

        {/* price end  */}

        {/* image start  */}

        <div className="mb-1">
          <label
            for="repeat-password"
            className="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            {" "}
            Image
          </label>
          <input
            onChange={handleChangeUploadImage}
            className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4]  focus:outline-none    p-2"
            id="file_input"
            type="file"
          />
        </div>
        {/* image start  */}

        <div className="mb-1">
          <label
            for="repeat-password"
            className="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            {" "}
            Images
          </label>
          <input
            onChange={handleAdditionalImageUpload}
            className="block w-full text-sm text-gray-900  rounded-lg cursor-pointer bg-[#F0FDF4]  focus:outline-none    p-2"
            id="file_input"
            type="file"
            multiple
          />
        </div>

        <div className="md:flex items-center">
          {/* generic catagory */}
          <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Generic Category
            </label>
            <select
              name="genericCategory"
              value={formData.genericCategory}
              onChange={handleChange} // Add onChange event handler
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
            >
              <option value="" disabled selected>
                Choose a generic category
              </option>

              {GenericCategories?.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
            <label
              for="repeat-password"
              className="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Generic Name
            </label>
            <input
              type="text"
              name="genericName"
              value={formData.genericName}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
              placeholder="Medicine generic Name"
            />
          </div>
        </div>

        {/* generic end  */}

        {/* general catagory start  */}

        <div className="mb-1  w-full  mr-0 md:mr-2">
          <label className="block mb-2 text-[13px] font-normal text-gray-900 ">
            Category
          </label>
          <select
            onChange={handleChange}
            name="category"
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
          >
            <option value="" disabled selected>
              Choose a category
            </option>

            {category?.map((cat) => (
              <option key={cat?._id} cat={cat} value={cat?.name}>
                {cat?.name}
              </option>
            ))}
          </select>
        </div>

        {/* strength start  */}
        <div className="mb-1">
          <label className="block mb-2 text-[13px] font-normal text-gray-900 ">
            {" "}
            Strength
          </label>
          <input
            type="text"
            name="strength"
            value={formData?.strength}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
            placeholder="Medicine strength"
          />
        </div>

        {/* company name start */}

        <div className="mb-1">
          <label
            for="supplier name"
            className="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            {" "}
            Company name
          </label>
          <input
            name="companyName"
            value={formData?.companyName}
            onChange={handleChange}
            type="text"
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
            placeholder="supplier name"
          />
        </div>

        {/* company name end  */}

        {/* dosage from start */}
        <div className="mb-1">
          <label
            for="repeat-password"
            className="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            Dosage From
          </label>

          <JoditEditor
            ref={editor2}
            value={dosageForm}
            onChange={(data) => setDosageForm(data)}
          />
        </div>

        {/* dosage from end  */}

        {/* medicine description */}
        <div className="mb-1">
          <label
            for="repeat-password"
            className="block mb-2 text-[13px] font-normal text-gray-900 "
          >
            Medicine description
          </label>

          <JoditEditor
            ref={editor}
            value={description}
            onChange={(newContent) => setDescription(newContent)}
          />
        </div>

        {/* medicine description end  */}

        {/* medicine stock */}
        <div className="mb-1">
          <label className="block mb-2 text-[13px] font-normal text-gray-900 ">
            {" "}
            Stock
          </label>
          <input
            type="text"
            name="stock"
            value={formData?.stock}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
            placeholder="Medicine Stock"
          />
        </div>
        <div className="mb-1">
          <label className="block mb-2 text-[13px] font-normal text-gray-900 ">
            {" "}
            Discount (%)
          </label>
          <input
            type="text"
            name="discount"
            value={formData?.discount}
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500"
            placeholder="Medicine Stock"
          />
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
          <div className="mb-5 w-full mr-0 md:mr-2">
            <label className="block mb-2 text-[13px] font-normal text-gray-900">
              Slug (unique)
            </label>
            <input
              type="text"
              name="slug"
              value={formData?.slug}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 focus:border-none"
              placeholder="Enter a slug"
              required
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

          <div className="mb-5">
            {/* Canonical  */}

            <label
              htmlFor="canonical-url"
              className="block mb-2 text-[13px] font-normal text-gray-900"
            >
              Canonical URL
            </label>
            <input
              type="text"
              id="canonical-url"
              name="canonicalUrl"
              value={formData.canonicalUrl}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
              placeholder="Enter Canonical URL"
            />
          </div>
          <div className="mb-5">
            {tags.map((tag, index) => (
              <div key={index} className="mb-1">
                <label
                  htmlFor={`tags-${index}`}
                  className="block mb-2 text-[13px] font-normal text-gray-900 "
                >
                  Tags
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id={`tags-${index}`}
                    name={`tags-${index}`}
                    value={tag}
                    onChange={(e) => handleTagsChange(index, e)}
                    className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5    focus:border-blue-500 mr-2"
                    placeholder="Enter tags"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTagField(index)}
                      className="px-2 py-1 rounded-lg bg-red-500 text-white text-xs"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="mb-1">
              <button
                type="button"
                onClick={handleAddTagField}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mr-2"
              >
                Add Tag Field
              </button>
            </div>
          </div>
        </div>

        {/* Seo meta tags ended */}
        <div className="text-center pt-3">
          <button
            className="bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
