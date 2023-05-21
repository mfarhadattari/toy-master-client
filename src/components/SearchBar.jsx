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
    <form className="w-1/2 mx-auto" onSubmit={handelSearch}>
      <div className="form-control w-full relative text-xl">
        <input
          type="search"
          placeholder="Search toy by name or keyword or letter"
          className="input input-bordered  w-full h-14 ps-14 text-xl"
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
