import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Slider from "@material-ui/core/Slider";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import ReactPlayer from "react-player";

const PrettoSlider = withStyles({
  root: {
    color: "#007acc",
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -6,
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
    height: 8,
    borderRadius: 4,
  },
})(Slider);
export const Reproductor = () => {
  const [reproduccion, setReproduccion] = useState({
    reproduciendo: true,
  });
  const { reproduciendo } = reproduccion;

  const reproducirOPausar = () => {
    setReproduccion({
      ...reproduccion,
      reproduciendo: !reproduccion.reproduciendo,
    });
  };
  return (
    <>
      <div maxwidth="md" className="reproductor">
        <ReactPlayer
          url="https://soundcloud.com/noname/10-shadow-man-ft-saba-smino-phoelix"
          className="reproductor2"
          muted={false}
          playing={reproduciendo}
        />
      </div>
      <div className="container-fluid barraReproduccion">
        <div className="row  justify-content-center">
          <div className="col-12 col-sm-2 text-center">
            Nombre de la cancion
          </div>
          <div className="col-8 ">
            <div className="row justify-content-center text-center">
              <div className="col-12 p-3">
                <SkipPreviousIcon className="botonBack" />
                <PlayArrowIcon
                  className="botonPlay"
                  onClick={reproducirOPausar}
                />
                <SkipNextIcon className="botonNext" />
              </div>
            </div>
            <div className="row justify-content-center align items end">
              <PrettoSlider min={0} max={100} />
            </div>
          </div>
          <div className="col-sm-2 volumen">
            <VolumeUpIcon className="volumenIcono" />
            <PrettoSlider className="volumenSlider" />
          </div>
        </div>
      </div>
    </>
  );
};
