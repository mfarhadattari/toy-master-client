import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvides";
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Loader from "../components/Loader";
import Swal from "sweetalert2";

const RouteProtector = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  } else {
    Swal.fire({
      title: "Please Login First",
      icon: "error",
    }).then((result) => {
      navigate("/login", { state: { from: location }, replace: true });
    });
  }
};

export default RouteProtector;
