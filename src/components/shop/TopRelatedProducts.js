import React from "react";
import Rating from "react-rating";
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const TopRelatedProducts = ({product}) => {

  const discountedPrice = product?.onePiecePrice - (product?.onePiecePrice * product?.discount) / 100;

  return (
    <Link to={`/product/${product?.slug}`} className="border-b border-solid border-borderColor">
      <div className="flex items-center gap-3 pb-3 mb-3 border-b border-solid border-borderColor">
        <img
          className="border border-solid border-borderColor w-20"
        src={product?.img}
          alt=""
        />
        <div>
          <h4 className="font-openSans text-sm text-[#898989]">
            {product?.name}
          </h4>
          <Rating
            fullSymbol={<IoIosStar className="text-primary" />}
            emptySymbol={<FaRegStar className="text-primary text-center" />}
            initialRating={5}
            readonly
          />
          <p className="font-medium font-rubic text-sm">
            <span className="line-through">৳ {product?.onePiecePrice}</span> ৳ {discountedPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TopRelatedProducts;
