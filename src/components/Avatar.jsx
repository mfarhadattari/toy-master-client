import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvides";
import Swal from "sweetalert2";
const Avatar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  /* --------------------------------------------
  !------------| logout btn handler | --------
  ---------------------------------------------- */
  const handelLogout = () => {
    Swal.fire({
      title: "Want to Logout?",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "YES",
      cancelButtonText: "NO",
    }).then((warningResult) => {
      if (warningResult.isConfirmed) {
        logoutUser()
          .then(() => {
            Swal.fire({
              title: "Logout Successfully",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Request Error",
              text: `${error.message}`,
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="flex gap-3 justify-center items-center ">
      <button
        className="btn btn-outline text-white hover:bg-pink-500 hover:border-white"
        onClick={handelLogout}
      >
        Log Out
      </button>

      <div
        className="tooltip tooltip-bottom tooltip-info"
        data-tip={user?.displayName}
      >
        <div className="avatar">
          <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="" />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <FaUser className="text-4xl"></FaUser>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
