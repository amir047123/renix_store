import { useEffect, useState } from "react";
import AuthUser from "./authUser";

const UsegetUserById = () => {
  const { userInfo } = AuthUser();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        if (userInfo) {
          const response = await fetch(
            `https://serverrenixstore.niroghealthplus.com/api/v1/user/getUsersById/${userInfo?._id}`
          );
          const resData = await response.json();
          console.log(resData, "resData");
          setUser(resData);
        }
      } catch (error) {
        console.error("Error fetching user by ID:", error);
      }
    };
    if (userInfo) {
      fetchUserById();
    }
  }, [userInfo]);

  return user;
};

export default UsegetUserById;
