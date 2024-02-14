import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";

const CheckOutPage = () => {
  const [openCupponField, setOpenCupponField] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const handleCreateUserOnchange = (e) => {
    let isChecked = e.target.checked;
    setNewUser(isChecked);
  };
  const handlePaymentOnChange = (event) => {
    setSelectedPayment(event.target.id);
  };
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <PageHeader title="CheckOut" />
      <div className="container py-12">
        <div className="bg-white p-8 shadow-custom ">
          {/* Apply copon */}
          <div className="relative font-openSans text-sm text-[#333]">
            <p>
              Have a coupon?{" "}
              <span
                className="hover:text-secondary cursor-pointer"
                onClick={() => setOpenCupponField(!openCupponField)}
              >
                Click here to enter your code
              </span>
            </p>
            <div
              style={{
                transition: "max-height .5s ease-in-out",
                maxHeight: openCupponField ? "1000px" : "0",
                overflow: "hidden",
              }}
            >
              <p className="mb-5">
                If you have a coupon code, please apply it below.
              </p>
              <input
                className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                type="text"
                placeholder="Coupon code"
              />
              <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                Apply coupon{" "}
              </button>
            </div>
          </div>
          {/* form */}
          <div>
            <form className="text-sm text-[#666] font-openSans ">
              {/* Informations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h2 className="font-rubic font-medium text-primary my-5">
                    BILLING DETAILS
                  </h2>
                  {/* Billing address */}
                  {/* First name */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="firstName">
                      First name <span className="text-secondary">*</span>
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                    />
                  </div>
                  {/* Last name */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="lastName">
                      Last name <span className="text-secondary">*</span>
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                    />
                  </div>
                  {/* Company name */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="company">
                      Company name (optional)
                    </label>

                    <input
                      id="company"
                      name="company"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                    />
                  </div>
                  {/* Country  */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="country">
                      Country / Region <span className="text-secondary">*</span>
                    </label>

                    <select
                      value={"United"}
                      id="country"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      name="country"
                    >
                      <option value="bd"> Bangladesh</option>
                      <option value="india"> India</option>
                      <option selected value="Usa">
                        {" "}
                        United States
                      </option>
                    </select>
                  </div>
                  {/* Street address */}
                  <div className="mb-4">
                    <label
                      className="mb-2 inline-block"
                      htmlFor="streetAddress"
                    >
                      Street address <span className="text-secondary">*</span>
                    </label>

                    <input
                      id="streetAddress"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                      placeholder="House number and street name"
                      name="streetAddress"
                    />

                    <input
                      className="w-full mt-3 py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      name="apartment"
                    />
                  </div>
                  {/* Town / City  */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="city">
                      Town / City <span className="text-secondary">*</span>
                    </label>

                    <input
                      id="city"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                      name="city"
                    />
                  </div>
                  {/* County (optional)  */}
                  <div className="mb-4">
                    <label
                      className="mb-2 inline-block"
                      htmlFor="countryOptional"
                    >
                      County (optional)
                    </label>

                    <input
                      id="countryOptional"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                      name="countryOptional"
                    />
                  </div>
                  {/* Postcode  */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="postcode">
                      Postcode <span className="text-secondary">*</span>
                    </label>

                    <input
                      id="postcode"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                      name="postcode"
                    />
                  </div>
                  {/* Phone   */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="phone">
                      Phone <span className="text-secondary">*</span>
                    </label>

                    <input
                      id="phone"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                      name="phone"
                    />
                  </div>
                  {/* Email address   */}
                  <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="email">
                      Email address <span className="text-secondary">*</span>
                    </label>

                    <input
                      id="email"
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      type="text"
                      name="email"
                    />
                  </div>
                  {/* Create an account */}
                  <div className="relative ">
                    <input
                      onChange={handleCreateUserOnchange}
                      type="checkbox"
                      name="createAccount"
                      id="createAccount"
                    />
                    <label className="ml-2" htmlFor="createAccount">
                      Create an account?
                    </label>
                    {/* new user accont */}
                    <div
                      className="mt-5"
                      style={{
                        transition: "max-height .5s ease-in-out",
                        maxHeight: newUser ? "1000px" : "0",
                        overflow: "hidden",
                      }}
                    >
                      {/* user name   */}
                      <div className="mb-4">
                        <label className="mb-2 inline-block" htmlFor="userName">
                          Account username
                          <span className="text-secondary">*</span>
                        </label>

                        <input
                          id="userName"
                          className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                          type="text"
                          name="userName"
                          placeholder="Username"
                        />
                      </div>
                      {/* Create account password  */}
                      <div className="mb-4">
                        <label className="mb-2 inline-block" htmlFor="password">
                          Create account password
                          <span className="text-secondary">*</span>
                        </label>
                        <input
                          id="password"
                          className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                          type="text"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* additonal notes */}
                <div>
                  <h2 className="font-rubic font-medium text-primary my-5">
                    ADDITIONAL INFORMATION
                  </h2>
                  <label className="mb-2 inline-block" htmlFor="note">
                    Order notes (optional)
                  </label>
                  <textarea
                    className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                    name=""
                    id="note"
                    cols="2"
                    rows="2"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
              {/* Order  */}
              <div>
                <h2 className="font-rubic font-medium text-primary my-5">
                  YOUR ORDER
                </h2>
                {/* Product lists show */}
                <div className=" border-solid border border-borderColor">
                  {/* header */}
                  <div className="grid grid-cols-3  font-bold border-solid border-b border-borderColor">
                    <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                      Product
                    </div>
                    <div className="col-span-1 p-3 ">Subtotal</div>
                  </div>
                  {/* body */}
                  <div className="text-sm">
                    {/* Show the product dynamicaly */}
                    <div className="grid grid-cols-3 border-solid border-b border-borderColor">
                      <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                        Fresh Organic Mustard Leaves × 1{" "}
                      </div>
                      <div className="col-span-1 p-3">£6.00</div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="font-bold">
                    <div className="grid grid-cols-3 border-solid border-b border-borderColor">
                      <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                        Subtotal
                      </div>
                      <div className="col-span-1 p-3">£6.00</div>
                    </div>
                    <div className="grid grid-cols-3 border-solid border-l border-borderColor">
                      <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                        Total
                      </div>
                      <div className="col-span-1 p-3">£6.00</div>
                    </div>
                  </div>
                </div>
                {/* Payment method */}
                <div className="mt-6">
                  <div>
                    <div className="relative">
                      <input
                        onChange={handlePaymentOnChange}
                        type="radio"
                        name="payment"
                        id="bank"
                        checked={selectedPayment === "bank"}
                      />
                      <label className="mb-2 inline-block ml-2" htmlFor="bank">
                        Direct bank transfer
                      </label>
                      <p
                        className={` transition-all duration-200 ${
                          selectedPayment === "bank"
                            ? "pt-1 pb-5 max-h-96 "
                            : "py-0 invisible max-h-0"
                        }`}
                      >
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                    </div>
                    <div className="">
                      <input
                        type="radio"
                        name="payment"
                        id="cash"
                        onChange={handlePaymentOnChange}
                        checked={selectedPayment === "cash"}
                      />
                      <label className="mb-2 inline-block ml-2" htmlFor="cash">
                        Cash on delivery
                      </label>
                      <p
                        className={` transition-all duration-200 ${
                          selectedPayment === "cash"
                            ? "pt-1 pb-5 max-h-96 "
                            : "py-0 invisible max-h-0"
                        }`}
                      >
                        Pay with cash upon delivery.
                      </p>
                    </div>
                    {/* <p>Selected Payment Option: {selectedPayment}</p> */}
                  </div>
                  <p className="mt-5">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                </div>
                {/* button order */}
                <div>
                  <button className="hover:bg-secondary bg-primary transition-all duration-300 text-white  px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-8">
                    Place order
                  </button>
                </div>
              </div>
            </form>
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
    </div>
  );
};

export default CheckOutPage;
