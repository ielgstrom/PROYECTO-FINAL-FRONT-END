import "./Perfil.css";
export const Perfil = () => {
  return (
    <>
      <div className="contenedorTotal Main header">
        <div className="row contenedorPrincipal">
          <div className="col-10 informacionesPerfil">
            <h1>General</h1>
            <h4>Perfil</h4>
            <div className="imagenPerfil row ">
              <div className="contenedorImagen">
                <img className=" col-2" src="" alt="imagenPerfil" />
              </div>
              <ul className="list-unstyled col-10 contenedorNombre">
                <li>
                  <p className="nombre">Nombre</p>
                </li>
                <li>
                  <p className="nombre">Apellido</p>
                </li>
              </ul>
              <ul className="list-unstyled row">
                <li className="col-6">
                  <p className="fecha">24/05/1998</p>
                </li>
                <li className="col-6">
                  <p className="Ciudad">Barcelona</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="generos">Generos favoritos</h2>
              <ul className="list-unstyled row">
                <li className="elecionGenero col-2">
                  <input className="botonGenero row" type="checkbox"></input>
                  <p className="generoCancion row">ROCK</p>
                </li>
                <li className=" elecionGenero col-2">
                  <input className="botonGenero row" type="checkbox"></input>
                  <p className="generoCancion row">POP</p>
                </li>
                <li className="elecionGenero col-2">
                  <input className="botonGenero row" type="checkbox"></input>
                  <p className="generoCancion row">RAP</p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="generos">Ultimas Canciones Escuchadas</h2>
              <ul className="list-unstyled ultimasCansiones row">
                <li className="contenedorTitulos col-3 shadow ">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
                <li className="contenedorTitulos col-3 shadow ">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
                <li className="contenedorTitulos col-3 shadow ">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
              </ul>
              <ul className="list-unstyled row">
                <li className="contenedorTitulos col-3">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha de escuchamiento</p>
                </li>
                <li className="contenedorTitulos col-3">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
                <li className="contenedorTitulos col-3">
                  <p className="tituloCancion">titulo cancion</p>
                  <p className="tituloCancion">fecha</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="contenedorBotones">
            <button className="botones2">
              <strong>Cerrar Sessión</strong>
            </button>
            <button className="botones2">
              <strong>Eliminar Cuenta</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Perfil;
