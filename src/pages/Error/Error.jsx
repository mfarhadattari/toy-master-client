import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import useSetTitle from "./../../hooks/useSetTitle";
import img from "./../../assets/error-page.gif";

const Error = () => {
  useSetTitle("Error");
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen font-source-serif-pro">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-5">
          <div>
            <img src={img} />
          </div>
          <div className="text-center text-gray-700">
            <h1 className="flex items-center leading-none text-[120px] p-0 m-0">
              4<TfiFaceSad className="text-[100px]"></TfiFaceSad>4
            </h1>
            <h3 className="text-3xl">Page No Found</h3>
          </div>
        </div>
        <button
          className="btn btn-link text-pink-600 my-5 text-xl w-fit mx-auto"
          onClick={() => navigate("/", { replace: true })}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
