import React, { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { toast } from "react-toastify";
import { server_url } from "../Config/API";
import axios from "axios";
import AuthUser from "../Hooks/authUser";

const Login = () => {
  const { setToken } = AuthUser();
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null); // Add this line
  const { userInfo } = AuthUser();

  async function onSignup() {
    setLoading(true);
    // Assuming you have your custom OTP service endpoint for sending OTP
    try {
      const response = await fetch(`${server_url}/sms/sendotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: ph }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming your custom service returns a token or identifier
        window.confirmationResult = { token: data.token, phoneNumber: ph };
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      } else {
        setLoading(false);
        throw new Error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  }

  async function onOTPVerify() {
    try {
      setLoading(true);
      const confirmationResult = window.confirmationResult;

      if (confirmationResult?.phoneNumber) {
        let ph = `+${confirmationResult.phoneNumber}`;
        // Assuming you have a server-side route for OTP verification
        const response = await axios.post(`${server_url}/sms/verifyotp`, {
          phoneNumber: confirmationResult?.phoneNumber,
          otp: otp,
        });

        if (response.data.success) {
          const getUserResponse = await fetch(
            `${server_url}/user/getUsersByNum/${ph}`
          );
          const userData = await getUserResponse.json();

          if (!userData?.data?._id) {
            const addUserResponse = await fetch(`${server_url}/user/addUsers`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ phone: ph }),
            });

            const addUserData = await addUserResponse.json();
            if (addUserData.success) {
              setLoading(false);
              setToken(
                addUserData?.data?.phone,
                addUserData?.data?.role,
                addUserData?.data
              );
              toast.success("You have successfully created an account!");
              setUser(addUserData.data); // Set the 'user' state variable
            } else {
              throw new Error(
                addUserData.message || "Failed to create an account"
              );
            }
          } else {
            setLoading(false);
            setToken(
              userData?.data?.phone,
              userData?.data?.role,
              userData?.data
            );
            toast.success("You are successfully logged in!");

            setUser(userData.data); // Set the 'user' state variable
          }
        } else {
          setLoading(false);
          toast.error("Invalid OTP");
        }
      } else {
        toast.error("Phone number not found");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="bg-[#f5f5f5]  overflow-hidden">
        <PageHeader title="My Account" />
        <div className=" mx-auto max-lg:overflow-x-auto w-full">
          <div className="pt-12 container">
            <div className="bg-white w-1/2 mx-auto shadow-custom  mb-5 max-lg:min-w-[900px]">
              <div className="">
                <div className=" py-16 px-10">
                  <h2 className="font-rubic font-medium text-lg uppercase text-[#333] mb-5">
                    LOGIN
                  </h2>
                  <div>
                    {/* Phone Number */}
                    <div className="mb-4 font-openSans ">
                      <label
                        className="mb-2 inline-block text-sm"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                        <span className="text-secondary">*</span>
                      </label>

                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter Your Phone Number"
                        className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                        type="text"
                        value={ph}
                        onChange={(e) => setPh(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={onSignup}
                      className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm"
                    >
                      Send OTP
                    </button>

                    {/* OTP */}
                    {showOTP && (
                      <div className="mb-4 font-openSans text-sm">
                        <label
                          className="mb-2 inline-block text-sm"
                          htmlFor="otp"
                        >
                          Verify OTP
                          <span className="text-secondary">*</span>
                        </label>

                        <input
                          id="otp"
                          name="otp"
                          placeholder="Enter 6 Digit OTP"
                          className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>
                    )}

                    {showOTP && (
                      <button
                        onClick={onOTPVerify}
                        className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm"
                      >
                        Submit
                      </button>
                    )}
                    {user && <p>OTP verified successfully!</p>}
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