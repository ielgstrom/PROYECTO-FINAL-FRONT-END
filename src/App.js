import { useState } from "react";
import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
  import { Principal } from "./componentes/Principal/Principal";
  import { Login } from "./componentes/Login/Login";
function App() {

  const [login, setLogin] = useState(localStorage.getItem("login") || false);
  debugger;
  return (

  <div>
    <Router>
      <Login login={login} setLogin={setLogin} />
      <Switch>
          <Route exact path="/principal">
            <Principal />
          </Route>
      </Switch>
    </Router>
  </div>
);
}
export default App;
