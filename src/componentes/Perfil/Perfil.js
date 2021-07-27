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
      <div className="contenedorTotal Main header">
        <div className="row contenedorPrincipal">
          <div className="imagenPerfil row">
            <img
              className="col-3 contenedorImagen"
              src={monotinder}
              alt="Mono"
            />
            <ul className="list-unstyled col-9 contenedorNombre">
              <li>
                <p className="nombre">{usuario.username}</p>
              </li>
              <li>
                <p className="nombre">{usuario.username}</p>
              </li>
            </ul>
          </div>
          <ul className="list-unstyled row">
            <li className="col-12">
              <p className="Ciudad">{usuario.localizacion.nombre}</p>
            </li>
          </ul>

          <div>
            <h2 className="generos">Generos favoritos</h2>
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
          </div>
          <div className="contenedorBotones">
            <button className="botones2" onClick={desloguearUsuario}>
              <strong>Cerrar Sessión</strong>
            </button>
            <button className="botones2 ">
              <strong>Eliminar Cuenta</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Perfil;
