import { useEffect, useState } from "react";
import { singleImageUpload } from "../../../../Hooks/ImageUpload";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const AdminUpdateSeoList = () => {
  const { id } = useParams();
  const [metaImage, setMetaImage] = useState("");
  const [seo, setSeo] = useState({});
  const [formData, setFormData] = useState({
    page: "",
    metaTitle: "",
    metaDescription: "",
    canonicalUrl: "",
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
  useEffect(() => {
    const fetchSingleSeo = async () => {
      const { data } = await axios.get(
        `https://apistore.renixlaboratories.com.bd/api/v1/seo/getSeoById/${id}`
      );
      setSeo(data?.data);
      setFormData({
        page: data?.data?.page || "",
        metaTitle: data?.data?.metaTitle || "",
        metaDescription: data?.data?.metaDescription || "",
        canonicalUrl: data?.data?.canonicalUrl || "",
        slug: data?.data?.slug || "",
      });
    };

    fetchSingleSeo();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      page: formData.page,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      canonicalUrl: formData.canonicalUrl,
      metaImage: metaImage,
      slug: formData.slug,
    };

    try {
      const { data: seoData } = await axios.patch(
        `https://apistore.renixlaboratories.com.bd/api/v1/seo/updateSeo/${id}`,
        data
      );
      if (seoData.status === "error") {
        toast.error(seoData.message);
      } else if (seoData.status === "success") {
        toast.success("Seo Updated!");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
      // console.error("Error making POST request:", error.message);
    }
  };

  return (
    <div>
      <div class=" ">
        <h1 class="text-4xl font-bold capitalize text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
          Update SEO
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" shadow-gray-300 px-8 py-10 rounded flex flex-col gap-4 text-left"
      >
        {/* code  */}
        <div className="mb-1  w-full  mr-0 md:mr-2">
          <label class="block mb-2 text-[13px] font-normal text-gray-900 capitalize">
            select page
          </label>
          <select
            onChange={handleChange}
            className="bg-[#F0FDF4] text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 focus:border-none"
            name="page"
            id=""
            defaultValue={seo?.page}
          >
            <option selected={seo?.page === "shop_page"} value="shop_page">
              Shop Page
            </option>
            <option
              selected={seo?.page === "product_details_page"}
              value="product_details_page"
            >
              Product Details Page
            </option>
            <option selected={seo?.page === "cart_page"} value="cart_page">
              Cart Page
            </option>
            <option
              selected={seo?.page === "checkOut_page"}
              value="checkOut_page"
            >
              CheckOut Page
            </option>
            <option
              selected={seo?.page === "traking_order_page"}
              value="traking_order_page"
            >
              Traking Order Page
            </option>
            <option
              selected={seo?.page === "category_page"}
              value="category_page"
            >
              Category Page
            </option>
            <option
              selected={seo?.page === "product_checking_page"}
              value="product_checking_page"
            >
              Product Checking Page
            </option>
            <option
              selected={seo?.page === "wishlist_page"}
              value="wishlist_page"
            >
              WhisList Page
            </option>
            <option
              selected={seo?.page === "sucess_payment_page"}
              value="sucess_payment_page"
            >
              Payment success Page
            </option>
            <option
              selected={seo?.page === "failed_payment_page"}
              value="failed_payment_page"
            >
              Payment Failed Page
            </option>
          </select>
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
            Update SEO Meta
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateSeoList;
