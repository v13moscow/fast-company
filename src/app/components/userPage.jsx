import React, { useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const UserPage = ({ id }) => {
  const history = useHistory();
  const handeleReturn = () => {
    history.replace("/users");
  };
  console.log(id);
  useEffect(() => {
    api.users.getById(id).then((data) => console.log(data));
  });

  return (
    <div>
      <h2>{}</h2>
      <button onClick={() => { handeleReturn(); }}>Users</button>
    </div>
  );
};
UserPage.propTypes = {
  id: PropTypes.string.isRequired
};
export default UserPage;
