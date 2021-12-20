import React from "react";
import Quality from "./quality";
import PropTypes from "prop-types";

const QualityList = ({ qualities }) => {
  return (
    <>
      {qualities.map((qual) => (
        <Quality key={qual._id} {...qual} />
      ))}
    </>
  );
};
QualityList.propTypes = {
  qualities: PropTypes.array.isRequired
};
export default QualityList;
