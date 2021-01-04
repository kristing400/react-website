import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import notConfident from "../assets/programming/cozmo/cozmo_not_confident.png";
import confident from "../assets/programming/cozmo/cozmo_confident.png";
import convLayer from "../assets/programming/cozmo/cozmo_conv_layer.png";
import model from "../assets/programming/cozmo/cozmo_model.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Cozmo() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="AUTOPILOT COZMO"
          subtitle="Cognitive Robotics Spring 2018"
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
                src="https://www.youtube.com/embed/MXsPVDGYFY8"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                className={classes.iFrame}
              ></iframe>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <p>
                  We trained Anki's Cozmo robot to follow a line by training
                  camera images through a Convolutional Neural Net. We labeled
                  the training images with steering angles by manually driving
                  the robot on a course. We tried a couple of different ways to
                  train the model in order to increase accuracy, including
                  augmenting training images and trying different combinations
                  of numbers of convolutional and fully connected layers. The
                  model with the best results has 5 convolutional layers and 4
                  fully connected layers with ~5000 images.
                </p>
              </div>
              <div className={classes.section}>
                <p>In collaboration with Jason Ma</p>
              </div>
              <div className={classes.buttonContainer}>
                <Button href="https://github.com/kristing400/Self-Driving-Cozmo">
                  github
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Training & Processing</h3>
                <p>
                  We were able to train up the model using 120x160 images,
                  instead of our original 300x300. However, we were running into
                  weird cozmo(?) bugs where the camera would somehow get really
                  delayed, even though the only code we change was reshaping the
                  matrix to fit the new model.
                </p>
                <br />
                <p>It took around 30 minutes to train 50 epochs</p>
                <br />
                <p>Training size was around 5000 images</p>
                <br />
                <p>Processing time took 0.33 sec.</p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <img
              src={model}
              className={!smallBreakpoint && classes.border}
              width="100%"
            />
          </Grid>
          <Grid item md={6}>
            <img
              src={confident}
              className={!smallBreakpoint && classes.border}
              width="100%"
            />
          </Grid>
          <Grid item md={6}>
            <img
              src={notConfident}
              className={!smallBreakpoint && classes.border}
              width="100%"
            />
          </Grid>
          <Grid item md={8}>
            <img
              src={convLayer}
              className={!smallBreakpoint && classes.border}
              width="100%"
            />
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>
                  Challenges: Running the Robot
                </h3>
                <p>
                  We performed several optimisations with regards to how we
                  actually run our neural net. Our RunCNN.fsm script has two
                  parallel threads running at the same time. One thread runs the
                  cnn and updates a globally shared weight variable w. The
                  second thread reads in the most current weight variable, and
                  it performs a steering command based on w. By doing so, cozmo
                  is able to effectively run without any noticeable jitters. The
                  cnn on average updates around 3 times per second.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>
                  Challenges: Correcting Itself
                </h3>
                <p>
                  Since we only train cozmo “perfectly” on the course, it never
                  learns how to correct itself if it were to drive off the
                  course. Our naive implementation was to check for a confidence
                  level as it drives and if it is lower a threshold, it would go
                  into “recovery mode”. In this mode, the cozmo will backup
                  until its confidence level is above the threshold again.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>
                  Challenges: Training the CNN
                </h3>
                <p>
                  We tried many different ways to try improving the performance,
                  including augmenting the images: offsetting and flipping each
                  training image to create more training data (didn’t improve
                  performance), using a gaussian as the target output pattern
                  instead of one hot (improved performance), and trying
                  different combinations of numbers of convolutional layers and
                  fully connected layers (didn’t improve performance).
                </p>
              </div>
            </div>
          </Grid>

          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Future Extensions</h3>
                <p>
                  Improving the performance: we can analyze the weights of each
                  layer of the neural net to see what cozmo learned
                </p>
                <br />
                <p>Let cozmo identify and drive on forks and intersections</p>
                <br />
                <p>Let cozmo drive faster Identify obstacles or obstructions</p>
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
