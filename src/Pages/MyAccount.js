import React from "react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="font-openSans text-sm py-3 max-w-[90%]">
      <p className="text-sm text-[#333]">
        Hello <span className="font-bold">res</span> (not{" "}
        <span className="font-bold">res</span>?{" "}
        <span className="font-bold text-primary">Log out</span>)
      </p>
      <p>
        From your account dashboard you can view your{" "}
        <Link className="font-bold text-primary" to={"/my-account/orders"}>
          recent orders
        </Link>
        , manage your
        <Link
          className="font-bold text-primary"
          to={"/my-account/edit-address"}
        >
          shipping and billing addresses
        </Link>
        , and{" "}
        <Link
          className="font-bold text-primary"
          to={"/my-account/edit-account"}
        >
          edit your password and account details.
        </Link>
      </p>
    </div>
  );
};

export default MyAccount;
