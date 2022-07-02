import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "./contexts/AuthProvider";




const ProtectedRoutes = () => {
  const useAuth = () => {
    const authData = sessionStorage.getItem('user')
    return authData
  };
  
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
