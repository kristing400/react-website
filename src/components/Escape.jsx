import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import comeCloser from "../assets/programming/escapeRoom/comecloser.gif";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Escape() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="Parallel Worlds Escape Game"
          subtitle="Experimental Game Design Fall 2016"
        />
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
                className={classes.iFrame}
                src="https://www.youtube.com/embed/zykVR07JzWo"
                frameborder="0"
                title="Parralel Worlds Escape Game"
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <p>
                  This is a co-op escape the room game built with Unity. We
                  wanted to explore a non-traditional gaming style, where
                  players have to communicate with each other through speech in
                  order to win. In this escape room game, two players are stuck
                  in the same room but parallel worlds. Each player is given a
                  seperate laptop. They need to work together, find clues in the
                  room, and figure out with objects are the keys to escape from
                  the room. Of course, the players are not allowed to look at
                  each other's screens.
                </p>
              </div>
              <div className={classes.section}>
                <p>In collaboration with Jason Ma</p>
              </div>
              <div className={classes.buttonContainer}>
                <Button href="https://drive.google.com/drive/folders/0B-weBJf14mHxUkhIR1NRRVZSUk0?usp=sharing">
                  download
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <p>
                  Every clue in the game requires the players to communicate. A
                  clue in a room may also require a trigger from the other room.
                  For example, in this gif, the player in the second room needs
                  to look at the painting in his/her room for the painting in
                  the first room to reveal a clue. Unfortunately, I wasn't able
                  to capture a gameplay of both rooms... However, you will be
                  able to download the game via the download link (you will need
                  room1 on one computer and room2 on another).
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <img src={comeCloser} width="100%" alt="Escape room snippet" />
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
