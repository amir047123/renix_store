import React, { useCallback, useEffect, useState } from "react";
import ProductSlide from "./ProductSlide";
import Rating from "react-rating";
import { IoIosStar } from "react-icons/io";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaMinus,
  FaPinterestP,
  FaPlus,
  FaRegStar,
  FaTwitter,
} from "react-icons/fa6";
import ImageGallery from "react-image-gallery";
import AdditionalInfo from "./AdditionalInfo";
import Reviews from "./Reviews";
import Description from "./Description";
import { useParams, Link, useLocation } from "react-router-dom";
import useGetCartsProduct from "../../../Hooks/useGetCartsProduct";
import RelatedProductCard from "../../shop/RelatedProductCard";
import Loading from "../../../Shared/Loading";
import DynamicTitle from "../../shared/DynamicTitle";
import ProductFAQ from "./ProductFAQ";
import axios from "axios";
import { toast } from "react-toastify";
const ProductDetails = () => {
  const { cartProducts, setCartProducts } = useGetCartsProduct();
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState([]);
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState("index");
  const [allFaqs, setAllFaqs] = useState([]);
  const productQuantity = cartProducts?.find(
    (item) => item?._id === product?._id
  );

  const images =
    product?.images?.map((image) => ({
      original: image,
      thumbnail: image,
    })) || [];

  //

  const handleSelectVariation = (index) => {
    setSelectedVariationIndex(index);
  };

  const fetchUpdatedFaqs = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/productFAQs/getProductFAQById/${product?._id}`
      );
      setAllFaqs(data?.data?.faqs);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      toast.error("Failed to fetch FAQs");
    }
  }, [product?._id]);
  useEffect(() => {
    fetchUpdatedFaqs();
  }, [fetchUpdatedFaqs]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://localhost:5000/api/v1/product/specific/?fieldName=slug&&fieldValue=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data?.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const discountedPrice = (
    product?.onePiecePrice -
    (product?.onePiecePrice * product?.discount) / 100
  ).toFixed(2);



  const selectedVariation = product?.variations[selectedVariationIndex] || {}; // Get the selected
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const discountForVariation = (
    selectedVariation?.price -
    (selectedVariation?.price * product?.discount) / 100
  ).toFixed(2);
  const handleAddToCart = () => {
    const mainVariants = {
      strength: product?.strength,
      price: discountedPrice,
    };
    const selectedVariants = {
      strength: selectedVariation?.strength,
      price: discountForVariation,
    };
    // Retrieve existing cart items from local storage
    let existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      existingCartItems[existingProductIndex].quantity += 1;
      if (count > 1) {
        console.log(count);
      }
    } else {
      // If the product is not already in the cart, add it with quantity 1
      existingCartItems.push({
        ...product,
        quantity: 1,
        discountedPrice,
        variants:
          selectedVariationIndex === "index" ? mainVariants : selectedVariants,
      });
    }
    setCartProducts([...existingCartItems]);

    // Update the cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    // Push data to DataLayer
    window.dataLayer.push({
      event: "add_to_cart",
      product_id: product._id,
      product_name: product.name,
      product_price: product.onePiecePrice,
      product_quantity: productQuantity?.quantity || 1,
    });
  };
  const handleIncreaseCartItem = () => {
    setCount((prev) => {
      const updatedCount = prev + 1;
      // Update quantity in localStorage
      return updatedCount;
    });
    updateQuantityInLocalStorage(true);
  };

  const handleDecreaseCartItem = () => {
    setCount((prev) => {
      if (prev > 1) {
        const updatedCount = prev - 1;

        return updatedCount;
      }
      return prev;
    });
    updateQuantityInLocalStorage(false);
  };
  const updateQuantityInLocalStorage = (increment) => {
    let existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex !== -1) {
      // If the product exists in the cart
      if (increment) {
        existingCartItems[existingProductIndex].quantity += 1;
      } else {
        // Ensure count doesn't go below 1
        if (existingCartItems[existingProductIndex].quantity > 1) {
          existingCartItems[existingProductIndex].quantity -= 1;
        }
      }

      // Update state with updated cart items
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
      setCartProducts([...existingCartItems]);
    }
  };

  // Function to share product on Facebook
  const handleShareFacebook = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on Twitter
  const handleShareTwitter = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on Google Plus (Deprecated)
  const handleShareGooglePlus = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on Pinterest
  const handleSharePinterest = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on LinkedIn
  const handleShareLinkedIn = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };
  // Realated products

  useEffect(() => {
    setLoading(true);
    try {
      fetch(`http://localhost:5000/api/v1/product/getProducts`)
        .then((res) => res.json())
        .then((data) => {
          setRelatedProducts(data?.data);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Push data to dataLayer when product changes
    if (product) {
      window.dataLayer.push({
        event: "view_item",
        product_id: product._id,
        product_name: product.name,
        product_category: product.category,
        product_price: product.onePiecePrice,
        product_discounted_price: discountedPrice,
        product_quantity: productQuantity?.quantity || 1,
      });
    }
  }, [product, discountedPrice, productQuantity]);

  useEffect(() => {
    // Check if the URL contains the FAQ hash fragment

    if (location.hash === "#faq") {
      setActiveTab(4);
      const faqSection = document.getElementById("product_faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth", top: 600 });
      }
    }

    if (location.hash === "#reviews") {
      setActiveTab(3);
    }
  }, [location]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" mt-12 container ">
      <DynamicTitle
        metaTitle={product?.metaTitle}
        metaImage={product?.metaImage}
        metaDescription={product?.metaDescription}
        canonicalUrl={product?.canonicalUrl}
      />
      {/* product details */}
      <div className="flex md:flex-row flex-col bg-white p-5 shadow-custom gap-8">
        <div className="max-w-[600px] xl:w-full md:w-1/2  ">
          {/* <img alt="" src={product?.img} /> */}
          {/* ImageGallery component */}

          <ImageGallery
            showPlayButton={false}
            showBullets={false}
            items={[
              ...images,
              { original: product?.img, thumbnail: product?.img },
            ]}
            autoPlay={false}
            disableSwipe={true}
            slideOnThumbnailOver
            disableThumbnailScroll
            // Close gallery when necessary
          />
        </div>
        <div className="flex-1">
          <h2 className="font-rubic font-medium uppercase text-[34px] text-[#333] my-2">
            {product?.name}
          </h2>
          <p className="inline-block px-3 py-1 capitalize font-openSans text-[#333] mb-3">
            {product?.strength}
          </p>
          <p className="inline-block px-3 py-1 capitalize font-openSans text-[#333] mb-3">
            {product?.genericName}
          </p>
          <p className="inline-block px-3 py-1 capitalize font-openSans text-[#333] mb-3">
            {product?.genericCategory}
          </p>
          <p className="inline-block px-3 py-1 capitalize font-openSans text-[#333] mb-3">
            {product?.category}
          </p>
          <div className="flex items-center gap-5 border-b border-solid border-borderColor pb-3">
            <Rating
              fullSymbol={<IoIosStar className="text-primary" />}
              emptySymbol={<FaRegStar className="text-primary text-center" />}
              initialRating={5}
              readonly
            />
            <span className="font-openSans text-[13px] text-primary">
              (1 customer review)
            </span>
          </div>

          <p className="border border-solid mt-3 border-borderColor inline-block px-3 py-1 capitalize font-openSans text-[#333] mb-3">
            {product?.companyName}
          </p>

          <h2 className="font-openSans text-[32px] text-[#333e48] font-medium py-5">
            <>
              {product?.discount !== 0 && (
                <span className="line-through text-[#808080] mr-3 text-2xl">
                  ৳{" "}
                  {selectedVariationIndex === "index"
                    ? product?.onePiecePrice
                    : selectedVariation.price}
                </span>
              )}
              ৳{" "}
              {selectedVariationIndex === "index"
                ? discountedPrice
                : discountForVariation}
            </>
          </h2>

          {/* Product variations */}
          <div className="flex gap-3 flex-wrap mb-5">
            <button
              className={`text-white rounded-lg px-2 py-1 ${
                selectedVariationIndex === "index"
                  ? "bg-green-500"
                  : "bg-black/80"
              }`}
              onClick={() => handleSelectVariation("index")}
            >
              {product?.strength}
            </button>
            {product?.variations?.map((variation, index) => (
              <button
                key={index}
                className={`text-white rounded-lg px-2 py-1 ${
                  selectedVariationIndex === index
                    ? "bg-green-500"
                    : "bg-black/80"
                }`}
                onClick={() => handleSelectVariation(index)}
              >
                {variation?.strength}
              </button>
            ))}
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="flex w-[150px]  items-center border border-solid border-borderColor rounded-full ">
              <div
                onClick={handleIncreaseCartItem}
                className=" w-[60px] h-[50px] flex justify-center items-center  hover:text-white rounded-full transition-all duration-150 hover:bg-primary cursor-pointer"
              >
                <FaPlus className="" />
              </div>
              <input
                type="text"
                name=""
                id=""
                value={
                  productQuantity?.quantity ? productQuantity?.quantity : count
                }
                className="w-12 text-center border-0 outline-0 font-openSans font-bold text-[#333]"
              />
              <div
                onClick={handleDecreaseCartItem}
                className=" w-[60px] h-[50px] flex justify-center items-center rounded-full transition-all duration-150  hover:bg-primary hover:text-white cursor-pointer"
              >
                <FaMinus />
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="uppercase bg-secondary hover:bg-primary px-6 py-3 rounded-full text-white font-rubic font-medium text-lg transition-all duration-300"
            >
              কার্টে যোগ করুন
            </button>
            <Link
              to={"/checkout"}
              onClick={handleAddToCart}
              className="uppercase bg-secondary text-center hover:bg-primary px-6 py-3 rounded-full text-white font-rubic font-medium text-lg transition-all duration-300"
            >
              অর্ডার করুন
            </Link>
          </div>

          <div className="flex items-center gap-3 my-6">
            <div
              className="border hover:bg-[#3C5B9B] hover:text-white transition-all border-solid border-borderColor rounded-md p-3 cursor-pointer duration-300 inline-block"
              onClick={handleShareFacebook}
            >
              <FaFacebookF />
            </div>
            <div
              className="border hover:text-white hover:bg-[#359BED] border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all duration-300 inline-block"
              onClick={handleShareTwitter}
            >
              <FaTwitter />
            </div>
            <div
              className="border hover:text-white hover:bg-[#E33729] duration-300 border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all inline-block"
              onClick={handleShareGooglePlus}
            >
              <FaGooglePlusG />
            </div>
            <div
              className="border hover:text-white hover:bg-[#cb2027] d border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all duration-300 inline-block"
              onClick={handleSharePinterest}
            >
              <FaPinterestP />
            </div>
            <div
              className="border hover:text-white hover:bg-[#027ba5]  border-solid border-borderColor rounded-md p-3 cursor-pointer transition-all duration-300 inline-block"
              onClick={handleShareLinkedIn}
            >
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      {/* Additional infomation */}

      <div id="product_faq" className="my-10">
        <div className="flex md:flex-row flex-col border-b border-borderColor gap-2">
          <div
            className={`px-5 py-3 rounded-tr-lg rounded-tl-lg  font-rubic font-medium text-sm uppercase ${
              activeTab === 1
                ? "bg-primary text-white "
                : "bg-[#efecec] text-[#292929] hover:bg-white"
            }`}
            onClick={() => handleTabClick(1)}
          >
            <span className="mt-1 inline-block"> Description</span>
          </div>
          <div
            className={`px-5 py-3 rounded-tr-lg rounded-tl-lg  font-rubic font-medium text-sm uppercase ${
              activeTab === 2
                ? "bg-primary text-white "
                : "bg-[#efecec] text-[#292929] hover:bg-white"
            }`}
            onClick={() => handleTabClick(2)}
          >
            <span className="mt-1 inline-block"> Dosage Form</span>
          </div>
          <div
            className={`px-5 py-3 rounded-tr-lg rounded-tl-lg  font-rubic font-medium text-sm uppercase ${
              activeTab === 3
                ? "bg-primary text-white "
                : "bg-[#efecec] text-[#292929] hover:bg-white"
            }`}
            onClick={() => handleTabClick(3)}
          >
            <span className="mt-1 inline-block"> Reviews </span>
          </div>
          <div
            className={`px-5 py-3 rounded-tr-lg rounded-tl-lg  font-rubic font-medium text-sm uppercase ${
              activeTab === 4
                ? "bg-primary text-white "
                : "bg-[#efecec] text-[#292929] hover:bg-white"
            }`}
            onClick={() => handleTabClick(4)}
          >
            <span className="mt-1 inline-block"> FAQ </span>
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 1 && <Description product={product} />}
          {activeTab === 2 && <AdditionalInfo product={product} />}
          {activeTab === 3 && <Reviews product={product} />}
          {activeTab === 4 && (
            <ProductFAQ allFaqs={allFaqs} product={product} />
          )}
        </div>
      </div>
      {/* Related products */}
      <div className="bg-white p-5 shadow-custom">
        <h2 className="font-oswald font-bold text-[#292929] uppercase text-[26px] py-5 border-b border-borderColor">
          RELATED PRODUCTS
        </h2>
        <div className="grid gird-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {relatedProducts?.slice(0, 5)?.map((product) => (
            <RelatedProductCard key={product} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
