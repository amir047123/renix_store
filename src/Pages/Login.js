import React from "react";
import PageHeader from "../components/ui/PageHeader";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-[#f5f5f5]  overflow-hidden">
        <PageHeader title="My Account" />
        <div className=" mx-auto max-lg:overflow-x-auto w-full">
          <div className="pt-12 container">
            <div className="bg-white shadow-custom max-lg:min-w-[900px]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="border-r border-solid border-borderColor  py-16 px-10">
                  <h2 className="font-rubic font-medium text-lg uppercase text-[#333] mb-5">
                    LOGIN
                  </h2>
                  <div>
                    {/* Username or email address */}
                    <div className="mb-4 font-openSans ">
                      <label
                        className="mb-2 inline-block text-sm"
                        htmlFor="userName"
                      >
                        Username or email address
                        <span className="text-secondary">*</span>
                      </label>

                      <input
                        id="userName"
                        name="userName"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                    </div>
                    {/* Passwords */}
                    <div className="mb-4 font-openSans text-sm">
                      <label
                        className="mb-2 inline-block text-sm"
                        htmlFor="password"
                      >
                        Password
                        <span className="text-secondary">*</span>
                      </label>

                      <input
                        id="password"
                        name="password"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                    </div>

                    <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ">
                      Login
                    </button>
                    <div className="mt-2">
                      <input type="checkbox" id="rememberMe" />
                      <label
                        className="font-openSans text-sm text-[#333]"
                        htmlFor="rememberMe"
                      >
                        {" "}
                        Remember me
                      </label>
                    </div>
                    <p className="mt-3 font-openSans text-sm text-[#333] hover:text-secondary">
                      Lost your password?
                    </p>
                  </div>
                </div>
                <div className=" py-16 px-10">
                  <h2 className="font-rubic font-medium text-lg uppercase text-[#333] mb-5">
                    REGISTER
                  </h2>
                  <div>
                    {/* Username  */}
                    <div className="mb-4 font-openSans ">
                      <label
                        className="mb-2 inline-block text-sm"
                        htmlFor="userName"
                      >
                        Username
                        <span className="text-secondary">*</span>
                      </label>

                      <input
                        id="userName"
                        name="userName"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                    </div>
                    {/*  email address */}
                    <div className="mb-4 font-openSans ">
                      <label
                        className="mb-2 inline-block text-sm"
                        htmlFor="userName"
                      >
                        email
                        <span className="text-secondary">*</span>
                      </label>

                      <input
                        id="userName"
                        name="userName"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                    </div>
                    {/* Passwords */}
                    <div className="mb-4 font-openSans text-sm">
                      <label
                        className="mb-2 inline-block text-sm"
                        htmlFor="password"
                      >
                        Password
                        <span className="text-secondary">*</span>
                      </label>

                      <input
                        id="password"
                        name="password"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                      />
                    </div>

                    <p className="mt-3 font-openSans text-sm text-[#333] ">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our{" "}
                      <Link to={""} className="hover:text-secondary">
                        privacy policy
                      </Link>
                      .
                    </p>
                    <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
