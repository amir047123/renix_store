import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../Hooks/authUser";
import { toast } from "react-toastify";
import UsegetUserById from "../Hooks/usegetUserById";
import useGetSeo from "../Hooks/useGetSeo";
import DynamicTitle from "../components/shared/DynamicTitle";

const MyAccount = () => {
  const seoMetaData = useGetSeo("my_account");
  const { data } = UsegetUserById();

  const { userRole, logout } = AuthUser();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check if the user is logged in
    if (!userRole) {
      // If not logged in, show toast message and redirect to login page
      toast.error("Unauthorized access!");
      navigate("/login");
      return;
    }

    // Check if the user is an admin
    if (userRole === "admin") {
      // If the user is an admin, redirect to admin dashboard
      navigate("/adminDashboard");
      return;
    }

    // If the user is a regular user, continue rendering the MyAccount component

    // Additional logic for regular users can be added here

    return () => setIsMounted(false);
  }, [userRole, logout, isMounted, navigate]);

  return (
    <div className="font-openSans text-sm py-3 max-w-[90%]">
      <DynamicTitle
        metaTitle={seoMetaData?.metaTitle}
        metaImage={seoMetaData?.metaImage}
        metaDescription={seoMetaData?.metaDescription}
        canonicalUrl={seoMetaData?.canonicalUrl}

      />
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
          className="font-bold text-primary cursor-pointer"
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
