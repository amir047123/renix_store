import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGetCartsProduct from "../Hooks/useGetCartsProduct";
import { toast } from "react-toastify";
import AuthUser from "../Hooks/authUser";
const CheckOutPage = () => {
  const { userInfo } = AuthUser();
  const { cartProducts, total, setCartProducts } = useGetCartsProduct();
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Calculate total amount
      const totalAmount = cartProducts?.reduce((acc, product) => {
        const discountedPrice =
          product.onePiecePrice * (1 - product.discount / 100);
        return acc + discountedPrice;
      }, 0);

      const orderData = {
        userId: userInfo?._id, // auth id
        userPhone: userInfo?.phone, // auth num
        totalAmount: totalAmount,
        onlinePay: selectedPayment === "bank",
        user: {
          firstName: data.firstName,
          lastName: data.lastName,
          // all info here
          country: data.country,
          company: data.company,
          city: data.city,
          apartment: data.apartment,
          countryOptional: data.countryOptional,
          createAccount: data.createAccount,
          email: data.email,
          notes: data.notes,
          password: data.password,
          phone: data.phone,
          postcode: data.postcode,
          streetAddress: data.streetAddress,
          userName: data.userName,
        },
        products: cartProducts?.map((product) => ({
          productId: product._id,
          name: product.name,
          quantity: product.quantity,
          img: product.img,
          discountPrice: product.discountedPrice,
          orginalPrice: product.onePiecePrice,
          total: total,
        })),
        // Add other fields
      };

      const response = await fetch(
        "http://localhost:5000/api/v1/order/addOrders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );
      const responseData = await response.json();
      console.log("Order placed successfully:", responseData);
      toast.success("  Order place successfully ");
      setCartProducts([]);

      if (selectedPayment === "bank") {
        window.location.href = responseData.url;
      } else {
        console.log("Cash on delivery selected");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <PageHeader title="CheckOut" />
      {cartProducts.length === 0 ? (
        <>
          <div className="bg-white p-8 shadow-custom container mt-10">
            <p className="font-rubic text-sm text-[#333]">
              Checkout is not available whilst your cart is empty.
            </p>
            <p className="font-rubic text-sm text-[#333] mb-6">
              Your cart is currently empty.
            </p>
            <Link
              to={"/"}
              className="hover:bg-secondary bg-primary transition-all duration-300 text-white  px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm "
            >
              Return to shop
            </Link>
          </div>
        </>
      ) : (
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-sm text-[#666] font-openSans "
              >
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
                        {...register("firstName", { required: true })}
                        id="firstName"
                        name="firstName"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                      {errors.firstName && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
                    </div>
                    {/* Last name */}
                    <div className="mb-4">
                      <label className="mb-2 inline-block" htmlFor="lastName">
                        Last name <span className="text-secondary">*</span>
                      </label>

                      <input
                        {...register("lastName", { required: true })}
                        id="lastName"
                        name="lastName"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                      {errors.lastName && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
                    </div>
                    {/* Company name */}
                    <div className="mb-4">
                      <label className="mb-2 inline-block" htmlFor="company">
                        Company name (optional)
                      </label>

                      <input
                        {...register("company")}
                        id="company"
                        name="company"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                    </div>
                    {/* Country  */}
                    <div className="mb-4">
                      <label className="mb-2 inline-block" htmlFor="country">
                        Country / Region{" "}
                        <span className="text-secondary">*</span>
                      </label>

                      <select
                        {...register("country", { required: true })}
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
                      {errors.country && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
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
                        {...register("streetAddress", { required: true })}
                        id="streetAddress"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                        placeholder="House number and street name"
                        name="streetAddress"
                      />
                      {errors.streetAddress && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
                      <input
                        {...register("apartment")}
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
                        {...register("city", { required: true })}
                        id="city"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                        name="city"
                      />
                      {errors.city && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
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
                        {...register("countryOptional")}
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
                        {...register("postcode", { required: true })}
                        id="postcode"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                        name="postcode"
                      />
                      {errors.postcode && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
                    </div>
                    {/* Phone   */}
                    <div className="mb-4">
                      <label className="mb-2 inline-block" htmlFor="phone">
                        Phone <span className="text-secondary">*</span>
                      </label>

                      <input
                        {...register("phone", { required: true })}
                        id="phone"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                        name="phone"
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
                    </div>
                    {/* Email address   */}
                    <div className="mb-4">
                      <label className="mb-2 inline-block" htmlFor="email">
                        Email address <span className="text-secondary">*</span>
                      </label>

                      <input
                        {...register("email", { required: true })}
                        id="email"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                        name="email"
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
                    </div>
                    {/* Create an account */}
                    <div className="relative ">
                      <input
                        {...register("createAccount")}
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
                          <label
                            className="mb-2 inline-block"
                            htmlFor="userName"
                          >
                            Account username
                            <span className="text-secondary">*</span>
                          </label>

                          <input
                            {...register("userName", {
                              required: newUser ? true : false,
                            })}
                            id="userName"
                            className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                            type="text"
                            name="userName"
                            placeholder="Username"
                          />
                          {errors.userName && (
                            <span className="text-xs text-red-500 font-semibold mt-1">
                              This field is required
                            </span>
                          )}
                        </div>
                        {/* Create account password  */}
                        <div className="mb-4">
                          <label
                            className="mb-2 inline-block"
                            htmlFor="password"
                          >
                            Create account password
                            <span className="text-secondary">*</span>
                          </label>
                          <input
                            {...register("password", {
                              required: newUser ? true : false,
                            })}
                            id="password"
                            className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                            type="text"
                            name="password"
                            placeholder="Password"
                          />
                          {errors.password && (
                            <span className="text-xs text-red-500 font-semibold mt-1">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* additonal notes */}
                  <div>
                    <h2 className="font-rubic font-medium text-primary my-5">
                      ADDITIONAL INFORMATION
                    </h2>
                    <label className="mb-2 inline-block" htmlFor="notes">
                      Order notes (optional)
                    </label>
                    <textarea
                      {...register("notes")}
                      className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                      name="notes"
                      id="notes"
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
                      {cartProducts.map((item) => (
                        <div
                          key={item._id}
                          className="grid grid-cols-3 border-solid border-b border-borderColor"
                        >
                          <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                            {item.name} × {item.quantity}
                          </div>
                          <div className="col-span-1 p-3">
                            ৳ {item.discountedPrice * item.quantity}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Footer */}
                    <div className="font-bold">
                      <div className="grid grid-cols-3 border-solid border-b border-borderColor">
                        <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                          Subtotal
                        </div>
                        <div className="col-span-1 p-3">৳ {total}</div>
                      </div>
                      <div className="grid grid-cols-3 border-solid border-l border-borderColor">
                        <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                          Total
                        </div>
                        <div className="col-span-1 p-3">৳ {total}</div>
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
                        <label
                          className="mb-2 inline-block ml-2"
                          htmlFor="bank"
                        >
                          Online Payment
                        </label>
                        <p
                          className={` transition-all duration-200 ${
                            selectedPayment === "bank"
                              ? "pt-1 pb-5 max-h-96 "
                              : "py-0 invisible max-h-0"
                          }`}
                        >
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
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
                        <label
                          className="mb-2 inline-block ml-2"
                          htmlFor="cash"
                        >
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
      )}
    </div>
  );
};

export default CheckOutPage;