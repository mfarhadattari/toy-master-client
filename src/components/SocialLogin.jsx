import { useContext, useState } from "react";
import { AuthContext } from "./../providers/AuthProvides";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginUserWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  /* ---------- location ------------------ */
  const location = useLocation();
  const redirectFrom = location?.state?.from?.pathname || "/";

  /* -----------------------------------
  ! ------- |GOOGLE LOGIN HANDLER| -------
  ----------------------------------------*/
  const handelGoogleLogin = () => {
    loginUserWithGoogle()
      .then((loginResult) => {
        fetch("https://mfarhad-toy-master.vercel.app/generate-jwt-token", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: loginResult.user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("toy-master-token", data.token);
            Swal.fire({
              title: "Login Success",
              icon: "success",
              text: `Welcome Back ${loginResult.user.displayName}`,
            });
            navigate(redirectFrom, { replace: true });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR",
          icon: "error",
          text: `${error.message.split("(auth/")[1].slice(0, -2)}`,
        });
      });
  };
  return (
    <div className="card-body">
      <button
        className="btn btn-outline text-pink-600 w-full hover:bg-pink-600 hover:border-0"
        onClick={handelGoogleLogin}
      >
        <FcGoogle className="text-2xl mr-2"></FcGoogle>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
