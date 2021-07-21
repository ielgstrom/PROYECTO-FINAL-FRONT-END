import React, { useState } from "react";
import { Perfil } from "../Perfil";
import { CancionesFavoritas } from "./CancionesFavoritas";
import { Reproductor } from "../Reproductor/Reproductor";
export const Principal = () => {
  const ListaCancionesPrueba = [
    {
      urlsong2:
        "https://soundcloud.com/theavalanches/interstellar-love-feat-leon",
      artista: "The Avalanches",
      título: "Interstelar Love",
    },
    {
      urlsong2:
        "https://soundcloud.com/fiorinien/kate-bush-running-up-that-hill",
      artista: "Kate Bush",
      título: "Running Up That Hill",
    },
    {
      urlsong2: "https://soundcloud.com/quelle-chris/graphic-bleed-outs-feat",
      artista: "Quelle Chris",
      título: "Graphic Bleeds Outs",
    },
  ];

  const [verFavoritas, setVerFavoritas] = useState(true);
  const viewCancionesFavoritas = () => {
    setVerFavoritas(!verFavoritas);
  };
  return (
    <>
      <div className="d-flex flex-column ">
        <div className="d-flex  align-items-stretch paginaPrincipal">
          <aside className=" section listaCanciones">
            <form className=" d-flex flex-row">
              <input
                type="text"
                className="form-control form-control-md buscadorMusica"
                placeholder="Buscar Musica"
              ></input>
              <i className="buscadorMusica">B</i>
            </form>
            <button
              type="button"
              class="btnBuscar btn btn-primary"
              onClick={viewCancionesFavoritas}
            >
              Ver tus canciones favoritas
            </button>
          </aside>

          <p className="header Main">
            {/* {true && <Perfil />} */}
           {verFavoritas && (
              <CancionesFavoritas ListaCancionesPrueba={ListaCancionesPrueba} />
            )} 
          </p>

          <aside className="section ListaAmigos">
            <button type="button" className="btn btn-primary">
              Ver perfil
            </button>
          </aside>
        </div>

        <Reproductor ListaCancionesPrueba={ListaCancionesPrueba} /> 
      </div>
    </>
  );
};
export default Principal;

// tarea de hoy, dividir en componentes la componente principal