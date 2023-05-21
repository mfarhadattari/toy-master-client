import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchByNameKeywordLetter }) => {
  const handelSearch = (event) => {
    event.preventDefault();
    const value = event.target.search.value;
    searchByNameKeywordLetter(value);
  };

  const handelSearchInput = (event) => {
    const value = event.target.value;
    searchByNameKeywordLetter(value);
  };

  return (
    <form className="w-full md:w-3/4 lg:w-1/2 mx-auto p-5" onSubmit={handelSearch}>
      <div className="form-control w-full relative ">
        <input
          type="search"
          placeholder="Search toy by name or keyword or letter"
          className="input input-bordered  w-full h-14 ps-14 "
          name="search"
          onChange={handelSearchInput}
        />
        <span className="absolute top-5 left-5 text-gray-500">
          <FaSearch></FaSearch>
        </span>
        <button
          type="submit"
          className="btn border-0 bg-pink-600  absolute right-0 h-full"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
