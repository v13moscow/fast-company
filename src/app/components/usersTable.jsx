import React from "react";
import User from "./user";
import PropTypes from "prop-types";

const UsersTable = ({ users, onSort, currentSort, ...rest }) => {
  const handleSort = (item) => { // DZ 3 6,00 if(order === 'asc')
    if (currentSort.iter === item) {
      onSort({ ...currentSort, order: currentSort.order === "asc" ? "desc" : "asc" });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")} scope="col"><i className="bi bi-caret-down-fill"></i>Имя</th>
          <th scope="col">Качества</th>
          <th onClick={() => handleSort("profession.name")} scope="col"><i className="bi bi-caret-down-fill"></i>Провфессия</th>
          <th onClick={() => handleSort("completedMeetings")} scope="col"><i className="bi bi-caret-down-fill"></i>Встретился, раз</th>
          <th onClick={() => handleSort("rate")} scope="col"><i className="bi bi-caret-down-fill"></i>Оценка</th>
          <th onClick={() => handleSort("bookmark")} scope="col"><i className="bi bi-caret-down-fill"></i>Избранное</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User {...rest} {...user} key={user._id} />
        ))}
      </tbody>
    </table>
  );
};
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  currentSort: PropTypes.object.isRequired
};
export default UsersTable;
