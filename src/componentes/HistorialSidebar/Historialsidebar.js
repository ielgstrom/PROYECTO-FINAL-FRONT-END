import "./Historialsidebar.css";
import jwt_decode from "jwt-decode";
import { useState, useEffect, useCallback } from "react";
export const HistorialSidebar = ({ historial }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImdlbmVyb3NQcmVmZXJpZG9zIjpbIjYwZjEzZTNkNzUyYjI2NWE1NTUyNGE4YyJdLCJfaWQiOiI2MGYxNDFiMDc1MmIyNjVhNTU1MjRhYmEiLCJ1c2VybmFtZSI6Iml2YW4iLCJwYXNzd29yZCI6ImF5eWJhIiwidXJsRm90byI6InRvQmVTZXR0ZWQiLCJsb2NhbGl6YWNpb24iOiI2MGYxNTk4NTc1MmIyNjVhNTU1MjRiODAiLCJlbWFpbCI6Iml2YW5qaW1sdXFtYWxsb3JjYUBnbWFpbC5jb20ifSwiaWF0IjoxNjI2NjIzODMyLCJleHAiOjE2MjkyMTU4MzJ9.o99nYr7aBfVLrbWTQG3GnMFX80x8qOsvYHO9jczNeS8";
  const decoded = jwt_decode(token);
  const id_persona = decoded.usuario._id;

  const [listaHistorial, setListaHistorial] = useState([]);
  const busquedaHistorial = useCallback(async () => {
    console.log("he empezado a buscar");

    if (!token) {
      console.log("No hay token");
      return;
    }

    const resp = await fetch(
      `https://myrythm.herokuapp.com/historial/${id_persona}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const datos = await resp.json();
    setListaHistorial(datos);
  }, [id_persona]);

  useEffect(busquedaHistorial, [busquedaHistorial]);
  return (
    <>
      {listaHistorial.map((elemento) => (
        <div key={elemento.idCancion.artista} className="listaHistorial">
          <div key={elemento.idCancion.nombre} className="listaHistorialTitulo">
            {elemento.idCancion.nombre}
          </div>
          <div className="artistaHisotrial">{elemento.idCancion.artista}</div>
        </div>
      ))}
    </>
  );
};
export default HistorialSidebar;
