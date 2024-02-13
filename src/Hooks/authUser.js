import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AuthUser() {
  const navigate = useNavigate();

  const getPhone = () => {
    const userString = localStorage.getItem("nirogPhone");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const getUserRole = () => {
    const roleString = localStorage.getItem("nirogRole");
    const role_name = JSON.parse(roleString);
    return role_name;
  };
  const getUserInfo = () => {
    const userInfoString = localStorage.getItem("nirog_user_info");
    const user_info = JSON.parse(userInfoString);
    return user_info;
  };

  const [userRole, setUserRole] = useState(getUserRole());
  const [phone, setPhone] = useState(getPhone());
  const [userInfo, setUserInfo] = useState(getUserInfo());

  const saveToken = (phone, role, userInfo) => {
    localStorage.setItem("nirogPhone", JSON.stringify(phone));
    localStorage.setItem("nirogRole", JSON.stringify(role));
    localStorage.setItem("nirog_user_info", JSON.stringify(userInfo));

    setPhone(phone);
    setUserInfo(userInfo);
    setUserRole(role);
    navigate("/");
    window.location.reload();
  };

  const logout = () => {
    localStorage.clear();

    toast.success("Successfully LogOut");
    navigate(`/`);
    window.location.reload();
    // fetch(`http://localhost:5000/api/v1/user/delete-ip/${userInfo?._id}`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data?.modifiedCount === 1) {
    //       toast.success("Successfully LogOut");
    //       navigate(`/`);
    //       window.location.reload();
    //     }
    //   });
  };

  // const http = axios.create({
  //   baseURL: "http://localhost:5000/api/v1",
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  return {
    setToken: saveToken,
    userRole,
    phone,
    getUserInfo,
    userInfo,
    logout,
    // userIp,
  };
}
