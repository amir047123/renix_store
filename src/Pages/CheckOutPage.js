import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";

const CheckOutPage = () => {
  const [openCupponField, setOpenCupponField] = useState(false);
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <PageHeader title="CheckOut" />
      <div className="container py-12">
        <div className="bg-white p-5 shadow-custom ">
          <div className="relative">
            <p>
              Have a coupon?{" "}
              <span onClick={() => setOpenCupponField(!openCupponField)}>
                Click here to enter your code
              </span>
            </p>
            <div
              style={{
                transition: "max-height 3s ease-in-out",
                maxHeight: openCupponField ? "1000px" : "0",

                overflow: "hidden",
              }}
            >
              <p>If you have a coupon code, please apply it below.</p>
              <input
                className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                type="text"
                placeholder="Coupon code"
              />
            </div>
          </div>
        </div>
      </div>
      {/*    <div>
                  <p className="font-rubic text-sm text-[#333] mb-6">
                    Your cart is currently empty.
                  </p>
                  <Link
                    to={"/"}
                    className="hover:bg-secondary bg-primary transition-all duration-300 text-white  px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm "
                  >
                    Return to shop
                  </Link>
                </div> */}
      CheckOutPage
    </div>
  );
};

export default CheckOutPage;
