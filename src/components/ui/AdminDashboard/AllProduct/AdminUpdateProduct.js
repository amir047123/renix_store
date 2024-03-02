import React from "react";
import { useState } from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import {
  multipleImageUpload,
  singleImageUpload,
} from "../../../../Hooks/ImageUpload";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import { toast } from "react-toastify";

const GenericCategories = ["AllopathicL", "Herbal", "Airobotics", "Unani"];

const AdminUpdateProduct = () => {
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [dosageForm, setDosageForm] = useState("");
  const editor = useRef(null);
  const [description, setDescription] = useState("");
  const editor2 = useRef(null);
  const [category, setCategory] = useState([]);
  const [metaImage, setMetaImage] = useState("");
  const [tags, setTags] = useState([""]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    medicineType: "",
    genericCategory: "",
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
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/category/getCategorys")
      .then((res) => res.json())
      .then((data) => setCategory(data?.data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/product/getProductsById/${id}`).then(
      (res) =>
        res.json().then((data) => {
          setFormData(data?.data);
          setDosageForm(data?.data?.dosageForm);
          setDescription(data?.data?.description);
          setImg(data?.data?.img);
          setTags(data?.data?.tags);
          setMetaImage(data?.data?.metaImage);
          console.log(data.data);
        })
    );
  }, [id]);

  // set data in state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const data = {
    ...formData,
    description,
    dosageForm,
    img,
    metaImage,
    tags,
    images: selectedFiles,
  };

  const handelUpdate = async (e) => {
    e.preventDefault();
    const BASE_URL = `http://localhost:5000/api/v1/product/updateProducts/${id}`;

    await UpdateHooks(BASE_URL, data, true, "Product info Updated");
    toast.success("Product updated successfully");
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
      <div class=" ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Update Product
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Update essential product for health . Act now to secure the latest
          items
        </p>
      </div>
      <form
        onSubmit={handelUpdate}
        className="shadow-lg shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
        // autocomplete="off"
      >
        <div className="md:flex items-center">
          {/* medicine name */}

          <div className="mb-1  w-full  mr-0 md:mr-2">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Medicine Name
            </label>
            <input
              type="text"
              name="name"
              value={formData?.name}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
              placeholder="Medicine Name"
            />
          </div>
        </div>

        {/* <div className="mb-1  w-full ">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Bottle
            </option>
            <option
              selected={formData?.medicineType == "tablet"}
              value="tablet"
            >
           
                <option selected={formData?.medicineType=="bottle"}  value="bottle" >
                  Bottle
                </option>
                <option selected={formData?.medicineType=="tablet"}  value="tablet" >
                  Tablet
                </option>
           
            </select>
          </div> */}

        {/* price  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mb-1  w-full mr-0 md:mr-2">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              One Pieces
            </label>
            <input
              type="number"
              name="onePiecePrice"
              value={formData?.onePiecePrice}
              onChange={handleChange}
              required
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
              placeholder="One pices price"
            />
          </div>

          {/* {
            formData?.medicineType==="tablet"&&<><div className="mb-1  w-full mr-0 md:mr-2">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              One Strip
            </label>
            <input
              type="number"
              name="oneStrip"
              value={formData?.oneStrip}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
              placeholder="Number of pieces medicin one strip"
            />
          </div>

              <div className="mb-1  w-full mr-0 md:mr-2">
                <label
                  for="repeat-password"
                  class="block mb-2 text-[13px] font-normal text-gray-900 "
                >
                  Box
                </label>
                <input
                  type="number"
                  min="0"
                  name="oneBox"
                  value={formData?.oneBox}
                  onChange={handleChange}
                  className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
                  placeholder="Number of strip medicin one box"
                />
              </div>

          <div className="mb-1  w-full mr-0 md:mr-2">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
            >
              Cartoon
            </label>
            <input
              type="number"
              min="0"
              name="oneCartoon"
              value={formData?.oneCartoon}
              onChange={handleChange}
              className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
              placeholder="Number of strip medicin one cartoon"
            />
          </div>
          </>
          } */}
        </div>

        {/* price end  */}

        {/* image start  */}

        <div className="mb-1 flex gap-3 items-center w-full">
          <div className="w-full">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
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
          <img className="w-14 rounded-md" src={img} alt="product img"></img>
        </div>
        {/* array images start  */}

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
              class="block mb-2 text-[13px] font-normal text-gray-900 "
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
                <option
                  selected={cat == data?.genericCategory}
                  key={index}
                  value={cat}
                >
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-1  w-full md:w-[50%] mr-0 md:mr-2">
            <label
              for="repeat-password"
              class="block mb-2 text-[13px] font-normal text-gray-900 "
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
          <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
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
              <option
                selected={cat?.name == data?.category}
                key={cat?._id}
                cat={cat}
                value={cat?.name}
              >
                {cat?.name}
              </option>
            ))}
          </select>
        </div>

        {/* strength start  */}
        <div className="mb-1">
          <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
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
            class="block mb-2 text-[13px] font-normal text-gray-900 "
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
            class="block mb-2 text-[13px] font-normal text-gray-900 "
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
            class="block mb-2 text-[13px] font-normal text-gray-900 "
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
          <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
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
          <label class="block mb-2 text-[13px] font-normal text-gray-900 ">
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
            <div className="mb-1 flex gap-3 items-center w-full">
              <input
                onChange={handleChangeMetaImage}
                className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 focus:border-blue-500"
                type="file"
                placeholder="Meta description"
              />
              <img className="w-14 rounded-md" src={metaImage} alt="meta img" />
            </div>
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
                  {/* {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveTagField(index)}
                      className="px-2 py-1 rounded-lg bg-red-500 text-white text-xs"
                    >
                      Remove
                    </button>
                  )} */}
                </div>
              </div>
            ))}

            {/* <div className="mb-1">
              <button
                type="button"
                onClick={handleAddTagField}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mr-2"
              >
                Add Tag Field
              </button>
            </div> */}
          </div>
        </div>
        <div className="text-center pt-3">
          <button
            className="bg-primary hover:bg-lightPrimary text-white  py-2 rounded-lg text-lg w-fit px-8"
            type="submit"
          >
            Update Product !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateProduct;
