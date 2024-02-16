import React from "react";

const AdditionalInfo = ({product}) => {
  return (
    <div className="bg-white p-6 shadow-custom" dangerouslySetInnerHTML={{ __html: product?.dosageForm }}>
      
    </div>
  );
};

export default AdditionalInfo;
