import React from "react";
import PropTypes from "prop-types";
import User from "./user";

const UserTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => props.onSort("name")} scope="col">
            Имя
          </th>
          <th scope="col">Качества</th>
          <th onClick={() => props.onSort("profession.name")} scope="col">
            Профессия
          </th>
          <th onClick={() => props.onSort("completedMeetings")} scope="col">
            Встретился, раз
          </th>
          <th onClick={() => props.onSort("rate")} scope="col">
            Оценка
          </th>
          <th onClick={() => props.onSort("bookmark")} scope="col">
            Избранное
          </th>
          <th />
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
  onToggBookMark: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
};
export default UserTable;
