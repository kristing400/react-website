import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function PressureClassifier() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="PRESSURE CLASSIFIER"
          subtitle="Experimental Capture Spring 2017"
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
                src="https://www.youtube.com/embed/eCfKu0lOXdk"
                frameborder="0"
                allow="autoplay"
                allowfullscreen
                className={classes.iFrame}
                title="pressure classifier"
              ></iframe>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <p>
                  We were inspired by the potential of what the SenselMorph, a
                  pressure sensor module, could do. With the SenselMorph we will
                  be able to identify not only the physical shapes and surfaces
                  of the objects that touch the sensor, but also the
                  distribution of pressure. With this idea in mind, we wanted to
                  investigate how “identifiable” certain aspects of our body can
                  be from others. With the help of Machine Learning and the
                  SenselMorph we were able to identify the owners of our
                  friends' handprints and footprints.
                </p>
              </div>
              <div className={classes.section}>
                <p>In collaboration with Jason Ma</p>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Technologies used</h3>
                <p>
                  Sensel Morph: Collecting data
                  <br />
                  Pytorch: Training the model
                  <br />
                  OpenFrameworks: Building the app
                  <br />
                  MeteorJS: Data Visualization
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Training</h3>
                <p>
                  In order to train a robust neural net, we needed several
                  hundreds of photos. However, since the event we are recording
                  is fairly short, repeating the event over and over wasn’t too
                  hard. To further expedite this process, we made it so that our
                  script can automatically save images when it detects that the
                  event has “ended”. Across four people, we gathered about 400
                  sample images, and after removing poor samples, we ended with
                  about 300. In hindsight, we probably should have trained it on
                  much more data samples, but for the purposes of the
                  assignment, 300 was more than sufficient. With Pytorch, we
                  were able to implement a convolutional neural network in
                  Python and build a model using the 1200 train images that were
                  collected.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Results</h3>
                <p>
                  When training a neural net, there is a concept called “epochs”
                  -- how long to train the data for. If we overtrain the data,
                  we suffer from over fitting, which is when the model is too
                  hard coded on recognizing the training data, and will fail to
                  recognize any other external picture that isn’t identical to
                  any of its training data. Therefore, to get the best results,
                  we had to play around with the epochs. Overall, the results
                  were around 85% – 90% accuracy, which is over our
                  expectations.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Conclusion</h3>
                <p>
                  Once we were able to classify hands/feet, we were able to
                  confirm our hypothesis that every hand is unique and are
                  identifiable just like fingerprint. From this project, we’ve
                  realized that this could have many more applications than just
                  classifying hand and feet. Some other use cases include: seat
                  classification for sit-down establishments like restaurants
                  and barber shops, front door mat classifiers to identify
                  visitors, and so on.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  moweb: {
    visibility: "hidden",
    width: 0,
    height: 0,
    margin: 0,

    [theme.breakpoints.down("sm")]: {
      visibility: "visible",
      height: "100%",
      width: "100%",
    },
  },
  border: {
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
    borderRadius: "8px",
  },
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
