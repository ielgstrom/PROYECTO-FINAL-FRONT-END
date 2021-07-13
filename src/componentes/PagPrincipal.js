import React from "react";

import { Reproductor } from "./Reproductor";
export const PagPrincipal = () => {
  return (
    <>
      <div className="d-flex flex-column ">
        <div className="d-flex  align-items-stretch ">
          <p className="col-2 section">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            earum ab soluta velit cupiditate dolores aut quibusdam
            exercitationem reprehenderit nostrum excepturi, aperiam minus
            voluptates rem repellat omnis ipsum non aspernatur.
          </p>

          <p className="col-8 header">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            earum ab soluta velit cupiditate dolores aut quibusdam
            exercitationem reprehenderit nostrum excepturi, aperiam minus
            voluptates rem repellat omnis ipsum non aspernatur.
          </p>

          <p className="col-2 section ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            earum ab soluta velit cupiditate dolores aut quibusdam
            exercitationem reprehenderit nostrum excepturi, aperiam minus
            voluptates rem repellat omnis ipsum non aspernatur.
          </p>
        </div>

        <Reproductor className="footer" />
      </div>
    </>
  );
};
