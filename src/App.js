import { useState } from "react";
import React from "react";
import { Principal } from "./componentes/Principal/Principal";
function App() {
  const [login, setLogin] = useState(true);
  const cambiarAPaginaPrincipal = () => {
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
            <div className="form-group">
              <label htmlFor="recordarPassword" className="form-check-label fw-bold">
                ¿Has olvidado tu contraseña?
              </label>
            </div>
            <p></p>
            <div className="boton-login ">
            <button className="btn-primary btn-lg" onClick={cambiarAPaginaPrincipal}>Iniciar Sesión</button>
            </div>
            <hr className="linea-divisoria"></hr>
            <div className="form-group">
              <label htmlFor="recordarPassword" className="form-check-label fw-bold">
                ¿No tienes cuenta?
              </label>
            </div>
            <div className="boton-login">
              <button className="btn-primary btn-lg">Registrarme</button>
            </div>
          </form>
        </div>
      </div>}
      {!login && <Principal />}
    </>
  );
}
export default App;
