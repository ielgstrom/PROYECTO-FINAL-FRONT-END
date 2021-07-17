import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import PauseIcon from "@material-ui/icons/Pause";
import ReactPlayer from "react-player";
import { IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
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

const PrettoSlider = withStyles({
  root: {
    color: "#007acc",
    height: 8,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    borderRadius: 4,
  },
})(Slider);
export const Reproductor = () => {
  const classes = useStyles();
  const [reproduccion, setReproduccion] = useState({
    reproduciendo: false,
    played: 0,
  });
  const { reproduciendo, played } = reproduccion;
  const [playing, setPlaying] = useState(true);
  const reproducirOPausar = () => {
    setReproduccion({
      ...reproduccion,
      reproduciendo: !reproduccion.reproduciendo,
    });
    setPlaying(!playing);
  };

  const tiempoTranscurrido = (cambioDeEstado) => {
    setReproduccion({ ...reproduccion, ...cambioDeEstado });
  };
  return (
    <>
      <div maxwidth="md" className="reproductor">
        <ReactPlayer
          url="https://soundcloud.com/mitskiofficial/francis-forever"
          className="reproductor2"
          muted={false}
          playing={reproduciendo}
          onProgress={tiempoTranscurrido}
        />
      </div>
      <div className="container-fluid barraReproduccion">
        <div className="row  justify-content-center align-items-center">
          <div className="col-12 col-sm-2 text-center">
            Nombre de la cancion-Artista
          </div>
          <div className="col-8 ">
            <div className="row justify-content-down text-center">
              <div className="col-12 ">
                <SkipPreviousIcon
                  className={` ${classes.controlIcons} botonPause`}
                />
                {playing && (
                  <PlayArrowIcon
                    className={` ${classes.controlIcons} botonPlay`}
                    onClick={reproducirOPausar}
                  />
                )}
                {!playing && (
                  <PauseIcon
                    className={` ${classes.controlIcons} botonPause`}
                    onClick={reproducirOPausar}
                  />
                )}
                <SkipNextIcon
                  className={` ${classes.controlIcons} botonNext`}
                />
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-sm-8">
                <PrettoSlider min={0} max={100} value={played * 100} />
              </div>
            </div>
          </div>
          <div className="col-2 volumen">
            <Grid container alignItems="center">
              <IconButton>
                <VolumeUpIcon className={classes.controlIcons} />
              </IconButton>{" "}
              <PrettoSlider
                min={0}
                max={100}
                className={classes.volumeSlider}
              />
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};
