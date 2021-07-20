import React, { useState, useRef, useCallback } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import ReactPlayer from "react-player";

import Controls from "./Controls";
import { useEffect } from "react";
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
export const Reproductor = ({ ListaCancionesPrueba }) => {
  const classes = useStyles();
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

  const [cancionPuesta, setCancionPuesta] = useState(ListaCancionesPrueba[0]);

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

  const nextSong = (lista) => {
    if (lista[lista.length - 1].urlsong2 !== cancionPuesta.urlsong2) {
      setCancionPuesta(lista[lista.indexOf(cancionPuesta) + 1]);
    } else if (lista[lista.length - 1].urlsong2 === cancionPuesta.urlsong2) {
      setCancionPuesta(lista[0]);
    }
  };

  useEffect(() => nextSong(ListaCancionesPrueba), [ListaCancionesPrueba]);

  const previousSong = () => {
    if (ListaCancionesPrueba[0].urlsong2 !== cancionPuesta.urlsong2) {
      setCancionPuesta(
        ListaCancionesPrueba[ListaCancionesPrueba.indexOf(cancionPuesta) - 1]
      );
    } else if (ListaCancionesPrueba[0].urlsong2 === cancionPuesta.urlsong2) {
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
  console.log(ListaCancionesPrueba.length);
  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";

  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);
  console.log(unaSolaCancion() && "rojo");
  return (
    <>
      <div maxwidth="md" className="reproductor">
        <ReactPlayer
          ref={playerRef}
          url={cancionPuesta.urlsong2}
          className="reproductor2"
          muted={muted}
          playing={reproduciendo}
          onProgress={tiempoTranscurrido}
          volume={volume}
          // onEnded={nextSong}
          loop={loop}
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
        previousSong={previousSong}
        cancionPuesta={cancionPuesta}
        ListaCancionesPrueba={ListaCancionesPrueba}
      />
    </>
  );
};
