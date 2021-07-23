import React, { useState } from "react";

export const Principal = () => {
  // const [verFavoritas, setVerFavoritas] = useState(false);
  // const viewCancionesFavoritas = () => {
  //   setVerFavoritas(!verFavoritas);
  // };
  // const [listaAReproducir, setListaAReproducir] =
  //   useState(ListaCancionesPrueba);
  // const reproducirLista = (List) => {
  //   setListaAReproducir(List);
  // };
  return (
    <>
      {/* <div className="d-flex flex-column ">
        <div className="d-flex  align-items-stretch paginaPrincipal">
          <aside className=" section listaCanciones">
            <form className=" d-flex flex-row">
              <input
                type="text"
                className="form-control form-control-md buscadorMusica"
                placeholder="Buscar Musica"
              ></input> */}
      {/* <i className="buscadorMusica">B</i>
            </form>
            <button
              type="button"
              className="btnBuscar btn btn-primary"
              onClick={viewCancionesFavoritas}
            >
              Canciones favoritas
            </button>

            <h3 className="historialTiulo">Historial</h3>
            <div className="lorem">
              <HistorialSidebar historial={ListaCancionesPrueba} />
            </div>
          </aside> */}

      <p className="header Main"></p>
      {/* {true && <Perfil />} */}
      {/* {verFavoritas && (
              <CancionesFavoritas ListaCancionesPrueba={ListaCancionesPrueba} />
            )}
          </p>


      </div> */}
    </>
  );
};
export default Principal;

// tarea de hoy, dividir en componentes la componente principal
