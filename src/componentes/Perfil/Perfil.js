import jwt_decode from "jwt-decode";
import { useState, useEffect, useCallback } from "react";
import { desloguearUsuario } from "../../contextos/AuthContextProvider";
import "./Perfil.css";
import monotinder from "../../img/hombreproyecto.jpg";

export const Perfil = (props) => {
  const { login, setLogin } = props;
  const token = localStorage.getItem("token");
  const { usuario } = jwt_decode(token);

  const desloguearUsuario = () => {
    localStorage.setItem("login", false);
    setLogin(false);
  };

  const [favGeneros, setFavGeneros] = useState([]);
  const listarGeneros = useCallback(async () => {
    if (!token) {
      console.log("No hay token");
      return;
    }

    const resp = await fetch(
      `https://myrythm.herokuapp.com/usuario/${usuario}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const datos = await resp.json();
    setFavGeneros(datos.generosPreferidos);
  }, [token, usuario]);

  useEffect(listarGeneros, [listarGeneros]);
  return (
    <>
      <div className="contenedorTotal Main header">
        <div className="row contenedorPrincipal ">
          {/* <!-- fila 1 columna 1 --> */}
          <div className="col-12">
            <h1 className="nombre"> Hola {usuario.username}</h1>
          </div>
          {/* <!-- fila 2 columna 1 --> */}
          <div className="imagenPerfil col-3">
            <img
              className="contenedorImagen"
              src={monotinder}
              alt="Mono"
              width="200"
              height="100"
            />
          </div>
          <div className="col-8">
            <p className="datosPersonales">
              <b>Correo:</b> {usuario.email}
            </p>
            <p className="datosPersonales">
              <b>Localización:</b> {usuario.localizacion.nombre}
            </p>
          </div>

          <div className="col-12">
            <h2 className="generos">Generos favoritos</h2>
          </div>
          {/* <!-- fila 4 y fila 5 columnas 1,2,3,4,5,6 --> */}
          <div className="contenedorGeneros col-12">
            <ul className="justify-content-between row">
              {usuario.generosPreferidos.map((genero) => (
                <p key={genero.nombre} className="generoCancion col-3">
                  <strong>{genero.nombre}</strong>
                </p>
              ))}
            </ul>
          </div>
          {/* <!-- fila 6 columnas 1,2--> */}
          <div className="col-12 apartadoSesion">
            <div className="row jusify-content-around contenedorBotones">
              <div className="col-6 formaBoton" align="center">
                <button className="botones2" onClick={desloguearUsuario}>
                  <strong>Cerrar Sessión</strong>
                </button>
              </div>

              <div className="col-6 formaBoton" align="center">
                <button className="botones3 ">
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
