import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import FreeShipping from "./FreeShipping";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";
import { Icon } from "@iconify/react";
import payment from "../Assets/Footer/payment.webp"
const Footer = () => {
  return (
    <section>
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
                  <li className="mb-2 leading-6">
                    <Link
                      to="https://www.google.com/maps/dir/%E0%A6%A8%E0%A7%88%E0%A6%B9%E0%A6%BE%E0%A6%9F%E0%A6%BF+%E0%A6%A6%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BF%E0%A6%A3%E0%A6%AA%E0%A6%BE%E0%A6%A1%E0%A6%BC%E0%A6%BE+%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87+%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6,+Bishay+Khaly/Renix+Unani+Laboratories+Limited+Narayanganj/@23.529079,89.1597937,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x39fee7bb7660ff03:0xbc6171805f38bd37!2m2!1d89.1701849!2d23.4765074!1m5!1m1!1s0x3755b73d69f41d37:0xf197a5601f2a766a!2m2!1d90.4764375!2d23.6704375?entry=ttu"
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                     Location
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
            <div  className=" flex" >
            <nav
                aria-labelledby="footer-social-links"
                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
              >
                <h2 className="sr-only" id="footer-social-links">
                  Social Media Links
                </h2>
                <ul className="flex items-center justify-end gap-4">
                  <li>
                    <Link
                      href=""
                      className="transition-colors duration-300 hover:text-primary"
                    >
                    <Icon  icon="logos:facebook"></Icon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="transition-colors duration-300 hover:text-primary"
                    >
                      <Icon icon="skill-icons:linkedin"></Icon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="transition-colors duration-300 hover:text-primary"
                    >
                      <Icon icon="logos:youtube-icon"></Icon>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="col-span-2 md:col-span-4 lg:col-span-6">
              © 2024-2025 Renix. All Rights Reserved.

              </div>

              <div>
                <img className=" " src={payment}></img>
              </div>
            
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
