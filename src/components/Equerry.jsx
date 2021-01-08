import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import home from "../assets/programming/equerry/equerry_home.png";
import map from "../assets/programming/equerry/equerry_map.png";
import onboarding1 from "../assets/programming/equerry/equerry01.png";
import onboarding2 from "../assets/programming/equerry/equerry02.png";
import onboarding3 from "../assets/programming/equerry/equerry03.png";
import onboarding4 from "../assets/programming/equerry/equerry04.png";

import storyboard1 from "../assets/programming/equerry/equerry_storyboard_1.JPG";
import storyboard2 from "../assets/programming/equerry/equerry_storyboard_2.JPG";
import storyboard3 from "../assets/programming/equerry/equerry_storyboard_3.JPG";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import TextLink from "./TextLink";

export default function Equerry() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="Equerry"
          subtitle="Tartanhacks 2018: Best Social Impact Award"
        />
        <Grid
          direction="row"
          container
          justify="center"
          alignItems="flex-start"
          spacing={smallBreakpoint ? 4 : 8}
        >
          <Grid item md={3} xs={6}>
            <h3 className={classes.center}>Home screen</h3>
            <img src={home} width="100%" alt="home" />
          </Grid>
          <Grid item md={3} xs={6}>
            <h3 className={classes.center}>Neighborhood saftey map</h3>
            <img src={map} width="100%" alt="map" />
          </Grid>
          <Grid item md={6}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>
                  Have you ever need to get out from an awkward social
                  situation?
                </h3>

                <p>
                  Equerry is a wearable tech that gets users out of awkward
                  social situations, or in extreme cases, emergency situations.
                  If the user is in an awkward social situation, Equerry will
                  pick up customizable voice triggers, and make a call to your
                  cell phone from maybe "a significant other". While in an
                  emergency situation, Equerry will call the police, and text
                  your loved ones to let them know you need assistance.
                </p>
              </div>
              <div className={classes.section}>
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
                <Button href="https://github.com/christinaou/tartanhacks">
                  github
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={3} xs={6}>
            <h3 className={classes.center}>Begin onboarding process</h3>
            <img src={onboarding1} width="100%" alt="onboarding begin" />
          </Grid>
          <Grid item md={3} xs={6}>
            <h3 className={classes.center}>Fill out basic info</h3>
            <img src={onboarding2} width="100%" alt="onboarding info" />
          </Grid>
          <Grid item md={3} xs={6}>
            <h3 className={classes.center}>Customize voice triggers</h3>
            <img
              src={onboarding3}
              height={smallBreakpoint && "276px"}
              width="100%"
              alt="voice triggers"
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <h3 className={(classes.subtitleStyle, classes.center)}>
              Add emergency alerts & contacts
            </h3>
            <img src={onboarding4} width="100%" alt="contacts" />
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Technologies used</h3>
                <p>
                  <TextLink href="https://p5js.org/">p5.js</TextLink>: Sends
                  audio clip from Equerry device.
                  <br />
                  <TextLink href="https://www.djangoproject.com/">
                    Django
                  </TextLink>
                  : Web Framework
                  <br />
                  <TextLink href="https://www.twilio.com/docs/">
                    Twilio API
                  </TextLink>
                  : Making calls and texts
                  <br />
                  <TextLink href="https://cloud.google.com/speech-to-text/">
                    Google Speech
                  </TextLink>
                  : Performing speech to text
                  <br />
                  <TextLink href="https://cloud.google.com/maps-platform/">
                    Google Maps API
                  </TextLink>
                  : Show potentially dangerous areas
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <div>
              <h3 className={classes.subtitleStyle}>How does it work?</h3>
              <p>
                1. The user starts by setting up his/her profile and configuring
                the customizable trigger words (which can be changed anytime as
                well).
                <br />
                2. The Equerry device (in our case a phone) picks up on any
                sounds greater than a certain threshold, and sends that voice
                clip to our server.
                <br />
                3. Our server will compute speech to text detection on the voice
                clip and check for any trigger words that match the user's
                configuration settings.
                <br />
                4. If there is a match, Twilio API will be used to either call
                the cops and send texts to the user's emergency contacts in an
                emergency situation, or call the user's phone in an awkward
                social situation. Other features: The app also included a map
                page that shows potentially dangerous areas that other users
                have had emergency situations in.
              </p>
            </div>
          </Grid>
          <Grid item md={4} xs={4}>
            <img src={storyboard1} width="100%" alt="storyboard 1" />
          </Grid>
          <Grid item md={4} xs={4}>
            <img src={storyboard2} width="100%" alt="storyboard 2" />
          </Grid>
          <Grid item md={4} xs={4}>
            <img src={storyboard3} width="100%" alt="storyboard 3" />
          </Grid>
          <Grid item md={8}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>
                  Results & what we learned
                </h3>
                <p>
                  The exciting part is that we ended up winning Facebook's Best
                  Social Impact Award, and were invited to Facebook's hackathon
                  which will be held in November 2018. We were very satisfied
                  that we were able to create a working demo in under 24 hrs and
                  nothing was hardcoded (other than the map points lol since we
                  don't actually have real data). However, we did realize that
                  we spent a lot of time perfecting the onboarding process even
                  though it is not the main focus of Equerry. Since, we had to
                  keep our demos short, we were barely able to show the judges
                  the actual app design and onboarding process. Therefore, we
                  learned that next time we should priortize our time based on
                  the importance of the feature, and think about how we would
                  demo our project.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div>
              <h3 className={classes.subtitleStyle}>Inspiration!</h3>
              <p>
                We got our idea from Queen Elizabeth II! When the queen tries to
                get out of a social situation, she would move her bag from one
                hand to the other, and this secret code will let her staff know
                to swoop in and end the conversation.
              </p>
            </div>
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
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 600,
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
