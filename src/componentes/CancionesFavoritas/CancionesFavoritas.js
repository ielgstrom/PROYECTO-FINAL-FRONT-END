import { useState, useCallback, useEffect } from "react";
import jwt_decode from "jwt-decode";
import "./CancionesFavoritas.css";
import { FaBan, FaPlay, FaTrash } from "react-icons/fa";
export const CancionesFavoritas = ({ ListaCancionesPrueba }) => {
  ListaCancionesPrueba = [
    {
      urlsong2:
        "https://soundcloud.com/fiorinien/kate-bush-running-up-that-hill",
      artista: "Kate Bush",
      título: "Running Up That Hill",
    },
  ];
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImdlbmVyb3NQcmVmZXJpZG9zIjpbIjYwZjEzZTNkNzUyYjI2NWE1NTUyNGE4YyJdLCJfaWQiOiI2MGYxNDFiMDc1MmIyNjVhNTU1MjRhYmEiLCJ1c2VybmFtZSI6Iml2YW4iLCJwYXNzd29yZCI6ImF5eWJhIiwidXJsRm90byI6InRvQmVTZXR0ZWQiLCJsb2NhbGl6YWNpb24iOiI2MGYxNTk4NTc1MmIyNjVhNTU1MjRiODAiLCJlbWFpbCI6Iml2YW5qaW1sdXFtYWxsb3JjYUBnbWFpbC5jb20ifSwiaWF0IjoxNjI2NjIzODMyLCJleHAiOjE2MjkyMTU4MzJ9.o99nYr7aBfVLrbWTQG3GnMFX80x8qOsvYHO9jczNeS8";
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
    const datos = await resp.json();
    setListaMeGustan(datos);
  }, []);

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
