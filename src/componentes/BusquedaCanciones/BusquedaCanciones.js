import { useCallback } from "react";
import { useState, useEffect } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import { useLocation } from "react-router-dom";
// import { texto } from "../Siderbarizquierdo/SidebarIzquierdo";
import "./BusquedaCanciones.css";
export const BusquedaCanciones = () => {
  let location = useLocation();
  const { texto } = location.state;
  const [controladorMenu, setControladorMenu] = useState(true);
  const [parche, setParche] = useState(false);
  // useEffect(() => console.log(texto), [texto]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImdlbmVyb3NQcmVmZXJpZG9zIjpbIjYwZjEzZTNkNzUyYjI2NWE1NTUyNGE4YyJdLCJfaWQiOiI2MGYxNDFiMDc1MmIyNjVhNTU1MjRhYmEiLCJ1c2VybmFtZSI6Iml2YW4iLCJwYXNzd29yZCI6ImF5eWJhIiwidXJsRm90byI6InRvQmVTZXR0ZWQiLCJsb2NhbGl6YWNpb24iOiI2MGYxNTk4NTc1MmIyNjVhNTU1MjRiODAiLCJlbWFpbCI6Iml2YW5qaW1sdXFtYWxsb3JjYUBnbWFpbC5jb20ifSwiaWF0IjoxNjI2NjIzODMyLCJleHAiOjE2MjkyMTU4MzJ9.o99nYr7aBfVLrbWTQG3GnMFX80x8qOsvYHO9jczNeS8";
  const [listaCancionesBusqueda, setListaCancionesBusqueda] = useState([]);

  const busquedaCancion = useCallback(async (nombrecancion) => {
    console.log("he empezado a buscar");

    if (!token) {
      console.log("No hay token");
      return;
    }

    const resp = await fetch(
      `https://myrythm.herokuapp.com/cancion/busquedaCancion/${nombrecancion}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(resp.ok);
    if (resp.ok) {
      const datos = await resp.json();
      setListaCancionesBusqueda(datos);
      return;
    } else {
      console.log("he falseado");
      setControladorMenu(false);
      return;
    }
  }, []);

  useEffect(() => busquedaCancion(texto), [busquedaCancion, texto]);

  let bool = false;
  if (listaCancionesBusqueda[0] !== undefined) {
    bool = true;
  }
  console.log(`${bool}, ${controladorMenu}`);
  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusquedaCanciones">BUSQUEDA DE CANCIONES</h2>

        {bool &&
          listaCancionesBusqueda.map((cancion) => (
            <div key={cancion._id} className="tituloBusqueda">
              <div className="likesIzquierda">
                <FaPlay className="PlayLikesButton" />
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
