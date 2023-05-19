import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-fit mx-auto my-20">
      <Bars
        height="150"
        width="150"
        color="#DB2777"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
