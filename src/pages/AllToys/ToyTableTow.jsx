import { Rating } from "@smastrom/react-rating";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyTableTow = ({ toyInfo }) => {
  const {
    _id,
    name,
    category,
    img,
    rating,
    price,
    quantity,
    sellerAvatar,
    seller,
  } = toyInfo;

  return (
    <tr className="shadow-lg rounded-xl">
      {/* -------------------- | SELLER INFORMATION | --------------------- */}
      <td className="flex justify-center md:justify-start mr-10 p-5 mt-10">
        <div className="flex items-center gap-5 border-b-2 pb-4 w-full">
          <div className="avatar">
            <div className=" w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  sellerAvatar ||
                  `https://cdn-icons-png.flaticon.com/128/3177/3177440.png`
                }
              />
            </div>
          </div>
          <div className="text-start">
            <h1 className="font-bold">{seller}</h1>
            <h2>Seller </h2>
          </div>
        </div>
      </td>
      {/* ----------------------- TOY DATA ---------------- */}
      <td className="flex flex-col md:flex-row gap-5 p-5">
        <div className="w-1/2 flex items-center">
          <div className="avatar">
            <div className="w-56 h-56 rounded-md">
              <img src={img} />
            </div>
          </div>
        </div>
        <div className="w-full text-start space-y-3">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-semibold">Category: {category}</p>
          <div className="space-y-2">
            <p>Price: {price} Tk</p>
            <p>Quantity: {quantity} pc</p>
            <div className="flex gap-2 items-center tooltip w-fit">
              Rating:
              <span className="tooltip tooltip-bottom" data-tip={rating}>
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              </span>
            </div>
            <Link
              to={`/toy/${_id}`}
              className="btn flex gap-2 items-center w-fit bg-pink-600 text-base border-0 hover:bg-white hover:outline outline-1 hover:text-pink-600"
            >
              <FaInfoCircle></FaInfoCircle> View Details
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ToyTableTow;
