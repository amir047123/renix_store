import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

const ProductFAQ = ({ allFaqs }) => {
  const location = useLocation();
  useEffect(() => {
    // Check if the URL contains the FAQ hash fragment
    if (location.hash === "#faq") {
      const faqSection = document.getElementById("product_faq");
      if (faqSection) {
        const offset = 150; // Adjust this value as needed
        const topPos =
          faqSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  }, [location]);

  //

  return (
    <div id="product_faq">
      <ul class="mx-auto  divide-y mt-5 shadow shadow-blue-600 rounded-xl">
        {allFaqs?.map((faq) => (
          <li key={faq._id}>
            <details class="group">
              <summary class="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>{faq?.question}</span>
              </summary>

              <article class="px-4 pb-4">
                <p>{faq?.answer}</p>
              </article>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFAQ;
