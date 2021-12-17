import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSopt, columns }) => {
  const handleSort = (item) => {
    if (selectedSopt.iter === item) {
      onSort({
        ...selectedSopt,
        order: selectedSopt.order === "asc" ? "desc" : "asc"
      });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map(column => (
          <th
            key={column}
            onClick={columns[column].iter
              ? () => handleSort(columns[column].iter)
              : undefined}
            {...{ role: columns[column].iter && "button" }}
            scope="col">
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSopt: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
};
export default TableHeader;
