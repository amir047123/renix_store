import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import FreeShipping from "./FreeShipping";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGoogleplus, IoMdCall } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";
import { TfiYoutube } from "react-icons/tfi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaRss,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <section className="mt-5 md:mt-10">
      {/* Shipping */}
      <FreeShipping />
      {/* Newsletter */}
      <NewsLetter />
      {/* Footer menu */}
      <footer className="w-full text-emerald-200">
        <div className="pt-16 pb-12 text-sm border-b border-emerald-600 bg-[#252932]">
          <div className="container  mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3 className="mb-6 uppercase text-base font-medium text-primary font-rubic tracking-[0.5px]">
                  Renix
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="https://renixlaboratories.com.bd/appointment"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Appointment
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="http://localhost:3000/tracking-order"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Tracking Order
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="http://localhost:3000/product-checking"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Product Checking
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3 className="mb-6 uppercase text-base font-medium text-primary font-rubic tracking-[0.5px]">
                  Quick Links
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="https://renixlaboratories.com.bd/privacy-policy"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="https://renixlaboratories.com.bd/terms-conditions"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="https://renixlaboratories.com.bd/refound-return"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Refound & Return
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3
                  className="mb-6 text-base uppercase font-medium text-primary font-rubic tracking-[0.5px]"
                  id="footer-header"
                >
                  INFORMATION
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to="https://renixlaboratories.com.bd/about"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      About us
                    </Link>
                  </li>

                  <li className="mb-2 leading-6">
                    <Link
                      to="https://renixlaboratories.com.bd/blogs"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3
                  className="mb-6 uppercase text-base font-medium text-primary font-rubic tracking-[0.5px]"
                  id="footer-header"
                >
                  CONTACT US
                </h3>
                <div>
                  <div className="mb-2 leading-6 flex items-center gap-3 max-w-[250px] w-full">
                    <div className="border-2 inline-table border-dotted border-[#b7bcc8] rounded-full w-6 h-6  p-3">
                      <CiLocationOn
                        size={15}
                        className="mx-auto text-[#b7bcc8] leading-6"
                      />
                    </div>
                    <p
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300  "
                    >
                      Fatullah 1421 Dhaka, Dhaka Division, Bangladesh
                    </p>
                  </div>
                  <div className="mb-2 leading-6 flex items-center gap-3 max-w-[250px] w-full">
                    <div className="border-2 inline-table border-dotted border-[#b7bcc8] rounded-full w-6 h-6  p-3">
                      <IoMdCall
                        size={15}
                        className="mx-auto text-[#b7bcc8] leading-6"
                      />
                    </div>
                    <p
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300  "
                    >
                      +8801884442022
                    </p>
                  </div>
                  <div className="mb-2 leading-6 flex items-center gap-3 max-w-[250px] w-full">
                    <div className="border-2 inline-table border-dotted border-[#b7bcc8] rounded-full w-6 h-6  p-3">
                      <SlEnvolope
                        size={15}
                        className="mx-auto text-[#b7bcc8] leading-6"
                      />
                    </div>
                    <p
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300  "
                    >
                      support@renixlaboratories.com.bd
                    </p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* <!-- Subfooter --> */}
        <div className="py-4 text-sm bg-[#252932]">
          <div className="container px-6 mx-auto">
            <div className=" flex justify-between flex-col gap-y-3 lg:flex-row items-center">
              <nav
                aria-labelledby="footer-social-links"
                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
              >
                <h2 className="sr-only" id="footer-social-links">
                  Social Media Links
                </h2>
                <ul className="flex items-center justify-end gap-2">
                  <li className="transition-colors duration-300 bg-[#3C5B9B] text-white p-2 rounded">
                    <Link href="">
                      <FaFacebookF size={18} />
                    </Link>
                  </li>
                  <li className="transition-colors duration-300 bg-[#359BED] text-white p-2 rounded">
                    <Link href="">
                      <FaTwitter size={18} />
                    </Link>
                  </li>
                  <li className="transition-colors duration-300 bg-[#E33729] text-white p-2 rounded">
                    <Link href="">
                      <IoLogoGoogleplus size={18} />
                    </Link>
                  </li>
                  <li className="transition-colors duration-300 bg-[#FD9F13] text-white p-2 rounded">
                    <Link href="">
                      <FaRss size={18} />
                    </Link>
                  </li>
                  <li className="transition-colors duration-300 bg-[#cb2027] text-white p-2 rounded">
                    <Link href="">
                      <FaPinterest size={18} />
                    </Link>
                  </li>
                  <li className="transition-colors duration-300 bg-[#027ba5] text-white p-2 rounded">
                    <Link href="">
                      <FaLinkedinIn size={18} />
                    </Link>
                  </li>
                  <li className="transition-colors duration-300 bg-[#F03434] text-white p-2 rounded">
                    <Link href="">
                      <TfiYoutube size={18} />
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="col-span-2 md:col-span-4 lg:col-span-6">
                © 2024-2025 Renix. All Rights Reserved.
              </div>

              <div className="flex items-center gap-4">
                <img alt="" src="/assets/Footer/payment-1.png" />
                <img alt="" src="/assets/Footer/payment-2.png" />
                <img alt="" src="/assets/Footer/payment-3.png" />
                <img alt="" src="/assets/Footer/payment-4.png" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
