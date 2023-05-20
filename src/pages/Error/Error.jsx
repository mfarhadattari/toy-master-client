import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import useSetTitle from "./../../hooks/useSetTitle";
const Error = () => {
  useSetTitle("Error");
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen font-source-serif-pro">
      <div className="text-center">
        <h1 className="flex items-center leading-none text-[120px] p-0 m-0">
          4<TfiFaceSad className="text-[100px]"></TfiFaceSad>4
        </h1>
        <h3 className="text-3xl">Page No Found</h3>
        <button
          className="text-pink-600 my-5 text-xl btn btn-outline"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
