import React from "react";
import { DNA } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <DNA
        color="#00BFFF"
        height={80}
        width={80}
        ariaLabel="dna-loading"
        className="dna-wrapper"
      />
    </div>
  );
};

export default Loading;
