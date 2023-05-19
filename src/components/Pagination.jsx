const Pagination = ({ totalPages, setPerPage, setCurrentPage, perPage }) => {
  const options = [10, 15, 20];
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 w-fit mx-auto items-center my-10">
      <select
        className="select border-2 border-pink-600 w-[80px] focus:outline-none"
        defaultValue={perPage}
        onChange={() => setPerPage(event.target.value)}
      >
        {options.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>
      {pages.map((page) => (
        <button
          className="btn btn-sm btn-circle btn-outline text-pink-600 text-lg hover:bg-pink-600 hover:border-0"
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
