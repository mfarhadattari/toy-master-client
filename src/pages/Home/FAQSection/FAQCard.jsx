import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQCard = ({ faq, handleToggle, index, expandedIndex }) => {
  return (
    <div className="border p-3 rounded-xl shadow-lg">
      <h3 className="flex justify-between font-semibold items-center">
        {faq.question}
        <button
          onClick={() => handleToggle(index)}
          className="text-pink-600 btn btn-outline btn-circle btn-sm"
        >
          {expandedIndex === index ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
        </button>
      </h3>
      {expandedIndex === index && (
        <p className="mt-2 text-gray-600">{faq.answer}</p>
      )}
    </div>
  );
};

export default FAQCard;
