import React from "react";
import PropTypes from "prop-types";
// import User from "./user";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const UserTable = (props) => {
  const { selectedSopt } = props;
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: { path: "bookmark", name: "Избранное" },
    delete: {}
  };
  return (
    <table className="table">
      <TableHeader {...{ selectedSopt, ...props, columns }}/>
      <TableBody {...{ columns, data: props.users }} />
    </table>
  );
};
UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggBookMark: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSopt: PropTypes.object.isRequired
};
export default UserTable;
