import jwt_decode from "jwt-decode";
import { useState, useEffect, useCallback } from "react";
import { desloguearUsuario } from "../../contextos/AuthContextProvider";
import "./Perfil.css";
import monotinder from "../../img/hombreproyecto.jpg";
import { useHistory } from "react-router-dom";
export const Perfil = (props) => {
  const { login, setLogin } = props;
  const token = localStorage.getItem("token");
  const { usuario } = jwt_decode(token);

  const desloguearUsuario = () => {
    localStorage.setItem("login", false);
    setLogin(false);
  };

  return (
    <>
      <div className="container contenedorTotal Main header">
        <div className="row contenedorPrincipal row-cols-2">

          {/* <!-- fila 1 columna 1 --> */}
          <div className="row">
            <h1 className="nombre"> Hola {usuario.username}</h1>
          </div>
            {/* <!-- fila 2 columna 1 --> */}
            <div className="row">
              <ul className="list-unstyled">
                <li>
                <p className="Ciudad"> <b>Localización:</b> {usuario.localizacion.nombre}</p>
                </li>
              </ul>
              </div>
            {/* <!-- fila 2 columna 2 --> */}
            <div className="imagenPerfil row">
              <ul className="list-unstyled">
                <img
                  className="contenedorImagen"
                  src={monotinder}
                  alt="Mono"
                  width="200" height="100"
                />
              </ul>
            </div>
          {/* <!-- fila 3 columna 1 --> */}
          <div className="row">
            <div className="col">
              <h2 className="generos">Generos favoritos</h2>
            </div>
          </div>
            {/* <!-- fila 4 y fila 5 columnas 1,2,3,4,5,6 --> */}
            <div className="contenedorGeneros">
            <ul className="list-unstyled row">
                {usuario.generosPreferidos.map((genero) => {
                  return (
                    <>
                      <ul className="list-unstyled contenedorGeneros row">
                        {usuario.generosPreferidos.map((genero) => {
                          return (
                            <li className="elecionGenero">
                              <p className="generoCancion  col-4">
                                <strong>{genero.nombre}</strong>
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                })}
              </ul>
            </div>
            {/* <!-- fila 6 columnas 1,2--> */}
            <div className="container contenedorBotones row-cols-2">
              <div className="col">
                <button className="botones2" onClick={desloguearUsuario}>
                  <strong>Cerrar Sessión</strong>
                </button>
              </div>

              <div className="col">
                <button className="botones3 ">
                  <strong>Eliminar Cuenta</strong>
                </button>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};
export default Perfil;
