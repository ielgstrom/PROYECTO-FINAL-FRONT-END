import React from "react";
import { Perfil } from "./Perfil";

import { Reproductor } from "./Reproductor";
export const PagPrincipal = () => {
  return (
    <>
      <div className="d-flex flex-column ">
        <div className="d-flex  align-items-stretch paginaPrincipal">
          <p className=" section listaCanciones">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            earum ab soluta velit cupiditate dolores aut quibusdam
            exercitationem reprehenderit nostrum excepturi, aperiam minus
            voluptates rem repellat omnis ipsum non aspernatur.
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
