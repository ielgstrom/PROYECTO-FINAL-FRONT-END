import "./CancionesFavoritas.css";
import { FaPlay } from "react-icons/fa";
export const CancionesFavoritas = ({ ListaCancionesPrueba }) => {
  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusqueda">Lista de Canciones Favoritas</h2>
        <div className="scrollLikes">
          {ListaCancionesPrueba.map((elemento) => (
            <div className="tituloBusqueda">
              <FaPlay className="PlayLikesButton" />
              <div className="PlayTitlesButton">
                {elemento.título} - {elemento.artista}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CancionesFavoritas;
