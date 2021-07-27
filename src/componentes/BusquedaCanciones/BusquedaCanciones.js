import { useCallback } from "react";
import { useState, useEffect } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./BusquedaCanciones.css";
export const BusquedaCanciones = ({
  ListaCancionesPrueba,
  setCancionPuesta,
  cancionPuesta,
  setListaCancionesPrueba,
}) => {
  let location = useLocation();
  const [controladorMenu, setControladorMenu] = useState(true);

  const [listaCancionesBusqueda, setListaCancionesBusqueda] = useState([]);

  const busquedaCancion = useCallback(async () => {
    const { texto } = location.state;
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No hay token");
      return;
    }
    const resp = await fetch(
      `https://myrythm.herokuapp.com/cancion/busquedaCancion/${texto}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (resp.ok) {
      const datos = await resp.json();
      setListaCancionesBusqueda(datos);

      return;
    } else if (!resp.ok) {
      console.log("he falseado");
      setControladorMenu(false);
      return;
    }
  }, [location.state]);

  useEffect(busquedaCancion, [busquedaCancion]);

  let bool = false;
  if (listaCancionesBusqueda[0] !== undefined) {
    bool = true;
  }

  const seleccionarCancion = (elemento) => {
    debugger;
    setCancionPuesta({ cancion: elemento, indice: 0 });
    setListaCancionesPrueba([cancionPuesta]);
  };
  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusquedaCanciones">BUSQUEDA DE CANCIONES</h2>

        {bool &&
          listaCancionesBusqueda.map((cancion) => (
            <div key={cancion._id} className="tituloBusqueda">
              <div className="likesIzquierda">
                <FaPlay
                  onClick={() => seleccionarCancion(cancion)}
                  className="PlayLikesButton"
                />
                <div className="PlayTitlesButton">
                  {cancion.nombre}-{cancion.artista.nombre}
                </div>
              </div>
              <FaHeart className="basura" />
            </div>
          ))}
      </div>
    </>
  );
};

export default BusquedaCanciones;
