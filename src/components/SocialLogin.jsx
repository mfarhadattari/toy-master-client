import { useContext } from "react";
import { AuthContext } from "./../providers/AuthProvides";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { loginUserWithGoogle } = useContext(AuthContext);

  /* -----------------------------------
  ! ------- google login handler-------
  ----------------------------------------*/
  const handelGoogleLogin = () => {
    loginUserWithGoogle()
      .then((loginResult) => {
        Swal.fire({
          title: "Login Successfully!",
          text: `Welcome Back ${loginResult.user.displayName}`,
          icon: "success",
          showConfirmButton: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "ERROR",
          icon: "error",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="card-body">
      <button
        className="btn btn-outline text-pink-600 w-full hover:bg-pink-600 hover:border-0"
        onClick={handelGoogleLogin}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
