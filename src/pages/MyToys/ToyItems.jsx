import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaInfoCircle, FaRegEdit, FaTrashAlt } from "react-icons/fa";

const ToyItems = ({ toyInfo }) => {
  const { _id, name, category, img, rating, price, quantity } = toyInfo;
  return (
    <tr className="flex justify-between">
      {/* ----------------------- image and information---------------- */}
      <td className="w-full flex gap-5 items-center  font-style-script">
        <div className="avatar">
          <div className=" w-40 h-40 rounded-md">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-semibold">Category: {category}</p>
          <div>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity} pc</p>
            <p className="flex gap-2 items-center tooltip w-fit">
              Rating:
              <span className="tooltip tooltip-bottom" data-tip={rating}>
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              </span>
            </p>
          </div>
        </div>
      </td>
      <td className="w-fit gap-5 flex flex-col">
        <button className="btn text-red-600 btn-outline btn-circle text-xl hover:border-0 hover:bg-red-600 ">
          <FaTrashAlt></FaTrashAlt>
        </button>
        <button className="btn  text-green-600 btn-outline btn-circle text-xl hover:border-0 hover:bg-green-600">
          <FaRegEdit></FaRegEdit>
        </button>
        <button className="btn text-pink-600 btn-outline btn-circle text-xl hover:border-0 hover:bg-pink-600">
          <FaInfoCircle></FaInfoCircle>
        </button>
      </td>
    </tr>
  );
};

export default ToyItems;
