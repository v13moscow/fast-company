import React from "react";
import PropTypes from "prop-types";

const BookMark = (props) => {
  const changeBookClass = (book) => {
    return book ? "bi bi-bookmark-fill" : "bi bi-bookmark";
  };
  return (
    <div>
      <button onClick={props.onToggle}>
        <i className={changeBookClass(props.bookmark)}></i>
      </button>
    </div>
  );
};
BookMark.propTypes = {
  onToggle: PropTypes.func.isRequired,
  bookmark: PropTypes.bool
};
export default BookMark;
