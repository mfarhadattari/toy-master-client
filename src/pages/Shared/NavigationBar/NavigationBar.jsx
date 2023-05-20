import { Link } from "react-router-dom";
import NavigationLink from "../../../components/NavigationLink";
import icon from "/icon.png";
import Avatar from "../../../components/Avatar";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvides";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  const navList = (
    <>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/all-toys">All Toys</NavigationLink>
      <NavigationLink to="/blogs">Blogs</NavigationLink>

      {user ? (
        <>
          <NavigationLink to="/add-toy">Add Toy</NavigationLink>
          <NavigationLink to="/my-toys">My Toys</NavigationLink>
          <Avatar></Avatar>
        </>
      ) : (
        <NavigationLink to="/login">Login</NavigationLink>
      )}
    </>
  );
  return (
    <nav className="navbar justify-between w-full m-0 p-7 md:px-20  bg-pink-600  text-white sticky top-0 z-50">
      <div className="navbar-start w-fit">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-5 font-medium shadow bg-pink-600 rounded-box w-52 space-y-3"
          >
            {navList}
          </ul>
        </div>
        <Link className="flex items-end gap-2 font-source-serif-pro italic text-2xl lg:text-5xl  font-bold ">
          <img src={icon} className="w-8 lg:w-14" alt="TOY MASTER" />{" "}
          <span>TOY MASTER</span>
        </Link>
      </div>

      <div className="navbar-end w-fit">
        <div className="hidden lg:flex">
          <div className="menu menu-horizontal px-1 gap-5 items-center">
            {navList}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
