import React from "react";
import { MdSearch } from "react-icons/md";

const SearchTask = ({ setSearchKey }) => {
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="SearchTask">
      <button className="SearchTask__btn">
        <MdSearch className="SearchTask__icon" />
      </button>
      <input
        onChange={handleChange}
        type="search"
        className="SearchTask__input"
        placeholder="Search Here"
      />
    </div>
  );
};

export default SearchTask;
