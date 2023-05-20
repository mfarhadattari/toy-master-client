import { useState } from "react";

const Pagination = ({ totalPages, setPerPage, setCurrentPage, perPage }) => {
  const options = [10, 15, 20];
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }

  const [pageActive, setPageActive] = useState(0);

  const handelPaginationNavigate = (page) => {
    setCurrentPage(page);
    setPageActive(page);
  };

  return (
    <div className="w-full flex flex-wrap items-center gap-5 mx-auto my-10 justify-between p-5">
      <div className="flex flex-wrap gap-2 w-fit items-center">
        <label className="text-xl font-light">Pages:</label>
        {pages.map((page) => (
          <button
            className={`btn btn-sm btn-circle btn-outline text-lg  ${
              pageActive !== page
                ? "text-pink-600"
                : "bg-pink-600 border-0 text-white"
            }`}
            key={page}
            onClick={() => handelPaginationNavigate(page)}
          >
            {page + 1}
          </button>
        ))}
      </div>
      <div className="flex gap-2 items-center w-fit">
        <label className="text-xl font-light">Item:</label>
        <select
          className="select text-pink-600 border-pink-600  w-[80px] mx-auto focus:outline-none"
          defaultValue={perPage}
          onChange={() => setPerPage(event.target.value)}
        >
          {options.map((option, idx) => (
            <option key={idx}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
