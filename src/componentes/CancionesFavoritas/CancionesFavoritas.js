import "./CancionesFavoritas.css";
import { FaBan, FaPlay, FaTrash } from "react-icons/fa";
export const CancionesFavoritas = ({ ListaCancionesPrueba }) => {
  return (
    <>
      <div className="header Main">
        <h2 className="enunciadoBusquedaFavs">LISTA DE CANCIONES FAVORITAS</h2>
        <div className="scrollLikes">
          {ListaCancionesPrueba.map((elemento) => (
            <div className="tituloBusqueda">
              <div className="likesIzquierda">
                <FaPlay className="PlayLikesButton" />
                <div className="PlayTitlesButton">
                  {elemento.título} - {elemento.artista}
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
