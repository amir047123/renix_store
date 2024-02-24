import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthUser from "../../../Hooks/authUser";

const Reviews = ({ product }) => {
  const {userInfo}=AuthUser()
  const productId = product?._id;
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    rating: 0,
    review: "",
    name: "",
    email: "",
    productId: productId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetch(
        `https://serverrenixstore.niroghealthplus.com/api/v1/reviews/specific?fieldName=productId&fieldValue=${productId}`
      );
      const res = await response.json();
      setReviews(res.data);
    };
    getReviews();
  }, [productId]);

  const handleSubmit = async () => {
    try {
      // Check if user is authenticated
      if (!userInfo) {
        // If user is not authenticated, show error message
        toast.error("You need to be logged in to submit a review");
        return;
      }
  
      const response = await fetch(
        "https://serverrenixstore.niroghealthplus.com/api/v1/reviews/addReviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to submit review");
      }
  
      // Reset form data after successful submission
      setFormData({
        rating: 0,
        review: "",
        name: "",
        email: "",
        productId: productId,
      });
  
      toast.success("Review submitted successfully");
  
      // Refetch reviews data
      const getReviews = async () => {
        const response = await fetch(
          `https://serverrenixstore.niroghealthplus.com/api/v1/reviews/specific?fieldName=productId&fieldValue=${productId}`
        );
        const res = await response.json();
        setReviews(res.data);
      };
      getReviews();
    } catch (error) {
      console.error("Error submitting review:", error.message);
      toast.error("Failed to submit review");
    }
  };
  

  return (
    <div className="bg-white p-6 shadow-custom">
      
      <div>
      <p className="font-rubic text-xl text-[#333] font-medium py-6">
          {reviews.length} review{reviews.length !== 1 ? "s" : ""} {product?.name}
        </p>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex gap-4 border-b border-solid border-borderColor pb-6 mb-6"
          >
            <div className="w-[80px] ">
              <img
                className="rounded-full w-full object-cover"
                src="/assets/products/user.png"
                alt="userimage"
                srcset=""
              />
            </div>
            <div className="flex-1">
              <Rating
                fullSymbol={<IoIosStar className="text-primary" />}
                emptySymbol={
                  <FaRegStar className="text-primary text-center" />
                }
                initialRating={review.rating}
                readonly
              />
              <p className="text-[#333] py-2">
                <span className="font-bold">{review.name}</span> –{" "}
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
              <p className="text-[#333]">{review.review}</p>
            </div>
          </div>
        ))}
        <p className="text-black text-lg font-bold border-b border-solid border-borderColor pb-6 mb-6 ">
          Add a review
        </p>
        <p className="text-[#333] mb-6 text-sm md:text-base ">
          <span>Your email address will not be published.</span>{" "}
          <span className="md:inline block md:mt-0 mt-3">
            Required fields are marked{" "}
            <span className="text-secondary">*</span>
          </span>{" "}
        </p>
        <div>
          <p className="text-[#333] text-sm mb-6 ">
            Your rating
            <span className="text-secondary">*</span>
          </p>
          <div>
            <Rating
              onChange={handleRatingChange}
              fullSymbol={<IoIosStar className="text-black" />}
              emptySymbol={
                <FaRegStar className="text-black text-center" />
              }
              fractions={2}
            />
          </div>
        </div>
        <div className="space-y-3">
          <div>
            {" "}
            <p className="text-[#333] ">
              Your review
              <span className="text-secondary">*</span>
            </p>
            <textarea
              className="border border-solid border-borderColor rounded-md w-full outline-0 h-[90px] px-6 py-3"
              name="review"
              value={formData.review}
              onChange={handleChange}
              cols="45"
              rows="8"
            ></textarea>
          </div>
          <div>
            <p className="text-[#333] ">
              Name
              <span className="text-secondary">*</span>
            </p>
            <input
              className="border border-solid border-borderColor rounded-md w-full outline-0 px-6 py-3"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-[#333] ">
              Email
              <span className="text-secondary">*</span>
            </p>
            <input
              className="border border-solid border-borderColor rounded-md w-full outline-0 px-6 py-3"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="px-9 py-3 uppercase bg-primary hover:bg-secondary transition-all duration-200 rounded-full font-rubic font-medium text-sm text-white inline-block mt-5"
          onClick={handleSubmit}
        >
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
