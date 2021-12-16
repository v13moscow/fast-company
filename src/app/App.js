import React, { useState, useEffect } from "react";
import Users from "./components/users";
import api from "./api";
import PropTypes from "prop-types";

const App = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const hendleToggBookMark = (id) => {
    const newToggBookMark = users.map((item) => {
      if (item._id !== id) {
        return item;
      }
      return {
        ...item,
        bookmark: !item.bookmark
      };
    });
    setUsers(newToggBookMark);
  };
  return (
    <div>
      {users && (
        <Users
          usersApp={users}
          onDelete={handleDelete}
          onToggBookMark={hendleToggBookMark}
        />
      )}
    </div>
  );
};
App.propTypes = {
  users: PropTypes.array,
  setUsers: PropTypes.func
};
export default App;
