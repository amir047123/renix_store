import { useEffect, useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useGetCartsProduct from "../Hooks/useGetCartsProduct";
import { toast } from "react-toastify";
import AuthUser from "../Hooks/authUser";
import UsegetUserById from "../Hooks/usegetUserById";
import axios from "axios";
import useGetSeo from "../Hooks/useGetSeo";
import DynamicTitle from "../components/shared/DynamicTitle";
const CheckOutPage = () => {
  const seoMetaData = useGetSeo("checkOut_page");
  const { data } = UsegetUserById();
  const { userInfo } = AuthUser();
  const { cartProducts, total, setCartProducts, setTotal } =
    useGetCartsProduct();
  const [coupon, setCoupon] = useState("");
  const [openCupponField, setOpenCupponField] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("bank");
  const [appliedCoupon, setAppliedCoupon] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({});

  useEffect(() => {
    // Load applied coupons from localStorage
    const storedCoupons = localStorage.getItem("appliedCoupons");
    if (storedCoupons) {
      setAppliedCoupon(JSON.parse(storedCoupons));
    }
  }, []);
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

  // total amount add tax shhiping charge
  const tax = (total * (+shippingInfo?.tax || 0)) / 100;

  const totalAmount =
    tax + parseFloat(total) + parseFloat(shippingInfo?.outsideDhaka);
  // order data submit
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
        totalAmount: totalAmount.toFixed(2), // grand total with tax and shipping charge
        onlinePay: selectedPayment === "bank",
        user: {
          firstName: data.firstName,
          lastName: data.lastName,
          // all info here
          country: data.country,
          company: data.company,
          city: data.city,
          apartment: data.apartment,
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
        })),
        // Add other fields
      };
      const usersData = {
        firstName: data.firstName,
        lastName: data.lastName,
        // all info here
        country: data.country,
        company: data.company,
        city: data.city,
        apartment: data.apartment,
        createAccount: data.createAccount,
        email: data.email,
        notes: data.notes,
        password: data.password,
        phone: data.phone,
        postcode: data.postcode,
        streetAddress: data.streetAddress,
        displayName: data.userName,
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
      const userResponse = await fetch(
        `http://localhost:5000/api/v1/user/updateUsers/${userInfo?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usersData),
        }
      );

      const responseData = await response.json();
      console.log("Order placed successfully:", responseData);
      toast.success("  Order place successfully ");
      setCartProducts([]);
      localStorage.removeItem("appliedCoupons");
      if (selectedPayment === "bank") {
        window.location.href = responseData.url;
      } else {
        console.log("Cash on delivery selected");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  // apply coupon

  const handleCouponApply = () => {
    const response = fetch(
      `http://localhost:5000/api/v1/coupon/veryfiCoupon/${coupon}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (appliedCoupon.includes(coupon)) {
          toast.error("Coupon already applied");
        } else if (data?.status === "success" && data?.data?.code === coupon) {
          setAppliedCoupon([...appliedCoupon, coupon]);
          localStorage.setItem(
            "appliedCoupons",
            JSON.stringify([...appliedCoupon, coupon])
          );
          const discountPercent = +data.data.discount;
          const discountAmount = (total * discountPercent) / 100;
          const discountedPrice = total - discountAmount;
          setTotal(discountedPrice.toFixed(2));
          toast.success("Coupon applied successfully");
        } else {
          toast.error("Invalid coupon code");
        }
      });
  };
  // add tax and shipping charge

  useEffect(() => {
    const fetchShippingData = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/shipping/getShippings"
      );
      const res = data?.data;
      const shippingDetails = res?.map((item) => setShippingInfo(item));
    };
    fetchShippingData();
  }, []);
  console.log(shippingInfo);
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <DynamicTitle
        metaTitle={seoMetaData?.metaTitle}
        metaDescription={seoMetaData?.metaDescription}
      />
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
                  onChange={(e) => setCoupon(e.target.value)}
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                  placeholder="Coupon code"
                />
                <button
                  onClick={handleCouponApply}
                  className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3"
                >
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
                        defaultValue={data?.firstName}
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
                        defaultValue={data?.lastName}
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
                        defaultValue={data?.company}
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
                        defaultValue={data?.country}
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
                        defaultValue={data?.streetAddress}
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
                        defaultValue={data?.apartment}
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
                        defaultValue={data?.city}
                      />
                      {errors.city && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
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
                        defaultValue={data?.postcode}
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
                        defaultValue={data?.phone}
                        disabled
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
                        defaultValue={data?.email}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 font-semibold mt-1">
                          This field is required
                        </span>
                      )}
                    </div>
                    {/* Create an account */}
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
                      defaultValue={data?.notes}
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
                      {/* Sub total */}
                      <div className="grid grid-cols-3 border-solid border-b border-borderColor">
                        <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                          Subtotal
                        </div>
                        <div className="col-span-1 p-3">৳ {total}</div>
                      </div>
                      {/* Shipping charge  */}
                      <div className="grid grid-cols-3 border-solid border-b border-borderColor">
                        <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                          Shipping charge
                        </div>
                        <div className="col-span-1 p-3">
                          ৳ {shippingInfo?.outsideDhaka}
                        </div>
                      </div>
                      {/* Tax */}
                      <div className="grid grid-cols-3 border-solid border-b border-borderColor">
                        <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                          Tax
                        </div>
                        <div className="col-span-1 p-3">
                          {shippingInfo?.tax} %
                        </div>
                      </div>
                      {/* total */}
                      <div className="grid grid-cols-3 border-solid border-l border-borderColor">
                        <div className="col-span-2 p-3 border-solid border-r border-borderColor">
                          Total
                        </div>
                        <div className="col-span-1 p-3">
                          ৳ {totalAmount.toFixed(2)}
                        </div>
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