import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvides";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const RouteProtector = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default RouteProtector;
