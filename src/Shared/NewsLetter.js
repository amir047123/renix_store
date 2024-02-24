import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
const NewsLetter = () => {


  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;

    try {
      const response = await fetch("https://serverrenixstore.niroghealthplus.com/api/v1/newsLatter/addNewsLatter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email,}),
      });

      
      if (response.ok) {
        form.reset();
        toast.success("Subscribe Successfully") 

      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="bg-[#1b1e24] py-14 text-center">
      <div>
        <h3 className="font-oswald font-light uppercase mb-2 text-white text-xl tracking-[1px]">
          NEWSLETTER
        </h3>
        <h2 className="font-oswald font-normal  uppercase mb-7 text-primary text-3xl md:text-[38px]">
          GET Latest News
        </h2>
        <form onSubmit={handleForm}>
        <div className="md:flex sm:mx-20 lg:mx-0 px-5 md:px-0 block items-center justify-center gap-2">
          <input
            name="email"
            className=" lg:max-w-[425px] w-full md:inline-block block rounded-full border border-[#e9e7e7] border-solid bg-white placeholder:text-[#a7a7a7] p-4 md:p-5 outline-0"
            type="text"
            placeholder="Your email address"
          />
          <button type="submit" className=" w-full mx-auto md:mx-0 md:w-auto flex gap-2 items-center justify-center mt-5 md:mt-0 bg-secondary py-[18px] px-7 text-white hover:bg-primary transition-all duration-300 font-rubic rounded-full font-medium uppercase tracking-[0.5px]">
            <MdEmail size={20} />
            Subscribe
          </button>
        </div>
        </form>

      </div>
    </div>
  );
};

export default NewsLetter;
