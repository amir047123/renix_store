import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userTimeZone, setUserTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div>
        <h1 className="text-center text-3xl uppercase font-bold">
          Welcome to Renix Store Management
        </h1>
      </div>

      <div className="bg-[#12486B] text-white shadow-md p-4 mt-3 rounded-lg">
        <h1 className="text-xl font-bold mb-2">Today</h1>
        <p className="font-thin mb-2">
          {currentTime.toLocaleDateString("en-US", { weekday: "long" })} (
          {userTimeZone})
        </p>
        <p className="font-thin mb-4">{currentTime.toLocaleString()}</p>
      </div>

      {/* <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="flex items-center justify-center  rounded-lg bg-gray-200">
          Totall Pending Order
        </div>
        <div className="flex items-center justify-center   rounded-lg bg-gray-200">
          Totall Delivering Order
          <span>000</span>
        </div>
        <div className="flex items-center justify-center   rounded-lg bg-gray-200">
          Total Seling Amount
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
