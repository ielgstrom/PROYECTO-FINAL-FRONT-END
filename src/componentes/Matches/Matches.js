import { useState } from "react";
import { FaComments, FaCog, FaTimes, FaHeart } from "react-icons/fa";
import "./Matches.css";
export const Matches = () => {
  const [match, setMatch] = useState(true);
  const [datosMatch, setDatosMatch] = useState({
    nombrePareja: "",
    imagenPareja: "",
  });
  const nextMatch = async (e) => {
    e.preventDefault();
    const datos = new FormData();
    datos.append("imagen", datosMatch.imagenPareja);
    datos.append("nombre", datosMatch.nombrePareja);
    const resp = await fetch("http://localhost:3000/matches", {
      method: "GET",
      body: datos,
    });
    if (resp.ok) {
      return setMatch(false);
    }
    console.log("No hay pareja pa´ ");
  };
  return (
    <>
      <div className=" header Main">
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
                <p className="col-12 nombre2">
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
                <FaTimes className="rechazar" onClick={nextMatch}/>
              </button>
            </li>
            <li className="col-6">
              <button className="boton" >
                <FaHeart className="corazon" onClick={nextMatch} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Matches;


//se tiene que llamar en PagPrincipal
