import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../Hooks/authUser";
import { toast } from "react-toastify";
import UsegetUserById from "../Hooks/usegetUserById";

const MyAccount = () => {
  const { data } = UsegetUserById();
  console.log(data);
  const { userRole, logout } = AuthUser();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (userRole !== "user") {
      toast.info("Please verify your phone number");

      logout();
      navigate("/login");
      setTimeout(() => {}, 2000);
    }

    return () => setIsMounted(false);
  }, [userRole, logout, isMounted, navigate]);

  return (
    <div className="font-openSans text-sm py-3 max-w-[90%]">
      <p className="text-sm text-[#333]">
        Hello{" "}
        <span className="font-bold">
          {data?.displayName ? data?.displayName : data?.firstName}
        </span>{" "}
        (not{" "}
        <span className="font-bold">
          {data?.displayName ? data?.displayName : data?.firstName}
        </span>
        ?{" "}
        <span
          className="font-bold text-primary     cursor-pointer"
          onClick={logout}
        >
          Log out
        </span>
        )
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
