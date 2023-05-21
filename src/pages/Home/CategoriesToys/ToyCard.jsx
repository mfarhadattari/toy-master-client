import { Rating } from "@smastrom/react-rating";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toyInfo }) => {
  const { _id, name, category, img, rating, price, quantity } = toyInfo;
  return (
    <div className="border rounded-xl relative shadow-xl">
      {/* --------------------- toy information -------------- */}
      <div className="w-full p-5 mb-10 space-y-5">
        <img src={img} className="h-56 w-56 rounded-xl" />
        <div className="w-full">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-semibold">Category: {category}</p>
          <div className="flex flex-wrap justify-between items-center my-3">
            <p>Price: {price} Tk</p>
            <p>Quantity: {quantity} pc</p>
            <div className="flex gap-2 items-center tooltip w-fit">
              Rating:
              <span className="tooltip tooltip-bottom" data-tip={rating}>
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- view details btn-------------- */}
      <Link
        to={`/toy/${_id}`}
        className="btn flex gap-2 items-center bg-pink-600 text-xl border-0 hover:bg-white hover:outline outline-1 hover:text-pink-600 w-full absolute bottom-0 rounded-none rounded-b-xl h-14"
      >
        <FaInfoCircle></FaInfoCircle> View Details
      </Link>
    </div>
  );
};

export default ToyCard;
