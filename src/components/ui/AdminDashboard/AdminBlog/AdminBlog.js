import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import JoditEditor from "jodit-react";
import moment from "moment";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import UpdateHooks from "../../../../Hooks/UpdateHooks";
import PostHooks from "../../../../Hooks/PostHooks";

const AdminBlog = () => {
  const editor = useRef(null);
  const { id } = useParams();
  const [img, setImg] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // load data
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/homeContents/getHomeContentById/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data?.data));
  }, [id]);

  // update and post data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData?._id) {
        await UpdateHooks(
          `http://localhost:5000/api/v1/homeContents/updateHomeContents/${formData?._id}`,
          { ...formData, img: img ? img : formData?.img }
        );
        toast.success(`Blog section Updated !`);
      } else {
        await PostHooks(
          `http://localhost:5000/api/v1/homeContents/addHomeContents`,
          { ...formData,  date: moment().format("MMM Do YY") },
          `Blog data posted`
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // set data in state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    singleImageUpload(formData, setImg);
  };

  return (
    <div className="bg-white">
      <div className="w-fit text-xl font-semibold mb-5">
        <h1>Update Home Content Section</h1>
        <div className="h-1 mt-1 bg-secondary w-[40%]"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-6 rounded shadow-md w-full mx-auto"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Title:
          </label>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={formData?.title}
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">
            Description
          </label>
          <JoditEditor
            ref={editor}
            value={formData?.description}
            onChange={(newContent) => {
              setFormData({
                ...formData,
                description: newContent,
              });
            }}
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 hover:scale-105 duration-300"
          >
            Update  !
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminBlog;
