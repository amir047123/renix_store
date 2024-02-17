import { useEffect } from "react";
import AuthUser from "../Hooks/authUser";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { userRole, logout } = AuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "user") {
      toast.info("Please verify your phone number");
      logout();
      navigate("/login");
    }
  }, [userRole, logout, navigate, location.pathname]);

  return children;
};

export default UserProtectedRoute;
