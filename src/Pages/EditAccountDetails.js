import React from "react";
import { useForm } from "react-hook-form";
import AuthUser from "../Hooks/authUser";
import { toast } from "react-toastify";
import UsegetUserById from "../Hooks/usegetUserById";

const EditAccountDetails = () => {
  const { userInfo } = AuthUser();
  const { data } = UsegetUserById();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      displayName: data.displayName,
    };
    const response = await fetch(
      `https://apistore.renixlaboratories.com.bd/api/v1/user/updateUsers/${userInfo._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const resData = await response.json();

    if (resData.status === "success") {
      toast.success("info updated successfully");
      reset();
    }
  };

  return (
    <div>
      {/* form */}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-sm text-[#666] font-openSans "
        >
          {/* Informations */}
          <div className="">
            {/* First name */}
            <div className="mb-4">
              <label className="mb-2 inline-block" htmlFor="firstName">
                First name <span className="text-secondary">*</span>
              </label>
              <input
                defaultValue={data?.firstName}
                {...register("firstName", { required: true })}
                id="firstName"
                name="firstName"
                className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                type="text"
              />
              {errors.firstName && (
                <span className="text-xs text-red-400 ">
                  This field is required
                </span>
              )}
            </div>
            {/* Last name */}
            <div className="mb-4">
              <label className="mb-2 inline-block" htmlFor="lastName">
                Last name <span className="text-secondary">*</span>
              </label>

              <input
                defaultValue={data?.lastName}
                {...register("lastName", { required: true })}
                id="lastName"
                name="lastName"
                className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                type="text"
              />
              {errors.lastName && (
                <span className="text-xs text-red-400 ">
                  This field is required
                </span>
              )}
            </div>
            {/* DisplayName name */}
            <div className="mb-4">
              <label className="mb-2 inline-block" htmlFor="displayName">
                Display name
              </label>
              <input
                defaultValue={data?.displayName}
                id="displayName"
                {...register("displayName")}
                name="displayName"
                className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                type="text"
              />
              <em>
                This will be how your name will be displayed in the account
                section and in reviews
              </em>
              {errors.displayName && (
                <span className="text-xs text-red-400 ">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAccountDetails;
