import "./Reproductor.css";
import React, { useState, useRef, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import ReactPlayer from "react-player";

import Controls from "../Controls/Controls";
import { useCallback } from "react";

const useStyles = makeStyles((theme) => ({
  //   button: {
  //   margin: theme.spacing(1),
  // },
  controlIcons: {
    // color: "#777",
    fontSize: 40,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },
  volumeSlider: {
    width: 100,
  },
}));
const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }
  const date = new Date(seconds * 1000);
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  return `${mm}:${ss}`;
};
export const Reproductor = ({
  cancionPuesta,
  setCancionPuesta,
  ListaCancionesPrueba,
}) => {
  const [reproduccion, setReproduccion] = useState({
    reproduciendo: true,
    played: 0,
    muted: false,
    volume: 0.5,
    seeking: false,
    liked: true,
    loop: false,
  });
  const { reproduciendo, played, muted, volume, liked, loop } = reproduccion;

  const playerRef = useRef(null);
  const [reverseIcon, setReverseIcon] = useState(true);

  const reproducirOPausar = () => {
    setReproduccion({
      ...reproduccion,
      reproduciendo: !reproduccion.reproduciendo,
    });
    setReverseIcon(!reverseIcon);
  };

  const tiempoTranscurrido = (cambioDeEstado) => {
    if (!reproduccion.seeking) {
      setReproduccion({ ...reproduccion, ...cambioDeEstado });
    }
  };

  const mutear = () => {
    setReproduccion({ ...reproduccion, muted: !reproduccion.muted });
  };
  const likear = () => {
    setReproduccion({ ...reproduccion, liked: !reproduccion.liked });
  };
  const handleVolumeChange = (e, newValue) => {
    setReproduccion({
      ...reproduccion,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleVolumeSeekUp = (e, newValue) => {
    setReproduccion({
      ...reproduccion,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleSeekChange = (e, newValue) => {
    // console.log(parseFloat(newValue / 100));
    setReproduccion({ ...reproduccion, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setReproduccion({ ...reproduccion, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    console.log({ value: e.target });
    setReproduccion({ ...reproduccion, seeking: false });
    playerRef.current.seekTo(newValue / 100, "fraction");
  };
  const nextSong = useCallback(
    (lista) => {
      setReproduccion({
        ...reproduccion,
        reproduciendo: true,
      });
      setReverseIcon(true);
      // if (lista[lista.length - 1]) {
      //   setCancionPuesta((cancionPuesta) =>lista[lista.indexOf(cancionPuesta) + 1]);
      // } else if (lista[lista.length - 1]) {
      //   setCancionPuesta((cancionPuesta) => lista[0]);
      // }
      setCancionPuesta((cancionPuesta) => {
        if (lista.length === 1) {
          return {
            cancion: cancionPuesta.cancion,
            indice: cancionPuesta.indice,
          };
        } else if (lista.length === cancionPuesta.indice)
          return {
            cancion: lista[cancionPuesta.indice + 1],
            indice: cancionPuesta.indice + 1,
          };
        else return { cancion: lista[0], indice: cancionPuesta.indice };
      });
    },
    [setCancionPuesta]
  );

  useEffect(
    () => nextSong(ListaCancionesPrueba),
    [ListaCancionesPrueba, nextSong]
  );

  const previousSong = () => {
    console.log("previous");

    if (ListaCancionesPrueba[0].url !== cancionPuesta.url) {
      setCancionPuesta(
        ListaCancionesPrueba[ListaCancionesPrueba.indexOf(cancionPuesta) - 1]
      );
    } else if (ListaCancionesPrueba[0].url === cancionPuesta.cancion.url) {
      setCancionPuesta(ListaCancionesPrueba[ListaCancionesPrueba.length - 1]);
    } else setCancionPuesta(cancionPuesta);
  };
  const unaSolaCancion = () => {
    if (ListaCancionesPrueba.length !== 1) {
      return false;
    } else if (ListaCancionesPrueba.length === 1) {
      return true;
    }
  };

  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";

  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);

  const guardarenHistorial = useCallback(async (idsong) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No hay token");
      return;
    }
    const resp = await fetch(
      `https://myrythm.herokuapp.com/historial/reproducirCancion/${idsong}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const datos = await resp.json();
  }, []);

  useEffect(
    () => guardarenHistorial(ListaCancionesPrueba[0]._id),
    [ListaCancionesPrueba, guardarenHistorial]
  );
  return (
    <>
      <div maxwidth="md" className="reproductor">
        <ReactPlayer
          ref={playerRef}
          url={cancionPuesta.cancion.url}
          className="reproductor2"
          muted={muted}
          playing={reproduciendo}
          onProgress={tiempoTranscurrido}
          volume={volume}
          onEnded={() => nextSong(ListaCancionesPrueba)}
          // loop={loop}
        />
      </div>
      <Controls
        onSeek={handleSeekChange}
        onSeekMouseUp={handleSeekMouseUp}
        onSeekMouseDown={handleSeekMouseDown}
        onPlayPause={reproducirOPausar}
        onVolumeSeekUp={handleVolumeSeekUp}
        onVolumeChange={handleVolumeChange}
        onMute={mutear}
        reverseIcon={reverseIcon}
        muted={muted}
        volume={volume}
        playing={reproduccion}
        played={played}
        elapsedTime={elapsedTime}
        totalDuration={totalDuration}
        liked={liked}
        likear={likear}
        nextSong={nextSong}
        // previousSong={previousSong}
        cancionPuesta={cancionPuesta}
        ListaCancionesPrueba={ListaCancionesPrueba}
        reproduciondo={reproduciendo}
      />
    </>
  );
};
export default Reproductor;
