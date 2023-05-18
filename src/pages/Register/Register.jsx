import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {
  return (
    <section className="container mx-auto my-10 p-5 lg:p-0">
      <div className="border-2 border-pink-600 rounded-xl shadow-xl w-full md:w-3/4 xl:w-2/5 mx-auto">
        <h1 className="text-center mt-10 font-bold text-4xl font-style-script">
          Create Account
        </h1>
        <form className="card-body">
          <div className="form-control my-2">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
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
            />
          </div>
          <div className="form-control my-2">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="input input-bordered"
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

export default Register;
