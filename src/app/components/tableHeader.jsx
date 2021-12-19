import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => { // DZ 3 6,00 if(order === 'asc')
    if (selectedSort.path === item) {
      console.log(selectedSort.order);
      onSort({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map(column => (
          <th key={column}
            onClick={columns[column].path ? () => handleSort(columns[column].path) : undefined}
            scope="col"
            {...{ role: columns[column].path && "button" }}
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
