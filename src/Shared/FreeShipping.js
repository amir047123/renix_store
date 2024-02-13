import { MdOutlineLocalShipping } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaApple, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";
const FreeShipping = () => {
  return (
    <div className="my-[50px]">
      <div className="md:container shadow-md bg-white border border-solid border-gray-300 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 ">
        {/* shipping */}
        <div className="py-[25px] px-[30px] border-b md:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <MdOutlineLocalShipping className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
            FREE SHIPPING ON ORDER OVER $99
          </p>
        </div>
        {/* Questions */}
        <div className="py-[25px] px-[30px] border-b md:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <IoCallSharp className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
            HAVE A QUESTIONS? +10800 789 0000
          </p>
        </div>
        {/* grantee */}
        <div className="py-[25px] px-[30px] border-b md:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <FaDollarSign className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
            100% MONEY BACK GUARANTEE
          </p>
        </div>
        {/* Return service */}
        <div className="py-[25px] px-[30px] border-b lg:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <FaBriefcase className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
            30 DAYS RETURN SERVICE
          </p>
        </div>
        {/* download app */}
        <div className="bg-primary md:py-[25px] py-4 px-5 md:px-[30px] col-span-full">
          <button className="bg-white flex items-center justify-center w-3/4 mx-auto md:w-full p-3 md:p-5 rounded-full text-primary font-medium font-rubic tracking-[0.5px] uppercase my-[10px]">
            <FaApple size={25} className="mr-2" /> Download
          </button>
          <button className="bg-white flex items-center justify-center w-3/4 mx-auto md:w-full p-3 md:p-5 rounded-full text-primary font-medium font-rubic tracking-[0.5px] uppercase my-[10px]">
            <TiVendorAndroid size={25} className="mr-2" /> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;