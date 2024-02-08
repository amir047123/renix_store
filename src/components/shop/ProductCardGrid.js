import Rating from "react-rating";
import { IoIosStar, IoMdSearch } from "react-icons/io";
import { FaPlus, FaRegHeart, FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ProductCardGrid = () => {
  return (
    <div className="bg-white group pb-6  relative border-r border-b border-solid border-borderColor">
      <div className="text-center ">
        <div className="relative  overflow-hidden">
          <img
            className="mx-auto group-hover:scale-125  transition-all duration-200"
            src="/assets/products/p1.jpg"
            alt=""
          />
        </div>

        <h2 className="font-rubic  text-[#292929] font-medium">
          <Link to={""}>Fresh Organic Mustard Leaves</Link>
        </h2>
        <Rating
          fullSymbol={<IoIosStar className="text-primary" />}
          emptySymbol={<FaRegStar className="text-primary text-center" />}
          initialRating={5}
          readonly
        />
        <p className="font-medium font-rubic text-sm">
          <span className="line-through">£9.00</span> £6.00
        </p>
      </div>
      <div className="absolute opacity-0 group-hover:opacity-100  bg-primary hover:bg-secondary duration-200 p-2 rounded-full text-white border-solid border-[3px] border-white -translate-x-1/2 left-1/2 bottom-32  cursor-pointer">
        <FaPlus size={30} />
      </div>
      <div className="absolute flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100  p-2 rounded-full border-white -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 ">
        <div className=" cursor-pointer bg-white hover:bg-black duration-200 p-2 rounded-full text-black hover:text-white">
          <IoMdSearch />
        </div>
        <div className=" cursor-pointer bg-white hover:bg-black duration-200 p-2 rounded-full text-black hover:text-white">
          <FaRegHeart />
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
