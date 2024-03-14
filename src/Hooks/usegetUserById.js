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
            `http://localhost:5000/api/v1/user/getUsersById/${userInfo?._id}`
          );
          const resData = await response.json();
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
