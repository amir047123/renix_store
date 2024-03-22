import React from "react";

const Description = ({product}) => {
  return (
    <div className="bg-white p-6 shadow-custom font-openSans" dangerouslySetInnerHTML={{ __html: product?.description }} >
     
    </div>
  );
};

export default Description;
