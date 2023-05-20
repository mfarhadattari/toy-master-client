import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaInfoCircle, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ToyItems = ({ toyInfo, handelRemoveToy, openModal }) => {
  const { _id, name, category, img, rating, price, quantity } = toyInfo;
  const handelEditBtn = (toyInfo) => {
    Swal.fire({
      title: "Want to Update?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "YES",
      cancelButtonText: "NO",
    }).then((swalResult) => {
      if (swalResult.isConfirmed) {
        openModal(toyInfo);
      }
    });
  };
  return (
    <tr className="w-full  rounded-lg p-5 flex flex-col md:flex-row gap-5  shadow-md">
      {/* ----------------------- IMAGE AND INFORMATION ---------------- */}
      <td className="w-full flex flex-col md:flex-row gap-5 items-center">
        <div className="avatar">
          <div className=" w-40 h-40 rounded-md">
            <img src={img} />
          </div>
        </div>
        <div className="text-start">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-semibold">Category: {category}</p>
          <div>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity} pc</p>
            <div className="flex gap-2 items-center tooltip w-fit">
              Rating:
              <span className="tooltip tooltip-bottom" data-tip={rating}>
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              </span>
            </div>
          </div>
        </div>
      </td>

      {/* ------------------- | Action Button Here | -------------------- */}
      <td className="w-fit mx-auto gap-5 flex md:flex-col">
        <button
          className="btn text-red-600 btn-outline btn-circle text-xl hover:border-0 hover:bg-red-600 "
          onClick={() => handelRemoveToy(_id)}
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
        <button
          className="btn text-green-600 btn-outline btn-circle text-xl hover:border-0 hover:bg-green-600"
          onClick={() => handelEditBtn(toyInfo)}
        >
          <FaRegEdit></FaRegEdit>
        </button>
        <Link
          to={`/toy/${_id}`}
          className="btn text-pink-600 btn-outline btn-circle text-xl hover:border-0 hover:bg-pink-600"
        >
          <FaInfoCircle></FaInfoCircle>
        </Link>
      </td>
    </tr>
  );
};

export default ToyItems;
