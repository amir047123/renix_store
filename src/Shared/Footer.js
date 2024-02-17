import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import FreeShipping from "./FreeShipping";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { SlEnvolope } from "react-icons/sl";
import { Icon } from "@iconify/react";
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
                  SHOPPING GUIDE
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Customers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Why us?
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-header"
              >
                <h3 className="mb-6 uppercase text-base font-medium text-primary font-rubic tracking-[0.5px]">
                  STYLE ADVISOR
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Training
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      System status
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      FAQ's
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Help Center
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
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Leadership
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to=""
                      className="transition-colors text-[#b7bcc8] duration-300 hover:text-primary "
                    >
                      Events
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
                      Qualis@klbtheme.com
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
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-2 md:col-span-4 lg:col-span-6">
              © 2024-2025 Renix. All Rights Reserved.

              </div>
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
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
