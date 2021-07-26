import { useState, useCallback, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./CancionesFavoritas.css";
import { FaBan, FaPlay, FaTrash } from "react-icons/fa";
export const CancionesFavoritas = ({
  ListaCancionesPrueba,
  setCancionPuesta,
  cancionPuesta,
  setListaCancionesPrueba,
}) => {
  // ListaCancionesPrueba = [
  //   {
  //     url:
  //       "https://soundcloud.com/fiorinien/kate-bush-running-up-that-hill",
  //     artista: "Kate Bush",
  //     título: "Running Up That Hill",
  //   },
  // ];
  // const [anulador, setAnulador] = useState(false);

  const [listaMegustan, setListaMeGustan] = useState([]);
  const busquedaMegusta = useCallback(async () => {
    console.log("he empezado a buscar");

    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    const id_persona = decoded.usuario._id;
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
  }, []);

  useEffect(busquedaMegusta, [busquedaMegusta]);

  const seleccionarCancion = (elemento) => {
    setCancionPuesta({ cancion: elemento, indice: 0 });
    setListaCancionesPrueba([cancionPuesta]);
  };

  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusquedaFavs">LISTA DE CANCIONES FAVORITAS</h2>
        <div className="scrollLikes">
          {listaMegustan.map((elemento) => (
            <div key={elemento._id} className="tituloBusqueda">
              <div className="likesIzquierda">
                <FaPlay
                  onClick={() => seleccionarCancion(elemento)}
                  className="PlayLikesButton"
                />
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
