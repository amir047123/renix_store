import { BiSupport } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { FaApple, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";
import { Icon } from "@iconify/react";
const FreeShipping = () => {
  const phoneNumber = "+8801618883013";
  return (
    <div className="py-[50px] bg-[#f5f5f5]">
      <div className="xl:container shadow-md bg-white border border-solid border-gray-300 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 ">
        {/* shipping */}
        <div className="py-[25px] px-[30px] border-b md:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <Icon icon="healthicons:medicines-negative" className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
          Natural Medicine 

          </p>
          
        </div>
        {/* Questions */}
        <div className="py-[25px] px-[30px] border-b md:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <Icon icon="mdi:organic-outline" className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
          100% Organic
          </p>
        </div>
        {/* grantee */}
        <div className="py-[25px] px-[30px] border-b md:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <Icon icon="streamline:customer-support-1-solid" className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
          24/7 SUPPORT
          </p>
        </div>
        {/* Return service */}
        <div className="py-[25px] px-[30px] border-b lg:border-r border-solid border-[#eaeaea] text-center">
          <div className="border-2 inline-table border-dotted border-primary rounded-full w-6 md:w-10 md:h-10 h-6 mx-auto p-2.5 md:p-5">
            <Icon icon="mingcute:question-fill" className="mx-auto text-xl md:text-[30px] text-primary leading-10" />
          </div>
          <p className="uppercase font-rubic font-medium text-textColor tracking-[0.5px] w-full md:max-w-[185px] mx-auto text-sm mt-6">
            Have a Question? <br />
            <a href={`tel:${phoneNumber}`} className="text-primary">
              {phoneNumber}
            </a>
          </p>
        </div>
        {/* download app */}
        <div className="bg-primary 2xl:py-[25px] py-4 px-5 2xl:px-[30px] col-span-full lg:col-span-1">
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
