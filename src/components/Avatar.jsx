import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvides";
const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex gap-3 justify-center items-center ">
      <button className="btn btn-outline text-white hover:bg-pink-500 hover:border-white">
        Log Out
      </button>

      <div
        className="tooltip tooltip-bottom tooltip-info"
        data-tip={user?.displayName}
      >
        <div className="avatar">
          <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            {user?.img ? (
              <img src={user.img} alt="" />
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
