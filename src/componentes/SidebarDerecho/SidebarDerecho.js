import { Link } from "react-router-dom";

export const SidebarDerecho = () => {
  return (
    <>
      <aside className="section ListaAmigos">
        <Link to="/Perfil" type="button" className="btn btn-primary btnBuscar">
          Ver perfil
        </Link>
        <Link to="/matches" type="button" className="btn btn-primary btnBuscar">
          Matches
        </Link>
      </aside>
    </>
  );
};

export default SidebarDerecho;
