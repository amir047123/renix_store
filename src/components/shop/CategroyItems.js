import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import DynamicTitle from "../shared/DynamicTitle";

const CategoryItems = ({ category }) => {
  const [openSubCategory, setOpenSubCategory] = useState(false);

  const handleToggleSubCategory = () => {
    setOpenSubCategory(!openSubCategory);
    
    // Push category data to the dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "toggleSubCategory",
      category: category
    });
  };

  return (
    <div>
      {/* <DynamicTitle
        metaTitle={category?.metaTitle}
        metaImage={category?.metaImage}
        metaDescription={category?.metaDescription}
        canonicalUrl={category?.canonicalUrl}
      /> */}
      <ul className="flex flex-col gap-3 relative">
        <li className="relative border-b border-solid border-borderColor px-5">
          <Link
            className="uppercase flex justify-between items-center text-blackColor font-medium text-sm py-3"
            to={`/shop/${category}`}
          >
            {category}
          </Link>
          <ul
            className={`top-full text-xs pb-4 `}
            style={{
              transition: "max-height 0.5s ease-in-out",
              maxHeight: openSubCategory ? "1000px" : "0",
              overflow: "hidden",
            }}
          >
            {category?.subCategory?.map((subCategory, index) => (
              <li key={index}>
                <Link
                  className="uppercase text-[#333] font-medium py-3 inline-block"
                  to={""}
                >
                  {subCategory.name}
                </Link>
                {subCategory?.subCategory && (
                  <ul className="ml-5">
                    {subCategory?.subCategory?.map((item, index) => (
                      <li key={index}>
                        <Link> {item.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {category.subCategory && (
            <FaPlus
              className="absolute right-5 top-4 cursor-pointer"
              onClick={handleToggleSubCategory}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default CategoryItems;
