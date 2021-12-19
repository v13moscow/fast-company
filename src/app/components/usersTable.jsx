import React from "react";
// import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const UsersTable = ({ users, onSort, selectedSort, ...rest }) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { path: "profession.name", name: "Провфессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: { path: "bookmark", name: "Избранное" },
    delete: {}
  };
  return (
    <table className="table">
      <TableHeader
        {...{ onSort, selectedSort, columns }}
      />
      <TableBody {...{ columns, data: users }}/>
      {/* <tbody>
        {users.map((user) => (
          <User {...rest} {...user} key={user._id} />
        ))}
      </tbody> */}
    </table>
  );
};
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired
};
export default UsersTable;
