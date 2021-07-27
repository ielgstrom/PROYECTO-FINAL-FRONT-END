import { Link } from "react-router-dom";
import ListaAmigos from "../ListaAmigos/ListaAmigos";
import "./SidebarDerecho.css";
import { useState } from "react";
import ListaMatches from "../ListaMatches/ListaMatches";

export const SidebarDerecho = () => {
  const [verPersonas, setVerPersonas] = useState(true);
  const cambiarvista = () => {
    setVerPersonas(!verPersonas);
  };
  return (
    <>
      <aside className="section ListaAmigos">
        <Link to="/Perfil" type="button" className="btn btn-primary btnBuscar">
          Ver perfil
        </Link>
        <Link to="/matches" type="button" className="btn btn-primary btnBuscar">
          Hacer Match!
        </Link>
        <form className=" d-flex flex-row">
          <input
            type="text"
            className="form-control form-control-md buscadorAmiguis"
            placeholder="Buscar Amigos"
          ></input>
        </form>
        <button
          className="btn btn-primary btnBuscar btnAmigosMatches"
          type="button"
          onClick={cambiarvista}
          disabled={verPersonas}
        >
          Amigos
        </button>
        <button
          className="btn btn-primary btnBuscar btnAmigosMatches"
          type="button"
          onClick={cambiarvista}
          disabled={!verPersonas}
        >
          Matches
        </button>

        <div className="lorem3">
          {verPersonas && <ListaAmigos />}
          {!verPersonas && <ListaMatches />}
        </div>
      </aside>
    </>
  );
};

export default SidebarDerecho;
