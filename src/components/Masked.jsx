import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from "./Button";
import masked from "../assets/programming/masked/masked.png";
import masked1 from "../assets/programming/masked/masked1.png";
import masked2 from "../assets/programming/masked/masked2.png";
import masked4 from "../assets/programming/masked/masked4.png";

export default function Masked() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="MASKED"
          subtitle="BXA Capstone Project Fall 2018"
        />
        <Grid
          direction="row"
          container
          justify="center"
          alignItems="flex-start"
          spacing={smallBreakpoint ? 4 : 8}
        >
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>
                  A game about underrepresentation of women in tech
                </h3>
                <p>
                  Masked is a text-based Choose Your Own Adventure game built
                  with Ren'Py. The premise of the game is about a woman software
                  engineer seeking assistance on an online forum app called
                  Masked. She has encountered mistreatments are her job, and
                  wants to come forward with her problems.
                </p>
              </div>
              <div className={classes.buttonContainer}>
                <Button href="https://kristinyin.itch.io/masked">
                  Download from itch.io
                </Button>
              </div>
              <div className={classes.buttonContainer}>
                <Button href="https://github.com/kristing400/masked">
                  github
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={8} xs={12}>
            <img src={masked} width="100%" alt="masked" />
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Tools & Sources</h3>
                <p>
                  Ren'py: Framework on top of Python to creates
                  simulation/choose your own adventure based games
                  <br />
                  Blind: Based off of real conversations on Blind, an anonymous
                  public forum app exclusive to people working in tech{" "}
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Research</h3>
                <p>
                  This was part of my BXA Capstone project on underreprestion of
                  women in the tech industry. Specifically, I was interested in
                  finding out how women are treated, represented, and portrayed
                  in tech, and what I could do to raise awareness and create
                  empthy. I wanted to create a game that allowed people to play
                  through stories about women who are mistreated or
                  discriminated against. In order to collect these stories, I
                  created threads, and searched for existing stores on Blind, an
                  online forum app exclusive to techies.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <img src={masked1} width="100%" alt="masked login" />
          </Grid>
          <Grid item md={4} xs={12}>
            <img src={masked2} width="100%" alt="masked new thread" />
          </Grid>
          <Grid item md={4} xs={12}>
            <img src={masked4} width="100%" alt="masked convo" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  subtitleStyle: {
    fontSize: "16px",
    fontWeight: 600,
    margin: 0,
    paddingBottom: "16px",
  },

  buttonContainer: {
    paddingTop: "8px",
    paddingBottom: "8px",
    display: "flex",
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
  center: {
    fontSize: "16px",
    fontWeight: 600,
    textAlign: "center",
    margin: 0,
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
      width: 0,
      height: 0,
      margin: 0,
    },
  },
}));
