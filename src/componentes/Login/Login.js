import { useState } from "react";
import "./Login.css";

export const Login = (props) => {
  const { setLogin } = props;
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const entrar = async (username, password) => {
    const credencials = { user:username, pass: password};
    const resp = await fetch(
      "https://myrythm.herokuapp.com/usuario/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credencials),
      }
    );
    if (resp.ok) {
      setError(false);
      const { token } = await resp.json();
      localStorage.setItem("token", token);
      localStorage.setItem("login", true);
      setLogin(true);
    } else {
      setError(true);
      setLogin(false);
    }
  };


  return (
    <>
      <div className="container-xl contenedorPrincipal-Login">
        <div className="login-center">
          <form className="form">
            <label htmlFor="username">Nombre de usuario:</label>
            <p></p>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <div className="form-group">
              <p></p>
              <label htmlFor="password">Contraseña:</label>
              <p></p>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
            </div>
            <div className="form-group">
              <label
                htmlFor="recordarPassword"
                className="form-check-label fw-bold"
              >
                ¿Has olvidado tu contraseña?
              </label>
            </div>
            <p></p>
            <div className="boton-login ">
              <button
                className="btn-primary btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  entrar(username, password);
                }}
              >
                Iniciar Sesión
              </button>
              {error && <p>Error d'autentificació</p>}
            </div>
            <hr className="linea-divisoria"></hr>
            <div className="form-group">
              <label
                htmlFor="recordarPassword"
                className="form-check-label fw-bold"
              >
                ¿No tienes cuenta?
              </label>
            </div>
            <div className="boton-login">
              <button
                className="btn-primary btn-lg "
              /*onClick={cambiarARegister}*/
              >
                {" "}
                Registrarme <i className="icon-logo"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
