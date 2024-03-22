import { useEffect, useState } from "react";
import AuthUser from "../Hooks/authUser";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminProtectedRoute = ({ children }) => {
  const { userRole, logout } = AuthUser();
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (userRole !== "admin") {
      toast.info("Please verify your phone number");
      logout();
      navigate("/login");
    }
    return () => setIsMounted(false);
  }, [userRole, logout, navigate, isMounted]);

  return children;
};

export default AdminProtectedRoute;
