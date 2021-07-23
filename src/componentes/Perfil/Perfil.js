import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import "./Perfil.css";
import monotinder from "../../img/monoTinder.png";
import { useHistory } from "react-router-dom";
export const Perfil = () => {
  const token = localStorage.getItem("token");
  const { usuario } = jwt_decode(token);
  debugger;
  const history = useHistory();

  return (
    <>
      <div className="contenedorTotal">
        <div className="row contenedorPrincipal">
          <div className="col-10 informacionesPerfil">
            <div className="imagenPerfil row ">
              <img
                className="col-2 contenedorImagen"
                src={monotinder}
                alt="Mono"
                height={200}
                width={200}
              />

              <ul className="list-unstyled col-10 contenedorNombre">
                <li>
                  <p className="nombre">{usuario.username}</p>
                </li>
                <li>
                  <p className="nombre">{usuario.username}</p>
                </li>
              </ul>
              <ul className="list-unstyled row">
                <li className="col-12">
                  <p className="Ciudad">{usuario.localizacion.nombre}</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="generos">Generos favoritos</h2>
              <ul className="list-unstyled row">
                {usuario.generosPreferidos.map((genero) => {
                  return (
                    <li className="elecionGenero col-2">
                      <p className="generoCancion row">
                        <strong>{genero.nombre}</strong>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <div>
              <h2 className="generos">Ultimas Canciones Escuchadas</h2>
              <ul className="list-unstyled ultimasCansiones row">
                <li className="contenedorTitulos col-3 shadow ">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
                <li className="contenedorTitulos col-3 shadow ">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
                <li className="contenedorTitulos col-3 shadow ">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
              </ul>
              <ul className="list-unstyled row">
                <li className="contenedorTitulos col-3">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
                <li className="contenedorTitulos col-3">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
                <li className="contenedorTitulos col-3">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="contenedorBotones">
            <button className="botones2" onClick={() => history.push("/")}>
              <strong>Cerrar Sessión</strong>
            </button>
            <button className="botones2">
              <strong>Eliminar Cuenta</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Perfil;
