import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => { // DZ 3 6,00 if(order === 'asc')
    if (selectedSort.iter === item) {
      console.log(selectedSort.order);
      onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map(column => (
          <th key={column}
            onClick={columns[column].iter ? () => handleSort(columns[column].iter) : undefined}
            scope="col"
            {...{ role: columns[column].iter && "button" }}
          >
            <i className="bi bi-caret-down-fill"></i>
            {columns[column].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
};
export default TableHeader;
