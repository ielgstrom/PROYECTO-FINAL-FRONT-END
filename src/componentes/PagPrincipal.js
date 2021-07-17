import React from "react";

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
          <p className="header Main">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            earum ab soluta velit cupiditate dolores aut quibusdam
            exercitationem reprehenderit nostrum excepturi, aperiam minus
            voluptates rem repellat omnis ipsum non aspernatur.
          </p>
          <p className="section ListaAmigos">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            earum ab soluta velit cupiditate dolores aut quibusdam
            exercitationem reprehenderit nostrum excepturi, aperiam minus
            voluptates rem repellat omnis ipsum non aspernatur.
          </p>
        </div>

        <Reproductor />
        
      </div>
    </>
  );
};
