import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
// import VolumeDown from "@material-ui/icons/VolumeDown";
// import VolumeUp from "@material-ui/icons/VolumeUp";
// import Container from "@material-ui/core/Container";
// import ReactPlayer from "react-player";

export const Reproductor = () => {
  const useStyles = makeStyles({
    root: {
      width: 200,
    },
  });

  return (
    <>
      <div className="container footer">
        {/* <Container maxWidth="md" className="reproductor">
        <ReactPlayer
          url="https://soundcloud.com/noname/10-shadow-man-ft-saba-smino-phoelix"
          className="reproductor2"
        />
      </Container> */}

        <div className="row align-items-center">
          <div className="col-2">Aqui van los Botones</div>
          <div className="col-8 sliderMusica">
            <Slider
              aria-labelledby="continuous-slider"
              value={50}
              className="SliderMusica2"
            />
          </div>
          <div className=" col-2 volumenSlideBar">
            <Slider
              aria-labelledby="continuous-slider"
              className="SliderMusica3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
