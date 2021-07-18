import React, { useState, useRef } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import ReactPlayer from "react-player";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Controls from "./Controls";
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

export const Reproductor = () => {
  const classes = useStyles();
  const [reproduccion, setReproduccion] = useState({
    reproduciendo: true,
    played: 0,
    muted: true,
    volume: 0.5,
    seeking: false,
  });
  const { reproduciendo, played, muted, volume } = reproduccion;

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
    setReproduccion({ ...reproduccion, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setReproduccion({ ...reproduccion, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    console.log(newValue);
    setReproduccion({ ...reproduccion, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };
  return (
    <>
      <div maxwidth="md" className="reproductor">
        <ReactPlayer
          ref={playerRef}
          url="https://soundcloud.com/kingprincessmusic/pain"
          className="reproductor2"
          muted={muted}
          playing={reproduciendo}
          onProgress={tiempoTranscurrido}
          volume={volume}
          // loop={true}
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
      />
    </>
  );
};
