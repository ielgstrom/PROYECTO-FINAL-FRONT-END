import { useState, useCallback, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./CancionesFavoritas.css";
import { FaBan, FaPlay, FaTrash } from "react-icons/fa";
export const CancionesFavoritas = () => {
  // ListaCancionesPrueba = [
  //   {
  //     urlsong2:
  //       "https://soundcloud.com/fiorinien/kate-bush-running-up-that-hill",
  //     artista: "Kate Bush",
  //     título: "Running Up That Hill",
  //   },
  // ];
  const [anulador, setAnulador] = useState(false);
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id_persona = decoded.usuario._id;

  const [listaMegustan, setListaMeGustan] = useState([]);
  const busquedaMegusta = useCallback(async () => {
    console.log("he empezado a buscar");

    if (!token) {
      console.log("No hay token");
      return;
    }

    const resp = await fetch(
      `https://myrythm.herokuapp.com/cancion/listaMegusta`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (resp.ok) {
      const datos = await resp.json();
      setListaMeGustan(datos);
    }
  }, [token]);

  useEffect(busquedaMegusta, [busquedaMegusta]);
  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusquedaFavs">LISTA DE CANCIONES FAVORITAS</h2>
        <div className="scrollLikes">
          {listaMegustan.map((elemento) => (
            <div className="tituloBusqueda">
              <div className="likesIzquierda">
                <FaPlay className="PlayLikesButton" />
                <div className="PlayTitlesButton">
                  {elemento.nombre} - {elemento.artista.nombre}
                </div>
              </div>
              <FaBan className="basura" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CancionesFavoritas;
