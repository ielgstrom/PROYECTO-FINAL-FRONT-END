import { useState } from "react";
import React from "react";

import { Principal } from "./componentes/Principal/Principal";
function App() {
  const [login, setLogin] = useState(true);
  const cambiar = () => {
    setLogin(!login);
  };
  return (
    <>
      {login && <div className="container-xl contenedorPrincipal-Login">
        <div className="login-center">
          <form className="form">
            <label htmlFor="username">Nombre de usuario:</label>
            <p></p>
            <input
              type="text"
              className="form-control"
              id="username"
            />
            <div className="form-group">
              <p></p>
              <label htmlFor="password">Contraseña:</label>
              <p></p>
              <input
                type="password"
                id="password"
                className="form-control"
              />
            </div>
            <p></p>
            <button className="btn-primary btn-lg" onClick={cambiar}>Iniciar Sesión</button>
          </form>
      </div>
      </div>}
      {!login && <Principal />}
    </>
  );
}
export default App;
