import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sliders = ({ banners }) => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const sliderChanger = (number) => {
    if (number === banners.length) {
      setCurrentBanner(0);
    } else {
      setCurrentBanner(number);
    }
  };

  return (
    <div className="carousel-item relative w-full rounded-lg">
      <div className="w-full relative rounded-lg">
        <img
          src={banners[currentBanner]}
          className="w-full h-[500px] rounded-lg"
        />
        <div className="w-full h-full absolute top-0 rounded-lg bg-gradient-to-r from-[#151515] to-[#15151504]">
          <div className="absolute top-1/3 left-16 md:left-28 lg:mt-10 w-3/4 md:w-1/2 p-5">
            <h1 className="font-source-serif-pro font-bold italic  text-2xl md:text-4xl lg:text-6xl text-white">
              Make Your Dreams
            </h1>
            <p className="text-white md:text-xl  mt-3">
              Ignite Curiosity, Inspire Minds. Explore our engaging collection
              of interactive toys that make learning a fun and rewarding
              experience for children of all ages!
            </p>
            <Link
              to="/all-toys"
              className="btn btn-outline mt-5 text-white hover:bg-pink-600 hover:border-0 text-lg"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          onClick={() => sliderChanger(currentBanner - 1)}
          className="btn btn-circle btn-outline text-pink-600 hover:bg-pink-600 hover:border-0 text-2xl"
        >
          ❮
        </button>
        <button
          onClick={() => sliderChanger(currentBanner + 1)}
          className="btn btn-circle btn-outline text-pink-600 hover:bg-pink-600 hover:border-0 text-2xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Sliders;
