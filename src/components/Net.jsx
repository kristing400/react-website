import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import home from "../assets/programming/net/home.png";
import eventInfo from "../assets/programming/net/eventInfo.png";
import inProgress from "../assets/programming/net/inProgress.png";
import results from "../assets/programming/net/results.png";
import profiles from "../assets/programming/net/profiles.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import TextLink from "./TextLink";

export default function Net() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="NET"
          subtitle="Facebook Global Hackathon Finals 2018 - Top 6 finalists"
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
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackathon%2Fvideos%2F2306855209387580%2F&show_text=0&width=560&t=1770"
                className={classes.iFrame}
                allowTransparency={true}
                allowFullScreen={true}
                scrolling="no"
                title="Facebook Hackathon"
              ></iframe>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <p>
                  Have you ever forgotten someone’s name right after you’ve met
                  them? NET is an app that notes down who you’ve met at social
                  events, and builds profiles for each person based on your
                  conversations. Using speech recognition and natural language
                  processing, NET will remember your conversations so that you
                  don’t have to.
                </p>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>The team</h3>
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
            </div>
          </Grid>
          {smallBreakpoint && (
            <Grid item xs={12}>
              <h3 className={(classes.subtitleStyle, classes.moweb)}>
                Screens
              </h3>
            </Grid>
          )}

          <Grid item md={4} xs={6}>
            <h3 className={classes.center}>Home screen</h3>
            <img src={home} width="100%" alt="home" />
          </Grid>
          <Grid item md={4} xs={6}>
            <h3 className={(classes.center, classes.center)}>Event info</h3>
            <img src={eventInfo} width="100%" alt="event info" />
          </Grid>
          <Grid item md={4} xs={6}>
            <h3 className={(classes.center, classes.center)}>
              Recording & processing conversations
            </h3>
            <img src={inProgress} width="100%" alt="recording" />
          </Grid>
          <Grid item md={4} xs={6}>
            <h3 className={(classes.center, classes.center)}>NET preview</h3>
            <img
              src={results}
              height={smallBreakpoint && "276px"}
              width="100%"
              alt="resutls"
            />
          </Grid>
          <Grid item md={4} xs={6}>
            <h3 className={(classes.center, classes.center)}>
              Constructed profile
            </h3>
            <img src={profiles} width="100%" alt="profile" />
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Technologies used</h3>
                <p>
                  <TextLink href="https://p5js.org/">p5.js</TextLink>: Capturing
                  audio & data visualization
                  <br />
                  <TextLink href="https://www.djangoproject.com/">
                    Django
                  </TextLink>
                  : Web Framework
                  <br />
                  <TextLink href="https://cloud.google.com/speech-to-text/">
                    Google Speech
                  </TextLink>
                  : Performing speech to text
                  <br />
                  <TextLink href="https://cloud.google.com/natural-language">
                    Google Natural Language
                  </TextLink>
                  : Detect word association
                </p>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>How does it work?</h3>
                <p>
                  1. All the user needs to do is hit "Create Net" at the start
                  of a social event.
                  <br />
                  2. Net uses trigger words to discern between multiple
                  coversations. Once it hears certain words like "hello" and
                  "goodbye", Net will automatically recognize a new conversation
                  starting or ending. Throughout the social event, net will
                  construct profiles of people the user meets based off of
                  conversations.
                  <br />
                  3. At the end of the event, the user will be able to to view
                  all the created profiles in chronological order.
                </p>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Hackathon results</h3>
                <p>
                  Although we didn’t make top 3, we were still super honored for
                  making top 6 representing CMU, and competing with so many
                  amazing hackers from around globe! This was a memorable
                  hackathon experience that I will never forget!
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
