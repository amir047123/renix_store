import React from "react";
import emptyImg from "../../../../Assets/empty.jpg";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import PostHooks from "../../../../Hooks/PostHooks";

const AdminSideBarBanner = () => {
  const [sliders, setSliders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [img, setImg] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/sidebarslider/getSliders`)
      .then((res) => res.json())
      .then((data) => setSliders(data?.data));
  }, [refresh]);
  // console.log(sliders);
  const handleChangeUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    singleImageUpload(formData, setImg);
  };
  const addSliderImage = async () => {
    if (img) {
      await PostHooks(
        "http://localhost:5000/api/v1/sidebarslider/addSliders",
        { sliderImg: img },
        "Your slider image successfully posted"
      );
      setTimeout(() => {
        setRefresh(!refresh);
      }, 2000);
      setImg("");
      // setRefresh(!refresh);
    } else {
      alert("please select a image");
    }
  };

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/api/v1/sidebarslider/deleteSliders/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.status === 200) {
            setRefresh(!refresh);
            Swal.fire("Deleted!", "Your slider has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto py-5">
      <div className="w-fit mb-10">
        <h2 className="text-left text-2xl font-bold">Edit Slider</h2>
        <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
      </div>

      <img
        className="max-w-lg bg-red-200 rounded-lg"
        src={img ? img : emptyImg}
        alt="sliderImg"
      />
      {img && (
        <button
          onClick={addSliderImage}
          className="bg-primary/90 hover:bg-primary rounded-md px-4 py-2 text-white my-5 hover:scale-105 duration-300"
        >
          Save Image
        </button>
      )}

      <div>
        <label className="font-medium text-dark mt-5">
          Primary Image <span className="text-warning">*</span>
        </label>
        <div className=" rounded-lg flex justify-between items-center px-4 py-2 mt-1 border border-gray-400 mb-5">
          <p className="text-sm">Browse Banner File</p>
          <label className="flex items-center justify-center py-2 px-6 bg-primary border-none cursor-pointer rounded-3xl ">
            <p className="font-medium uppercase text-xs text-white">Browse</p>
            <input
              onChange={handleChangeUploadImage}
              className="hidden"
              type={"file"}
              id="single_img"
              required
            />
          </label>
        </div>
      </div>
      <div className="mt-5">
        <div className="w-fit mb-10">
          <h2 className="text-left text-2xl font-bold">All Slider Image</h2>
          <div className="w-[50%] h-[4px] bg-primary rounded-full mt-1"></div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3">
          {sliders?.map((slider) => (
            <div key={slider?._id} slider={slider} className="relative">
              <img
                className="rounded-md opacity-80 hover:opacity-100 transition-opacity duration-500"
                src={slider?.sliderImg}
                alt="sliderImage"
              />
              <button
                onClick={() => handelDelete(slider?._id)}
                className="bg-red-500 p-2 rounded-full absolute bottom-3 right-3"
              >
                <Icon
                  className="text-white text-2xl"
                  icon="mingcute:delete-fill"
                />{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSideBarBanner;
