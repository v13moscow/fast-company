import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Избранное</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <User
            key={user._id}
            onDelete={props.onDelete}
            onToggBookMark={props.onToggBookMark}
            {...user}
          />
        ))}
      </tbody>
    </table>
  );
};
UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggBookMark: PropTypes.func.isRequired
};
export default UserTable;
