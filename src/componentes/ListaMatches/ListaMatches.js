import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useCallback, useEffect, useState } from "react";
export const ListaMatches = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const id_persona = decoded.usuario._id;

  const [Matches, setMatches] = useState([]);
  const listarMatches = useCallback(async () => {
    if (!token) {
      console.log("No hay token");
      return;
    }

    const resp = await fetch(
      `https://myrythm.herokuapp.com/matches/listaMatches`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const datos = await resp.json();
    setMatches(datos);
  }, [token]);

  useEffect(listarMatches, [listarMatches]);
  return (
    <>
      {Matches.map((elemento) => (
        <div key={elemento._id} className="AmigoIndiv">
          <div className="nombreAmigui">{elemento.username}</div>
          <Link to="/chat">
            <FaComments className="IconoMensaje" />
          </Link>
        </div>
      ))}
    </>
  );
};
export default ListaMatches;
