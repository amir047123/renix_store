import React from "react";

const EditAccountDetails = () => {
  return (
    <div>
      {/* form */}
      <div>
        <form className="text-sm text-[#666] font-openSans ">
          {/* Informations */}
          <div className="">
            <div>
              {/* First name */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="firstName">
                  First name <span className="text-secondary">*</span>
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                />
              </div>
              {/* Last name */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="lastName">
                  Last name <span className="text-secondary">*</span>
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                />
              </div>
              {/* DisplayName name */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="displayName">
                  Display name
                </label>

                <input
                  id="displayName"
                  name="displayName"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                />
                <em>
                  This will be how your name will be displayed in the account
                  section and in reviews
                </em>
              </div>
              {/* Email  */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="email">
                  Email <span className="text-secondary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                />
              </div>

              {/* currentPassword  */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="currentPassword">
                  Current password (leave blank to leave unchanged)
                </label>
                <input
                  id="currentPassword"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                  name="currentPassword"
                />
              </div>
              {/* newPassword  */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="newPassword">
                  New password (leave blank to leave unchanged)
                </label>
                <input
                  id="newPassword"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                  name="newPassword"
                />
              </div>
              {/* confromPassword  */}
              <div className="mb-4">
                <label className="mb-2 inline-block" htmlFor="confromPassword">
                  Confirm new password
                </label>
                <input
                  id="confromPassword"
                  className="w-full py-3 px-5 rounded-full border border-solid border-borderColor outline-0"
                  type="text"
                  name="confromPassword"
                />
              </div>
              <div>
                <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAccountDetails;
