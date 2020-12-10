import React from "react";
import "./filterControls.css";

const FilterControls = props => {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <div className="filter-controls row">
      <div className="col-md-12">
        <h4>
          <span>List Filtering :</span>
          <input
            type="text"
            placeholder= "Search"
            onChange={handleTextChange}
          />
        </h4>
      </div>
    </div>
  );
};

export default FilterControls;