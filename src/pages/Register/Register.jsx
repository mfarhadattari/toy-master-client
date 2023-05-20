import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvides";
import Swal from "sweetalert2";
import useSetTitle from "../../hooks/useSetTitle";

const Register = () => {
  useSetTitle("Registration");
  const { createUser, logoutUser, setUserAvatar, setUserName } =
    useContext(AuthContext);

  const navigate = useNavigate();

  /* --------------------------------------------------
  !--------------- | handler for register |----------
  ----------------------------------------------- */
  const handleRegister = (event) => {
    event.preventDefault();
    /* ----------- getting form data -------- */
    const form = event.target;
    const name = form.name.value;
    const avatar = form.avatar.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((authResult) => {
        if (name) {
          setUserName(name);
        }
        if (avatar) {
          setUserAvatar(avatar);
        }
        Swal.fire({
          title: "Successfully Account Created",
          icon: "success",
          text: "Now Please Login Your Account",
        });
        form.reset();
        logoutUser();
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: `${error.message.split("(auth/")[1].slice(0, -2)}`,
        });
      });
  };
  return (
    <section className="container mx-auto my-10 p-5 lg:p-0">
      <div className="border-2 border-pink-600 rounded-xl shadow-xl w-full md:w-3/4 xl:w-2/5 mx-auto">
        <h1 className="text-center mt-10 font-bold text-4xl font-source-serif-pro italic">
          Create Account
        </h1>
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control my-2">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control my-2">
            <input
              type="url"
              placeholder="Your Avatar URL"
              name="avatar"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control my-2">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn bg-pink-600 border-0 hover:bg-white hover:text-pink-600 hover:border hover:border-pink-600"
              value="Create Account"
            />
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have account?{" "}
          <Link to="/login" className="underline underline-offset-2">
            Please Login
          </Link>
        </p>
        <div className="divider w-3/4 mx-auto font-source-serif-pro italic font-semibold">
          OR
        </div>
        <div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Register;
