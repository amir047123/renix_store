import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart, FaHeart, FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import useGetCartsProduct from "../../Hooks/useGetCartsProduct";
import { toast } from "react-toastify";

const ProductListsView = ({ product }) => {
  const { cartProducts, setCartProducts } = useGetCartsProduct();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const response = await fetch(
        `https://apistore.renixlaboratories.com.bd/api/v1/reviews/specific?fieldName=productId&fieldValue=${product?._id}`
      );
      const res = await response.json();
      setReviews(res.data);
    };
    getReviews();
  }, [product?._id]);

  const discountedPrice =
    product?.onePiecePrice - (product?.onePiecePrice * product?.discount) / 100;

  useEffect(() => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const found = wishlistItems.some(item => item._id === product._id);
    setIsInWishlist(found);
  }, [product._id]);




const handleAddToCart = () => {
  let existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const existingProductIndex = existingCartItems.findIndex(
    (item) => item._id === product._id
  );

  if (existingProductIndex !== -1) {
    existingCartItems[existingProductIndex].quantity += 1;
  } else {
    existingCartItems.push({ ...product, quantity: 1, discountedPrice });
  }
  setCartProducts([...existingCartItems]);
  localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
  
  // Push data to DataLayer only if the product is added to cart
  if (existingProductIndex === -1) {
    window.dataLayer.push({
      event: "add_to_cart",
      product_id: product._id,
      product_name: product.name,
      currencyCode: "BDT",
      product_price: product.onePiecePrice,
      product_quantity: 1, 
    });
  }
};



const handleAddToWishlist = () => {
  let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

  const existingProductIndex = wishlistItems.findIndex(
    (item) => item._id === product._id
  );

  if (existingProductIndex === -1) {
    wishlistItems.push(product);
    setIsInWishlist(true);
    toast.success("Product added to wishlist");

    // Push data to DataLayer only if the product is added to wishlist
    window.dataLayer.push({
      event: "add_to_wishlist",
      product_id: product._id,
      product_name: product.name,
    });

  } else {
    wishlistItems = wishlistItems.filter(item => item._id !== product._id);
    setIsInWishlist(false);
    toast.info("Product removed from wishlist");

    // Push data to DataLayer only if the product is removed from wishlist
    window.dataLayer.push({
      event: "remove_from_wishlist",
      product_id: product._id,
      product_name: product.name,
    });

  }
  
  localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
};


  const cartQuantityNumber = cartProducts?.find(
    (item) => item._id === product._id
  );

  return (
    <div className="flex px-5 lg:px-0 flex-col lg:flex-row items-center gap-8 pr-2 lg:pr-20 border-b last:border-b-0 border-solid border-borderColor pb-4 mb-4">
      <Link to={`/product/${product?.slug}`} className="basis-[28%] ">
        <img
          className="mx-auto  group-hover:scale-125  transition-all duration-200"
          src={product?.img}
          alt=""
        />
      </Link>
      <div className="flex-1">
        <div>
          <h2 className="font-rubic text-[#292929] font-medium">
            <Link to={`/product/${product?.slug}`}>{product?.name}</Link>
          </h2>
          <div className="flex  gap-4 items-center mt-1">
            <Rating
              fullSymbol={<IoIosStar className="text-primary" />}
              emptySymbol={<FaRegStar className="text-primary text-center" />}
              initialRating={5}
              readonly
            />
            <p className="border-r border-primary border-solid pr-4 capitalize text-primary font-openSans text-sm hover:text-secondary">
              {reviews.length} Review
            </p>
            <Link
              to={`/product/${product?.slug}#reviews`}
              className="capitalize text-primary border-r pr-4 border-primary border-solid  font-openSans text-sm hover:text-secondary"
            >
              add your Review
            </Link>
            <Link
              to={`/product/${product?.slug}#faq`}
              className="uppercase text-primary font-openSans text-sm hover:text-secondary"
            >
              FAQ
            </Link>
          </div>

          <div className="font-medium font-rubic text-sm">
            {product.discount ? (
              <>
                <span className="line-through">৳ {product?.onePiecePrice}</span>{" "}
                ৳ {discountedPrice}
              </>
            ) : (
              <>৳ {product?.onePiecePrice}</>
            )}
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-3 text-white hover:bg-[#131e2c] bg-primary px-5 py-3 font-medium font-rubic uppercase duration-200 text-sm rounded-full"
            >
              <FaShoppingCart />
              {cartQuantityNumber?.quantity
                ? cartQuantityNumber?.quantity
                : "কার্টে যোগ করুন"}
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`flex items-center gap-3 text-textColor hover:text-white ${
                isInWishlist
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-[#efecec] hover:bg-primary"
              } px-5 py-3 font-medium font-rubic uppercase duration-200 text-sm rounded-full`}
            >
              {isInWishlist ? <FaHeart /> : <FaRegHeart />}
              {isInWishlist
                ? " ইচ্ছেতালিকা অপসারণ করুন"
                : "ইচ্ছেতালিকায় যোগ করুন"}
            </button>
            <Link
              onClick={handleAddToCart}
              to={"/checkout"}
              className="inline-block bg-primary text-white rounded-full uppercase text-sm font-openSans font-medium px-4 py-2 hover:bg-textColor transition-all duration-200"
            >
              অর্ডার করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListsView;
