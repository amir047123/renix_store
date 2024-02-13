import { MdEmail } from "react-icons/md";
const NewsLetter = () => {
  return (
    <div className="bg-[#1b1e24] py-14 text-center">
      <div>
        <h3 className="font-oswald font-light uppercase mb-2 text-white text-xl tracking-[1px]">
          NEWSLETTER
        </h3>
        <h2 className="font-oswald font-normal  uppercase mb-7 text-primary text-3xl md:text-[38px]">
          GET DISCOUNT 30% OFF
        </h2>
        <div className="md:flex sm:mx-20 lg:mx-0 px-5 md:px-0 block items-center justify-center gap-2">
          <input
            className=" lg:max-w-[425px] w-full md:inline-block block rounded-full border border-[#e9e7e7] border-solid bg-white placeholder:text-[#a7a7a7] p-4 md:p-5 outline-0"
            type="text"
            placeholder="Your email address"
          />
          <button className=" w-full mx-auto md:mx-0 md:w-auto flex gap-2 items-center justify-center mt-5 md:mt-0 bg-secondary py-[18px] px-7 text-white hover:bg-primary transition-all duration-300 font-rubic rounded-full font-medium uppercase tracking-[0.5px]">
            <MdEmail size={20} />
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
