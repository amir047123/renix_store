import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewUserProfile = () => {
  const { id } = useParams();
  const [u, setU] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/user/getUsersById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setU(data?.data);
      });
  }, [id]);

  return (
    <div>
      <div>
        <div class=" ">
          <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 border-b-2 border-gray-500 pb-2">
            User Account Details
          </h1>
          <p class="text-lg text-gray-800 mb-8">
            Explore essential Account Information for User.
          </p>
        </div>
        <div className=" px-10 shadow-xl p-5 rounded-md text-sm">
          <form className="mt-5">
            <div>
              <label>User Name </label>
              <input
                className="p-5 border w-full border-gray-400 rounded hover:border-black duration-300 outline-none "
                type="text"
                name="name"
                value={u?.name}
                placeholder="Full Name"
                disabled
              ></input>
            </div>
            <div>
              <label>User Phone Number</label>
              <input
                className="p-5 border w-full border-gray-400 rounded  outline-none"
                type="text"
                disabled
                name="phone"
                value={u?.phone}
                placeholder="+880125452252"
              ></input>
              <p className="text-sm text-gray-400">
                Mobile number cannot be changed
              </p>
            </div>

            <div>
              <label>User Division</label>
              <input
                className="p-5 border  w-full border-gray-400  rounded hover:border-black duration-300  outline-none"
                type="text"
                value={u?.division}
                disabled
              ></input>
            </div>

            <div>
              <label>User District</label>
              <input
                className="p-5 border  w-full border-gray-400  rounded hover:border-black duration-300  outline-none"
                type="text"
                value={u?.district}
                disabled
              ></input>
            </div>
            <div>
              <label>User Upazila</label>
              <input
                className="p-5 border  w-full border-gray-400  rounded hover:border-black duration-300  outline-none"
                type="text"
                value={u?.upazila}
                disabled
              ></input>
            </div>
            <div>
              <label>User Address</label>
              <input
                className="p-5 border  w-full border-gray-400  rounded hover:border-black duration-300  outline-none"
                type="text"
                value={u?.address}
                disabled
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewUserProfile;
