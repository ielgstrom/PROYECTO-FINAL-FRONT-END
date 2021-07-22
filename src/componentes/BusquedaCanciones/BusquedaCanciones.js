import { useState, useEffect } from "react";
import { FaHeart, FaPlay } from "react-icons/fa";
import "./BusquedaCanciones.css";
export const BusquedaCanciones = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImdlbmVyb3NQcmVmZXJpZG9zIjpbIjYwZjEzZTNkNzUyYjI2NWE1NTUyNGE4YyJdLCJfaWQiOiI2MGYxNDFiMDc1MmIyNjVhNTU1MjRhYmEiLCJ1c2VybmFtZSI6Iml2YW4iLCJwYXNzd29yZCI6ImF5eWJhIiwidXJsRm90byI6InRvQmVTZXR0ZWQiLCJsb2NhbGl6YWNpb24iOiI2MGYxNTk4NTc1MmIyNjVhNTU1MjRiODAiLCJlbWFpbCI6Iml2YW5qaW1sdXFtYWxsb3JjYUBnbWFpbC5jb20ifSwiaWF0IjoxNjI2NjIzODMyLCJleHAiOjE2MjkyMTU4MzJ9.o99nYr7aBfVLrbWTQG3GnMFX80x8qOsvYHO9jczNeS8";
  const [listaCancionesBusqueda, setListaCancionesBusqueda] = useState([]);
  console.log("estoy fuera del bucle");
  const busquedaCancion = async (carrion) => {
    console.log("he empezado a buscar");

    if (!token) {
      console.log("No hay token");
      return;
    }

    const resp = await fetch(
      `https://myrythm.herokuapp.com/cancion/busquedaCancion/${carrion}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const datos = await resp.json();
    setListaCancionesBusqueda(datos);
  };

  useEffect(() => busquedaCancion("carrion"), []);

  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusquedaCanciones">BUSQUEDA DE CANCIONES</h2>
        {listaCancionesBusqueda.map((cancion) => (
          <div key={cancion._id} className="tituloBusqueda">
            <div className="likesIzquierda">
              <FaPlay className="PlayLikesButton" />
              <div className="PlayTitlesButton">
                {cancion.nombre}-{cancion.artista}
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
