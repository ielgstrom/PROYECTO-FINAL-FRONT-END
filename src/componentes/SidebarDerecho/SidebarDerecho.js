import { Link } from "react-router-dom";
import ListaAmigos from "../ListaAmigos/ListaAmigos";
import "./SidebarDerecho.css";

export const SidebarDerecho = () => {
  const Amiguis = [
    {
      nombre: "Paquita",
    },
    { nombre: "Roberto" },
    {
      nombre: "Pepe",
    },
    { nombre: "Jandro" },
    {
      nombre: "Carlos",
    },
    { nombre: "Eva" },
    {
      nombre: "Evita",
    },
    { nombre: "Luis XVI" },
  ];
  return (
    <>
      <aside className="section ListaAmigos">
        <Link to="/Perfil" type="button" className="btn btn-primary btnBuscar">
          Ver perfil
        </Link>
        <Link to="/matches" type="button" className="btn btn-primary btnBuscar">
          Matches
        </Link>
        <form className=" d-flex flex-row">
          <input
            type="text"
            className="form-control form-control-md buscadorAmiguis"
            placeholder="Buscar Amiguis"
          ></input>
        </form>
        <div className="lorem3">
          <ListaAmigos ListaAmiguis={Amiguis} />
        </div>
      </aside>
    </>
  );
};

export default SidebarDerecho;
