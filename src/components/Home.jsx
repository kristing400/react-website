import React from "react";
import Navigation from "./Navigation";
import profile from "../assets/me.jpg";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <Grid
          direction="row"
          container
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <div className={classes.imgContainerStyle}>
              <img
                src={profile}
                alt="profile_img"
                width="100%"
                className={classes.imgStyle}
              />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.textContainerStyle}>
              <h3 className={classes.subtitleStyle}>
                Software Engineer @ Airbnb
              </h3>
              <br />
              <p>Carngie Mellon University 2018</p>
              <p>Bachelors of Computer Science and Arts</p>
              <br />
              <p>
                Ask me about: Airbnb, anime, watercolors, drawing, CMU, BCSA,
                League of Legends, traveling, Shanghai, working in tech,
                badminton, interactive art, generative art, video games, piano
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    overflowY: "hidden",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "32px",
    },
  },

  imgContainerStyle: {
    maxWidth: "400px",
    padding: "32px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      padding: "8px",
    },
  },

  subtitleStyle: {
    fontFamily: "Julius Sans One",
    fontSize: "18px",
    fontWeight: "normal",
  },

  textContainerStyle: {
    maxWidth: "400px ",
    margin: "32px",
    [theme.breakpoints.down("sm")]: {
      margin: "16px",
      textAlign: "center",
    },
  },

  imgStyle: {
    borderRadius: "50%",
  },
}));
