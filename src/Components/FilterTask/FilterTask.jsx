import React from "react";
import { useState } from "react";
import { SearchTask } from "../";
const FilterTask = ({ categories, tasks, updateFilter, setSearchKey }) => {
  const [filter, setFilter] = useState(categories.all);

  const handleFilter = (e) => {
    const category = e.target.innerText.toLowerCase();
    setFilter(categories[category]);
    updateFilter(categories[category]);
  };

  return (
    <div className="FilterTask">
      <div className="FilterTask__left-items">
        <span className="FilterTask__count">
          {tasks.filter((task) => !task.status).length}
        </span>
        items left
      </div>
      <div className="FilterTask__categories">
        <span
          onClick={handleFilter}
          className={
            filter === categories.all
              ? "FilterTask__category active"
              : "FilterTask__category"
          }
        >
          All
        </span>
        <span
          onClick={handleFilter}
          className={
            filter === categories.active
              ? "FilterTask__category active"
              : "FilterTask__category"
          }
        >
          Active
        </span>
        <span
          onClick={handleFilter}
          className={
            filter === categories.completed
              ? "FilterTask__category active"
              : "FilterTask__category"
          }
        >
          Completed
        </span>
      </div>
      <SearchTask setSearchKey={setSearchKey} />
    </div>
  );
};

export default FilterTask;
