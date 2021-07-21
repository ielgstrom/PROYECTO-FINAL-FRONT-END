//import PropTypes from "prop-types";
import { useState } from "react";
import { useFormulario } from "../hooks/useFormulario";
import {
  datosAccesoSchema
} from "../schemas/datosSchemas";

export const Login = (props) => {
  const {
    datosRegistro,
    datosAcceso,
    setDatosAcceso,
  } = props;
  const {
    datos: { username, password, recordarPassword },
    setDato,
    formularioInvalido,
  } = useFormulario(datosAcceso);
  const [error, setError] = useState(false);
  const compruebaLogin = (e) => {
    e.preventDefault();
    if (
      username === datosRegistro.username &&
      password === datosRegistro.password
    ) {
      setDatosAcceso({ username, password, recordarPassword });
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <div class= "container fondo-login rounded-3">
        <form noValidate onSubmit={compruebaLogin}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              value={username}
              onChange={setDato}
              className="form-control"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={setDato}
              id="password"
              className="form-control"
            />
          </div>
            <label htmlFor="recordarPassword" className="form-check-label fw-bold">
              ¿Has olvidado tu contraseña?
            </label>
          <div className="form-check">
            <input
              type="checkbox"
              id="recordarPassword"
              className="form-check-input"
              checked={recordarPassword}
              onChange={setDato}
            />
            <label htmlFor="recordarPassword" className="form-check-label">
              Recordar contraseña
            </label>
          </div>
            <br></br>
          <button
            className="boton-inicio-sesion btn btn-primary btn-lg align-center"
            type="submit"
          //disabled={formularioInvalido}
          >
            Iniciar Sesión
          </button>
          {error && <p className="error">Credenciales erróneas</p>}
        </form>
        </div>
    </>
  );
};

Login.propTypes = {
  datosAcceso: datosAccesoSchema,
};
