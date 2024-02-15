import React from "react";

const EditBillingAddress = () => {
  return (
    <div>
      {/* form */}
      <div>
        <form className="text-sm text-[#666] font-openSans ">
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
                <label className="mb-2 inline-block" htmlFor="streetAddress">
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
                <label className="mb-2 inline-block" htmlFor="countryOptional">
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
