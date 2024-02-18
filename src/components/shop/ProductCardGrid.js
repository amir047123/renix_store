import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosStar, IoMdSearch } from "react-icons/io";
import { FaPlus, FaRegHeart, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import axios from "axios";
import useGetCartsProduct from "../../Hooks/useGetCartsProduct";
import AuthUser from "../../Hooks/authUser";
import { toast } from "react-toastify";

const ProductCardGrid = ({ product }) => {
  const { userInfo } = AuthUser();
  const userId = userInfo?._id;
  const { cartProducts, setCartProducts } = useGetCartsProduct();
  const [error, setError] = useState(null);

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
  };

  const cartQuantityNumber = cartProducts?.find(
    (item) => item?._id === product?._id
  );





  

  const handleAddToWishlist = async () => {

    try {
      const response = await axios.post("http://localhost:5000/api/v1/wishlist/addWishlistItem", {
        productId: product._id,
        userId: userId,
      });
      if (response.data.alreadyAdded) {
        toast.info("Product is already in wishlist");
      } else {
        toast.success("Product added to wishlist");
      }
      // Update the UI or perform any additional logic here
    } catch (error) {
      setError(error.message);
      console.error("Error adding product to wishlist:", error.message);
      toast.error("Error adding product to wishlist");
    }
  };
  

  return (
    <div className="bg-white group pb-6 relative border-r border-b last:border-r-0  border-solid border-borderColor">
      <div className="text-center">
        <div className="relative overflow-hidden">
          <img
            className="mx-auto group-hover:scale-125 transition-all duration-200"
            src={product?.img}
            alt=""
          />
        </div>
        <h2 className="font-rubic text-[#292929] font-medium px-6 lg:px-0">
          <Link to={`/productDetails/${product?._id}`}>{product?.name}</Link>
        </h2>
        <Rating
          fullSymbol={<IoIosStar className="text-primary" />}
          emptySymbol={<FaRegStar className="text-primary text-center" />}
          initialRating={5}
          readonly
        />
        <p className="font-medium font-rubic text-sm">
          <span className="line-through">৳ {product?.onePiecePrice}</span>{" "}
          {product?.discount > 0 && (
            <>
              ৳ {discountedPrice} <br />
            </>
          )}
          <span className="text-green-500">{product?.discount}% off</span>
        </p>
      </div>
      <div
        className="absolute opacity-0 group-hover:opacity-100 bg-primary hover:bg-secondary duration-200 p-2 rounded-full text-white border-solid border-[3px] border-white -translate-x-1/2 left-1/2 bottom-32 cursor-pointer"
        onClick={handleAddToCart}
      >
        {cartQuantityNumber?.quantity ? (
          <span className="w-6 h-6 leading-6 inline-block text-center">
            {cartQuantityNumber?.quantity}
          </span>
        ) : (
          <FaPlus size={30} />
        )}
      </div>
      <div
        className="absolute flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 p-2 rounded-full border-white -translate-x-1/2 left-1/2 top-1/2"
       
      >
        <div className="cursor-pointer bg-white hover:bg-black duration-200 p-2 rounded-full text-black hover:text-white">
          <IoMdSearch />
        </div>
        <div className="cursor-pointer bg-white hover:bg-black duration-200 p-2 rounded-full text-black hover:text-white">
          <FaRegHeart  onClick={handleAddToWishlist} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
