import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import "./Perfil.css";
import monotinder from "../../img/monoTinder.png";
import { useHistory } from "react-router-dom";
export const Perfil = () => {
  const token = "jwt token";
  const { usuario } = jwt_decode(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjYwZjE0MWIwNzUyYjI2NWE1NTUyNGFiYSIsInVzZXJuYW1lIjoiaXZhbiIsImdlbmVyb3NQcmVmZXJpZG9zIjpbeyJfaWQiOiI2MGYxM2UzZDc1MmIyNjVhNTU1MjRhOGMiLCJub21icmUiOiJNZXRhbGNvcmUifSx7Il9pZCI6IjYwZjEzZTRjNzUyYjI2NWE1NTUyNGE4ZCIsIm5vbWJyZSI6IlBvcCJ9LHsiX2lkIjoiNjBmMTNlNWE3NTJiMjY1YTU1NTI0YThlIiwibm9tYnJlIjoiUmVrZXRvbiJ9XSwidXJsRm90byI6InRvQmVTZXR0ZWQiLCJsb2NhbGl6YWNpb24iOnsiX2lkIjoiNjBmMTU5ODU3NTJiMjY1YTU1NTI0YjgwIiwibm9tYnJlIjoiQmFyY2Vsb25hIn0sImVtYWlsIjoiaXZhbmppbWx1cW1hbGxvcmNhQGdtYWlsLmNvbSJ9LCJpYXQiOjE2MjcwMjc3NTIsImV4cCI6MTYyOTYxOTc1Mn0.Ju9yexIpmpx5MmpCpQ9safgR17pOYEAd4aFR2GnWoWo"
  );
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
                      <p className="generoCancion row"><strong>{genero.nombre}</strong></p>
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
