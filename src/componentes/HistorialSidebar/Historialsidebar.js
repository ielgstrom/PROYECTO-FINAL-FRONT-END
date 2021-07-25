import "./Historialsidebar.css";
import jwt_decode from "jwt-decode";
import { useState, useEffect, useCallback } from "react";
export const HistorialSidebar = () => {
  const token = localStorage.getItem("token");
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
    if (resp.ok) {
      const datos = await resp.json();
      setListaHistorial(datos);
    }
  }, [id_persona, token]);

  useEffect(busquedaHistorial, [busquedaHistorial]);

  return (
    <>
      {listaHistorial.map((elemento, i) => (
        <div key={i} className="listaHistorial">
          <div key={elemento.idCancion.nombre} className="listaHistorialTitulo">
            {elemento.idCancion.nombre}
          </div>
          <div key={elemento.idCancion.artista} className="artistaHisotrial">
            {elemento.idCancion.artista.nombre}
          </div>
        </div>
      ))}
    </>
  );
};
export default HistorialSidebar;
