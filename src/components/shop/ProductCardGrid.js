import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaHeart, FaRegHeart, FaRegStar, FaShoppingCart } from "react-icons/fa";
import Rating from "react-rating";
import useGetCartsProduct from "../../Hooks/useGetCartsProduct";
import AuthUser from "../../Hooks/authUser";
import { toast } from "react-toastify";

const ProductCardGrid = ({ product }) => {
  const { userInfo } = AuthUser();
  const userId = userInfo?._id;
  const { cartProducts, setCartProducts } = useGetCartsProduct();
  const [isInWishlist, setIsInWishlist] = useState(() => {
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    return wishlistItems.some((item) => item._id === product._id);
  });

  const discountedPrice =
    product?.onePiecePrice - (product?.onePiecePrice * product?.discount) / 100;

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

    // Push data to DataLayer
    window.dataLayer.push({
      event: "add_to_cart",
      product_id: product._id,
      product_name: product.name,
      product_price: product.onePiecePrice,
      product_quantity: 1, // Since it's added to cart
    });
  };

  const cartQuantityNumber = cartProducts?.find(
    (item) => item?._id === product?._id
  );

  const handleAddToWishlist = () => {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const existingProductIndex = wishlistItems.findIndex(
      (item) => item._id === product._id
    );

    if (existingProductIndex === -1) {
      wishlistItems.push(product);
      setIsInWishlist(true);
      toast.success("Product added to wishlist");

      // Push data to DataLayer
      window.dataLayer.push({
        event: "add_to_wishlist",
        product_id: product._id,
        product_name: product.name,
      });
    } else {
      wishlistItems = wishlistItems.filter((item) => item._id !== product._id);
      setIsInWishlist(false);
      toast.info("Product removed from wishlist");

      // Push data to DataLayer
      window.dataLayer.push({
        event: "remove_from_wishlist",
        product_id: product._id,
        product_name: product.name,
      });
    }

    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  };

  return (
    <div className="bg-white group pb-6 relative border-r flex flex-col px-2 border-b last:border-r-0  border-solid border-borderColor ">
      <div className="text-center ">
        <div className="relative overflow-hidden">
          <div>
            <Link to={`/product/${product?.slug}`}>
              <img
                className="mx-auto max-h-96 h-full  group-hover:scale-125 transition-all duration-200"
                src={product?.img}
                alt=""
              />
            </Link>
          </div>
          <div className="absolute flex items-center justify-center gap-2 opacity-100 p-2 rounded-full border-white  right-3 top-5">
            <button
              onClick={handleAddToWishlist}
              className={`cursor-pointer bg-white hover:bg-black duration-200 p-2 rounded-full text-black hover:text-white ${
                isInWishlist ? "text-red-500" : "" // Apply text-red-500 class when isInWishlist is true
              }`}
            >
              {isInWishlist ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div className=" flex-1  text-center py-3">
        <h2 className="font-rubic text-[#292929] font-medium px-6 lg:px-0">
          <Link to={`/product/${product?.slug}`}>{product?.name}</Link>
        </h2>
        <Rating
          fullSymbol={<IoIosStar className="text-primary" />}
          emptySymbol={<FaRegStar className="text-primary text-center" />}
          initialRating={5}
          readonly
        />
        <p className="font-medium font-rubic text-sm">
          {product.discount ? (
            <>
              <span className="line-through">৳ {product?.onePiecePrice}</span>৳{" "}
              {discountedPrice} <br />
              <span className="text-green-500">{product?.discount}% off</span>
            </>
          ) : (
            <>৳ {product?.onePiecePrice}</>
          )}
        </p>
      </div>
      <div className="text-center mt-4 flex items-center justify-center gap-3 ">
        <button
          onClick={handleAddToCart}
          className="flex items-center gap-3 text-white hover:bg-[#131e2c] bg-primary px-4 py-2 font-medium font-rubic uppercase duration-200 text-sm rounded-full"
        >
          <FaShoppingCart />
          {cartQuantityNumber?.quantity
            ? cartQuantityNumber?.quantity
            : "কার্টে যোগ করুন"}
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
  );
};

export default ProductCardGrid;
