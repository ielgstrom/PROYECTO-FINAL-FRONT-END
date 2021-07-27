import React, { useState } from "react";
import "./Controls.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import VolumeOff from "@material-ui/icons/VolumeOff";
import VolumeUp from "@material-ui/icons/VolumeUp";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import Popover from "@material-ui/core/Popover";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CachedIcon from "@material-ui/icons/Cached";

const useStyles = makeStyles((theme) => ({
  //   button: {
  //   margin: theme.spacing(1),
  // },
  controlIcons: {
    color: "#007acc",
    fontSize: 40,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },
  controlIconsLike: {
    color: "#007acc",
    fontSize: 30,
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
const Controls = ({
  onSeek,
  onSeekMouseUp,
  onSeekMouseDown,
  onPlayPause,
  onVolumeSeekUp,
  onVolumeChange,
  onMute,
  reverseIcon,
  muted,
  volume,
  playing,
  played,
  elapsedTime,
  totalDuration,
  liked,
  likear,
  nextSong,
  previousSong,
  cancionPuesta,
  ListaCancionesPrueba,
  reproduciendo,
}) => {
  const classes = useStyles();
  return (
    <div className="container-fluid barraReproduccion">
      <div className="row  justify-content-center align-items-center">
        <div className="col-12 col-sm-2 text-center plainText">
          <div className="row nombreCancion">
            {cancionPuesta.cancion.nombre}
          </div>
          <div className="row Artista">
            {cancionPuesta.cancion.artista.nombre}
          </div>
        </div>
        {/* <div className="col-sm-1"> */}
        {liked ? (
          <FavoriteBorderIcon
            className={classes.controlIconsLike}
            onClick={likear}
          />
        ) : (
          <FavoriteIcon className={classes.controlIconsLike} onClick={likear} />
        )}
        {/* </div> */}

        <div className="col-7 ">
          <div className="row justify-content-down text-center">
            <div className="col-12 ">
              <SkipPreviousIcon
                // onClick={previousSong}
                className={` ${classes.controlIcons} botonPause`}
              />
              {!reverseIcon && (
                <PlayArrowIcon
                  className={` ${classes.controlIcons} botonPlay`}
                  onClick={onPlayPause}
                />
              )}
              {reverseIcon && (
                <PauseIcon
                  className={` ${classes.controlIcons} botonPause`}
                  onClick={onPlayPause}
                />
              )}
              <SkipNextIcon
                onClick={() => nextSong(ListaCancionesPrueba)}
                className={` ${classes.controlIcons} botonNext`}
              />
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <small className="col-1 align-self-center tiempoCancion">
              {elapsedTime}
            </small>
            <div className="col-10 col-sm-8 barritaReproductora">
              <PrettoSlider
                min={0}
                max={100}
                value={played * 100}
                onChange={onSeek}
                onMouseDown={onSeekMouseDown}
                // onChangeComitted={onSeekMouseUp}
              />
            </div>
            <small className="col-1 tiempoCancion">{totalDuration}</small>
          </div>
        </div>
        <div className="col-2 volumen">
          <Grid container alignItems="center">
            <IconButton onClick={onMute}>
              {!muted ? (
                <VolumeUpIcon className={classes.controlIcons} />
              ) : (
                <VolumeOff className={classes.controlIcons} />
              )}
            </IconButton>{" "}
            <PrettoSlider
              min={0}
              max={100}
              value={volume * 100}
              className={classes.volumeSlider}
              onChange={onVolumeChange}
              onChangeComitted={onVolumeSeekUp}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Controls;
