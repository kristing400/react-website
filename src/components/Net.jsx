import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";

export default function Net() {
  const classes = useStyles();

  return (
    <>
      <Navigation currentTab={PROGRAMMING} />
      <ProjectTitle
        title="NET"
        subtitle="Facebook Global Hackathon Finals 2018 - Top 6 finalists"
      />
      <Grid
        direction="row"
        container
        justify="center"
        alignItems="center"
        spacing={8}
      >
        <Grid item md={8}>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackathon%2Fvideos%2F2306855209387580%2F&show_text=0&width=560&t=1770"
              style={{ border: "none", overflow: "hidden" }}
              width="100%"
              height="450px"
              scrolling={false}
              allowTransparency={true}
              allowFullScreen={true}
            ></iframe>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            {/* <h3 className={classes.subtitleStyle}>What is NET?</h3> */}
            <p>
              Have you ever forgotten someone’s name right after you’ve met
              them? NET is an app that notes down who you’ve met at social
              events, and builds profiles for each person based on your
              conversations. Using speech recognition and natural language
              processing, NET will remember your conversations so that you don’t
              have to.
            </p>
          </div>
          <div>
            <h3 className={classes.subtitleStyle}>The Team</h3>
            <p>
              Christina Ou: Software Engineer
              <br />
              Ken Situ: Designer
              <br />
              Kristin Yin: Software Engineer
              <br />
              Tiffany Zhu: Software Engineer
            </p>
          </div>
          <div className={classes.buttonContainer}>
            <Button href="https://github.com/kristing400/fbhacks">
              github
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles(() => ({
  iframeStyles: {
    width: "716px",
    height: "447px",
  },

  subtitleStyle: {
    fontSize: "18px",
    fontWeight: 600,
  },

  buttonContainer: {
    paddingTop: "16px",
  },
}));
