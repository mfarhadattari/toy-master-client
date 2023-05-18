import { useContext } from "react";
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
              text: `${error.message.split("(auth/")[1].slice(0, -2)}`,
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/821/821861.png?w=740&t=st=1684402372~exp=1684402972~hmac=e8abbf0d11a37402eda27d2fc910f3c377bd1bd2c0ae6fbebaaa730f3e0703f8"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
