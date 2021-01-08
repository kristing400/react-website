import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import generator from "../assets/programming/tailord/tailord-generator.jpg";
import inventory from "../assets/programming/tailord/tailord-inventory.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function Tailord() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="Tailor'd"
          subtitle="HackCMU 2016: Best Mobile App"
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
                <p>
                  TAILOR'D focuses on making the most important choice of the
                  day an easy decision: choosing what to wear! With an
                  auto-generating closet based on complementary color palettes,
                  and an easy way to view your closet virtually, you'll never
                  spend too long trying on outfits in the morning again.
                </p>
              </div>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>The Team</h3>
                <p>
                  Christina Ou: Software Engineer
                  <br />
                  Kristin Yin: Software Engineer
                  <br />
                  Selena Zhen: Designer
                  <br />
                  Tiffany Zhu: Software Engineer
                </p>
              </div>
              <h3 className={classes.subtitleStyle}>Github</h3>

              <div className={classes.buttonContainer}>
                <div style={{ marginRight: "8px" }}>
                  <Button href="https://github.com/christinaou/tailord">
                    client
                  </Button>
                </div>
                <Button href="https://github.com/christinaou/tailord">
                  server
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={8} xs={12}>
            <div>
              <iframe
                className={classes.iFrame}
                src="https://www.youtube.com/embed/7qeeZrcVA7w"
                frameborder="0"
                scrolling="no"
                allowfullscreen
                title="Tailor'd"
              ></iframe>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <h3 className={classes.center}>Generator</h3>
            <img src={generator} width="100%" alt="tailor'd generator" />
            <p className={classes.center}>
              Generate outfits based on complementary color palettes or manually
              mix and match clothes from your inventory
            </p>
          </Grid>
          <Grid item md={6} xs={12}>
            <h3 className={classes.center}>Inventory</h3>
            <img src={inventory} width="100%" alt="tailor'd inventory" />
            <p className={classes.center}>
              View your closet and favorited outfits on the go!
            </p>
          </Grid>
          <Grid item md={4}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Technologies used</h3>
                <p>
                  Ionic: Mobile framework that uses HTML, CSS, and JavaScript
                  <br />
                  Flask: Web framework for server side
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <div>
              <h3 className={classes.subtitleStyle}>Challenges</h3>
              <p>
                We had some issues getting started with the Ionic interface,
                since only one member had experience with front end work. We
                also had some problems with Flask and setting up our application
                on Heroku. This was all our first time building something end to
                end, and given the limited Hackathon time, we ran into a lot of
                issues setting things up.
              </p>
            </div>
          </Grid>
          <Grid item md={8}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Inspiration!</h3>
                <p>
                  Although color isn't the only thing to picking a nice outfit,
                  by just wearing colors that match your outfit can gain a huge
                  boost. Many people have trouble picking out outfits, because
                  they are not good with colors. Particularly, we have a friend
                  who is color blind and often needs to double check his outfits
                  with friends before starting his day. We hope TAILOR'D would
                  be an app that could help people like our friend who either
                  have a disability in identifying colors or just needs an extra
                  hand in find colors that match.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div>
              <h3 className={classes.subtitleStyle}>Future improvements</h3>
              <p>
                We were able to build the main features we had in mind, but
                there are always room for improvements. For example, we could
                build a camera feature that cuts out a pieces of clothing and
                uploads them to your virtual closet, suggest stores that have
                clothes that matches your outfit, and use machine learning to
                model personal taste or style.
              </p>
            </div>
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
    textAlign: "center",
    fontSize: "16px",
    margin: 0,
    marginBottom: "16px",
  },
}));
