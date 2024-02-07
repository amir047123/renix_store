import { MdEmail } from "react-icons/md";
const NewsLetter = () => {
  return (
    <div className="bg-[#1b1e24] py-14 text-center">
      <div>
        <h3 className="font-oswald font-light uppercase mb-2 text-white text-xl tracking-[1px]">
          NEWSLETTER
        </h3>
        <h2 className="font-oswald font-normal  uppercase mb-7 text-primary text-[38px]">
          GET DISCOUNT 30% OFF
        </h2>
        <div className="flex items-center justify-center gap-2">
          <input
            className=" max-w-[425px] w-full rounded-full border border-[#e9e7e7] border-solid bg-white placeholder:text-[#a7a7a7] p-5 outline-0"
            type="text"
            placeholder="Your email address"
          />
          <button className="flex gap-2 items-center bg-secondary py-[18px] px-7 text-white hover:bg-primary transition-all duration-300 font-rubic rounded-full font-medium uppercase tracking-[0.5px]">
            <MdEmail size={20} />
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
