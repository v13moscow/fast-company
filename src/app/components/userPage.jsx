import React, { useEffect, useState } from "react";
import api from "../api";
import QualitiesList from "./qualityList";
import { useHistory, useParams } from "react-router-dom";

const UserPage = () => {
  const history = useHistory();
  const handeleReturn = () => {
    history.replace("/users");
  };
  const [user, setUser] = useState();
  const { userId } = useParams();
  useEffect(() => {
    api.users.getById(userId).then(user => setUser(user));
  }, []);
  if (user === undefined) {
    return <h1>Loading</h1>;
  };
  return (
    <div className="user-info">
      <h1>{user.name}</h1>
      <h3>Профессия: {user.profession.name}</h3>
      <QualitiesList qualities={user.qualities} />
      <div>completedMeetings: {user.completedMeetings}</div>
      <h3>Rate: {user.rate}</h3>
      <button onClick={() => { handeleReturn(); }}>Все пользователи</button>
    </div>
  );
};

export default UserPage;
