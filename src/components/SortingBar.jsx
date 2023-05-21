import React from "react";

const SortingBar = ({ sortBy, setSortBy }) => {
  const sortSelector = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex items-center justify-end gap-3 w-full mx-auto">
      <label>Sort:</label>
      <select
        defaultValue={sortBy}
        className="select select-bordered"
        onChange={sortSelector}
      >
        <option>None</option>
        <option>Ascending (price)</option>
        <option>Descending (price)</option>
      </select>
    </div>
  );
};

export default SortingBar;
