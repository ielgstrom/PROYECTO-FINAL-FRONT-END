import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ListaAmigos.css";
export const ListaAmigos = ({ ListaAmiguis }) => {
  return (
    <>
      {ListaAmiguis.map((elemento) => (
        <div className="AmigoIndiv">
          <div className="nombreAmigui">{elemento.nombre}</div>
          <Link to="/chat">
            <FaComments className="IconoMensaje" />
          </Link>
        </div>
      ))}
    </>
  );
};
export default ListaAmigos;
