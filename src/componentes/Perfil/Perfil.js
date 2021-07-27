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
        <div className="col contenedorPrincipal">

          {/* <!-- fila 1 columna 1 --> */}
          <div className="col">
            <h1 className="nombre"> Hola {usuario.username}</h1>
          </div>
          <div className="col">
            {/* <!-- fila 2 columna 1 --> */}
            <div className="row">
              <ul className="list-unstyled">
                <li>
                  <p className="Ciudad">{usuario.localizacion.nombre}</p>
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
          </div>
          {/* <!-- fila 3 columna 1 --> */}
          <div className="col">
            <h2 className="generos">Generos favoritos</h2>
          </div>
          <div className="col">
            {/* <!-- fila 4 y fila 5 columnas 1,2,3,4,5,6 --> */}
            <div className="row contenedorGeneros">
              <ul className="list-unstyled ">
                {usuario.generosPreferidos.map((genero) => {
                  return (
                    <div clasName="col">
                      <div className="row-sm">
                        <li className="elecionGenero">
                          <p className="generoCancion  row-4">
                            <strong>{genero.nombre}</strong>
                          </p>
                        </li>
                      </div>

                      <div clasName="col">
                        <div className="row-sm">
                          <li className="elecionGenero">
                            <p className="generoCancion  row-4">
                              <strong>{genero.nombre}</strong>
                            </p>
                          </li>
                        </div>
                      </div>
                      </div>
                      );
              })}
              </ul>
                    </div>
      {/* <!-- fila 6 columnas 1,2--> */ }
                  <div className="contenedorBotones row">
                    <div className="col">
                      <button className="botones2" onClick={desloguearUsuario}>
                        <strong>Cerrar Sessión</strong>
                      </button>
                    </div>

                    <div className="col">
                      <button className="botones2 ">
                        <strong>Eliminar Cuenta</strong>
                      </button>
                      </div>
                    </div>
                    </div>
                  </div>
            </div>
    </>
            );
};
            export default Perfil;
