import { useContext } from "react";
import { AuthContext } from "./../providers/AuthProvides";
import Swal from "sweetalert2";
import {FcGoogle} from 'react-icons/fc';

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
          text: `${error.message.split("(auth/")[1].slice(0, -2)}`,
        });
      });
  };
  return (
    <div className="card-body">
      <button
        className="btn btn-outline text-pink-600 w-full hover:bg-pink-600 hover:border-0"
        onClick={handelGoogleLogin}
      ><FcGoogle className="text-2xl mr-2"></FcGoogle>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
