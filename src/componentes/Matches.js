import { FaComments, FaCog, FaTimes, FaHeart } from "react-icons/fa";
export const Matches = () => {
  return (
    <>
      <div className="contenedorMatches">
        <ul className="myrythm list-unstyled row">
          <button className="botonImpostaciones">
            <li className="col-4 ">
              <FaCog className="icono" />
            </li>
          </button>
          <li className="logo col-4">
            <strong>MyR</strong>
          </li>
          <button className="botonChat">
            <li className="col-4">
              <FaComments className="icono" />
            </li>
          </button>
        </ul>
        <div className="contenedorParejas row">
          <div className="futurasParejas col-10">
            <img alt="imagenParejafutura" />
          </div>
          <ul className="contenedorIformaciones list-unstyled">
            <li className="row">
              <p className="col-12 nombre">
                <strong>Nombre, edad</strong>
              </p>
            </li>
            <li className="row">
              <p className="col-12 infoPareja">Lugar donde vive</p>
            </li>
          </ul>
        </div>
        <ul className="row botones list-unstyled">
          <li className="col-6">
            <button className="boton">
              <FaTimes className="rechazar" />
            </button>
          </li>
          <li className="col-6">
            <button className="boton">
              <FaHeart className="corazon" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

//se tiene que llamar en PagPrincipal
