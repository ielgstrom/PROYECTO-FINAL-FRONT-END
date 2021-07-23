import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import jwt_decode from "jwt-decode";
import "./ListaAmigos.css";
export const ListaAmigos = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id_persona = decoded.usuario._id;

  const [amigos, setAmigos] = useState([]);
  const listarAmigos = useCallback(async () => {
    console.log("he empezado a buscar");

    if (!token) {
      console.log("No hay token");
      return;
    }

    const resp = await fetch(
      `https://myrythm.herokuapp.com/amigos/listaAmigos`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const datos = await resp.json();
    setAmigos(datos);
    console.log(amigos);
  }, [amigos, token]);

  useEffect(() => listarAmigos(), [listarAmigos]);
  return (
    <>
      {amigos.map((elemento) => (
        <div className="AmigoIndiv">
          <div className="nombreAmigui">{elemento.username}</div>
          <Link to="/chat">
            <FaComments className="IconoMensaje" />
          </Link>
        </div>
      ))}
    </>
  );
};
export default ListaAmigos;
