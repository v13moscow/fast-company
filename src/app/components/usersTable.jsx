import React from "react";
import PropTypes from "prop-types";
import User from "./user";
import TableHeader from "./tableHeader";

const UserTable = (props) => {
  const { selectedSopt } = props;
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился, раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {}
  };
  return (
    <table className="table">
      <TableHeader {...{ selectedSopt, ...props, columns }}/>
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
  onSort: PropTypes.func.isRequired,
  selectedSopt: PropTypes.object.isRequired
};
export default UserTable;
