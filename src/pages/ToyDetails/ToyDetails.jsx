import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../hooks/useSetTitle";

const ToyDetails = () => {
  useSetTitle("Toys Details");
  const {
    _id,
    seller,
    email,
    name,
    category,
    price,
    quantity,
    rating,
    img,
    details,
    sellerAvatar,
  } = useLoaderData();

  const [seeMore, setSeeMore] = useState(false);

  return (
    <section className="container mx-auto my-10">
      {/* seller information */}
      <div className="flex justify-center md:justify-end mr-10">
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className=" w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  sellerAvatar ||
                  "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                }
              />
            </div>
          </div>
          <div className="text-start text-xl font-source-serif-pro italic ">
            <h1 className="font-bold">{seller}</h1>
            <h3>Seller</h3>
          </div>
        </div>
      </div>

      {/* toy details */}
      <div className="w-3/4 mx-auto mt-20">
        <div className="flex flex-col md:flex-row gap-14 items-start">
          <div className="w-full">
            <img src={img} className="rounded-lg bg-transparent w-[400px] h-[400px]" />
          </div>
          <div className="w-full space-y-5">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              {name}
            </h1>
            <p className="font-semibold text-xl md:text-2xl lg:text-3xl">
              Category: {category}
            </p>
            <div className="text-lg md:text-xl lg:text-2xl space-y-2">
              <p>Price: {price} Tk</p>
              <p>Quantity: {quantity} pc</p>
              <div className="flex gap-2 items-center tooltip w-fit">
                Rating:
                <span className="tooltip tooltip-bottom" data-tip={rating}>
                  <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 md:w-3/4 mx-auto my-10 space-y-5">
        <h1 className=" font-bold font-source-serif-pro italic text-5xl border-b-4 border-pink-600 p-5 ">
          Description
        </h1>
        <div className="text-2xl font-light">
          <p className="inline w-fit text-gray-700">
            {seeMore ? details : details.slice(0, 400)}...
          </p>
          {details.length > 400 && (
            <button
              className="btn btn-link text-pink-500 hover:text-pink-600"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
