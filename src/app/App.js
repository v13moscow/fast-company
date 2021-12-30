import React from "react";
import Navbar from "./components/navbar";
import Users from "./components/layouts/users";
import Main from "./components/layouts/main";
import UserPage from "./components/userPage";
import { Route, Switch } from "react-router-dom";
import Login from "./components/layouts/login";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Main } />
        <Route path="/login" component={ Login } />
        <Route path="/users/:userId" component={ UserPage } />
        <Route path="/users" component={ Users } />
      </Switch>
    </div>
  );
}

export default App;
