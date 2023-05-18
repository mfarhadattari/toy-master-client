import { Link, json, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvides";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  /* ---------- location ------------------ */
  const location = useLocation();
  const redirectFrom = location?.state?.from?.pathname || "/";

  /* -----------------------------------------------------
  !--------------------| handler for login | --------------
  ------------------------------------------------------------ */
  const handelLogin = (event) => {
    event.preventDefault();

    // form data
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((authResult) => {
        fetch("http://localhost:5000/generate-jwt-token", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: authResult.user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("toy-master-token", data.token);
            Swal.fire({
              title: "Login Success",
              icon: "success",
              text: `Welcome Back ${authResult.user.displayName}`,
            });
            form.reset();
            navigate(redirectFrom, { replace: true });
          });
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
        <h1 className="text-center mt-10 font-bold text-4xl font-style-script">
          Please Login
        </h1>
        <form className="card-body" onSubmit={handelLogin}>
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
              value="Login"
            />
          </div>
        </form>
        <p className="text-center font-semibold">
          New to Toy Master?{" "}
          <Link to="/register" className="underline underline-offset-2">
            Create Account
          </Link>
        </p>
        <div className="divider w-3/4 mx-auto font-style-script font-semibold">
          OR
        </div>
        <div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </section>
  );
};

export default Login;
