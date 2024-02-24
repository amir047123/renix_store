import React from "react";
import UsegetUserById from "../Hooks/usegetUserById";
import { useForm } from "react-hook-form";
import AuthUser from "../Hooks/authUser";
import { toast } from "react-toastify";

const EditBillingAddress = () => {
  const { userInfo } = AuthUser();
  const { data } = UsegetUserById();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
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
    const userResponse = await fetch(
      `https://serverrenixstore.niroghealthplus.com/api/v1/user/updateUsers/${userInfo?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usersData),
      }
    );
    const res = await userResponse.json();
    // console.log(res);
    if (res.status === "success") {
      toast.success("Information successfully updated ");
    }
  };
  return (
    <div>
      {/* form */}
      <div>
        <form
          className="text-sm text-[#666] font-openSans "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Informations */}
          <div className="">
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
                  defaultValue={data?.firstName}
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
                  defaultValue={data?.lastName}
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
                  defaultValue={data?.company}
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
                  Country / Region <span className="text-secondary">*</span>
                </label>

                <select
                  {...register("country", { required: true })}
                  defaultValue={data?.country ? data?.country : "United"}
                  id="country"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  name="country"
                >
                  <option value="bd"> Bangladesh</option>
                  <option value="india"> India</option>
                  <option value="Usa"> United States</option>
                </select>
                {errors.country && (
                  <span className="text-xs text-red-500 font-semibold mt-1">
                    This field is required
                  </span>
                )}
              </div>
              {/* Street address */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="streetAddress">
                  Street address <span className="text-secondary">*</span>
                </label>

                <input
                  {...register("streetAddress", { required: true })}
                  defaultValue={data?.streetAddress}
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
                  defaultValue={data?.apartment}
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
                  defaultValue={data?.city}
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
              {/* <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="countryOptional">
                  County (optional)
                </label>

                <input
                  defaultValue={data?.countryOptional}
                  id="countryOptional"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                  name="countryOptional"
                />
              </div> */}
              {/* Postcode  */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="postcode">
                  Postcode <span className="text-secondary">*</span>
                </label>

                <input
                  {...register("postcode", { required: true })}
                  defaultValue={data?.postcode}
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
              <div>
                <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                  Save address
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBillingAddress;
