import { useState } from "react";
import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import { Principal } from "./componentes/Principal/Principal";
import { Login } from "./componentes/Login/Login";
function App() {

  const [login, setLogin] = useState(localStorage.getItem("login") || false);

  return (

  <div>
    <Router>
      <Login login={login} setLogin={setLogin} />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
          {!login && <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;
