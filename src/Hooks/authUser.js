import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AuthUser() {
  const navigate = useNavigate();

  const getPhone = () => {
    const userString = localStorage.getItem("Phone");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const getUserRole = () => {
    const roleString = localStorage.getItem("Role");
    const role_name = JSON.parse(roleString);
    return role_name;
  };
  const getUserInfo = () => {
    const userInfoString = localStorage.getItem("user_info");
    const user_info = JSON.parse(userInfoString);
    return user_info;
  };

  const [userRole, setUserRole] = useState(getUserRole());
  const [phone, setPhone] = useState(getPhone());
  const [userInfo, setUserInfo] = useState(getUserInfo());

  const saveToken = (phone, role, userInfo) => {
    localStorage.setItem("Phone", JSON.stringify(phone));
    localStorage.setItem("Role", JSON.stringify(role));
    localStorage.setItem("user_info", JSON.stringify(userInfo));

    setPhone(phone);
    setUserInfo(userInfo);
    setUserRole(role);
    navigate("/");
    window.location.reload();
  };

  const logout = () => {
    localStorage.clear();

    toast.success("Successfully LogOut");
    navigate(`/login`);
    window.location.reload();
  };

  // Function to check if the user is logged in
  const isLoggedIn = () => {
    return !!phone; // Returns true if phone exists, indicating the user is logged in
  };

  // Function to check if the user has the required role
  const hasPermission = (requiredRole) => {
    return userRole === requiredRole;
  };

  return {
    setToken: saveToken,
    userRole,
    phone,
    getUserInfo,
    userInfo,
    logout,
    isLoggedIn,
    hasPermission,
  };
}
