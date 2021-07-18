import React from "react";
import { Perfil } from "./Perfil";

import { Reproductor } from "./Reproductor/Reproductor";
export const PagPrincipal = () => {
  return (
    <>
      <div className="d-flex flex-column ">
        <div className="d-flex  align-items-stretch paginaPrincipal">
          <p className=" section listaCanciones">
            <form className=" d-flex flex-row">
              <input
                type="text"
                className="form-control form-control-md buscadorMusica"
                placeholder="Buscar Musica"
              ></input>
              <i className="buscadorMusica">B</i>
            </form>
          </p>

          <p className="header Main">{false && <Perfil />}</p>

          <p className="section ListaAmigos">
            <button type="button" className="btn btn-primary">
              Ver perfil
            </button>
          </p>
        </div>

        <Reproductor />
      </div>
    </>
  );
};
