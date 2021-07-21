import { Link } from "react-router-dom";

export const SidebarDerecho = () => {
  return (
    <>
      <aside className="section ListaAmigos">
        <button type="button" className="btn btn-primary">
          Ver perfil
        </button>
        <Link to="/matches">Matches</Link>
      </aside>
    </>
  );
};

export default SidebarDerecho;
