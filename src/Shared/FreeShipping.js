import { MdOutlineLocalShipping } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaApple, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";
const FreeShipping = () => {
  return (
    <div className="my-[50px]">
      <div className="container shadow-md bg-white border border-solid border-gray-300 grid grid-cols-5 ">
        {/* shipping */}
        <div className="py-[25px] px-[30px] border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-10 h-10 mx-auto p-5">
            <MdOutlineLocalShipping
              size={30}
              className="mx-auto text-primary leading-10"
            />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] max-w-[185px] mx-auto text-sm mt-6">
            FREE SHIPPING ON ORDER OVER $99
          </p>
        </div>
        {/* Questions */}
        <div className="py-[25px] px-[30px] border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-10 h-10 mx-auto p-5">
            <IoCallSharp
              size={30}
              className="mx-auto text-primary leading-10"
            />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] max-w-[185px] mx-auto text-sm mt-6">
            HAVE A QUESTIONS? +10800 789 0000
          </p>
        </div>
        {/* grantee */}
        <div className="py-[25px] px-[30px] border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-10 h-10 mx-auto p-5">
            <FaDollarSign
              size={30}
              className="mx-auto text-primary leading-10"
            />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] max-w-[185px] mx-auto text-sm mt-6">
            100% MONEY BACK GUARANTEE
          </p>
        </div>
        {/* Return service */}
        <div className="py-[25px] px-[30px] border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-10 h-10 mx-auto p-5">
            <FaBriefcase
              size={30}
              className="mx-auto text-primary leading-10"
            />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] max-w-[185px] mx-auto text-sm mt-6">
            30 DAYS RETURN SERVICE
          </p>
        </div>
        {/* download app */}
        <div className="bg-primary py-[25px] px-[30px]">
          <button className="bg-white flex items-center justify-center w-full p-5 rounded-full text-primary font-medium font-rubic tracking-[0.5px] uppercase my-[10px]">
            <FaApple size={25} className="mr-2" /> Download
          </button>
          <button className="bg-white flex items-center justify-center w-full p-5 rounded-full text-primary font-medium font-rubic tracking-[0.5px] uppercase ">
            <TiVendorAndroid size={25} className="mr-2" /> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;
