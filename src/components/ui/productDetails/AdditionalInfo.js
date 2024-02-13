import React from "react";

const AdditionalInfo = () => {
  return (
    <div className="bg-white p-6 shadow-custom">
      <div className="border border-solid border-borderColor grid grid-cols-2">
        <p className="border-r border-borderColor py-5 px-6">Color</p>
        <p className="px-6 py-5">red, yellow</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
