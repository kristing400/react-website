import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import aero from "../assets/programming/aero/aero.jpg";
import aeroPeople from "../assets/programming/aero/aero2.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Aero() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle title="AERO 01" subtitle="Art & Arduino Spring 2018" />
        <Grid
          direction="row"
          container
          justify="center"
          alignItems="flex-start"
          spacing={smallBreakpoint ? 4 : 8}
        >
          <Grid item md={8} xs={12}>
            <div>
              <iframe
                src="https://drive.google.com/file/d/14ZBNvdafhXD8RwZCgFRfewFZDU4TB0BP/preview"
                frameborder="0"
                allowfullscreen
                className={classes.iFrame}
                title="Aero 01"
              ></iframe>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <p>
                  The intention for this project is to let the user feel like a
                  child again. I want to make something fun, interactive, and
                  physical. I was immediately reminded of how little kids play
                  with toy automobiles and planes; how they try to immitate car
                  and plane noises. With the help of an Arduino and a laser
                  cutter, I built a "premium toy" that can bring back those
                  childhood memories.
                </p>
              </div>
              <div className={classes.buttonContainer}>
                <Button href="https://github.com/kristing400/aero01">
                  github
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Features</h3>
                <p>
                  1. When the user moves the plane, the plane will make the
                  sound of a little boy immitating an airplane.
                  <br />
                  <br />
                  2. When the user stops the plane, the plane will also stop
                  making airplane noises.
                  <br />
                  <br />
                  3. When the user tilts the plane, the plane will make a
                  different sound of a little boy immitating an airplane.
                  <br />
                  <br />
                  4. When the user clicks on the button on the handle part of
                  the plane, the plane will make a "pew pew" sound immitated by
                  a little boy.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <img src={aero} width="100%" alt="Aero 01" />
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Tools & Materials</h3>
                <p>
                  Arduino Uno kit: Electronic prototyping
                  <br />
                  Accelerometer: For tilt and acceleration inputs
                  <br />
                  DFPPlayer: Allows the Arduino to play mp3 files
                  <br />
                  Laser Cutter: Cut wood for the body of the plane
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <img src={aeroPeople} width="100%" alt="Aero 01 with peers" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  iFrame: {
    width: "100%",
    height: "450px",
    border: 0,

    [theme.breakpoints.down("sm")]: {
      height: "190px",
    },
  },

  subtitleStyle: {
    fontSize: "16px",
    fontWeight: 600,
    margin: 0,
    paddingBottom: "16px",
  },

  buttonContainer: {
    paddingTop: "8px",
    paddingBottom: "8px",
  },

  textContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "start",
    height: "100%",
  },
  section: {
    paddingBottom: "16px",
  },
  container: {
    paddingBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "32px",
    },
  },
}));
