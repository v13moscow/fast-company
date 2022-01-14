import React from "react";
import PropTypes from "prop-types";

const SearchOverlay = ({ onSearch, searchOver }) => {
  return (
    <div className="mb-3">
      <input
        className="form-control"
        type= "text"
        value={searchOver}
        onChange={onSearch}
        placeholder="Search..."
      />
    </div>

  );
};
SearchOverlay.propTypes = {
  onSearch: PropTypes.func,
  searchOver: PropTypes.string
};
export default SearchOverlay;
