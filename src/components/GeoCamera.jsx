import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cathedral from "../assets/programming/geoCamera/geo_camera1.1.jpg";
import cathedralAntiGhost from "../assets/programming/geoCamera/geo_camera1.2.jpg";
import sculpture from "../assets/programming/geoCamera/geo_camera2.1.jpg";
import sculptureAntiGhost from "../assets/programming/geoCamera/geo_camera2.2.jpg";
import ceiling from "../assets/programming/geoCamera/geo_camera3.1.jpg";
import celingAntiGhost from "../assets/programming/geoCamera/geo_camera3.2.jpg";
import eifle from "../assets/programming/geoCamera/geo_camera4.1.jpg";
import eifleAntiGhost from "../assets/programming/geoCamera/geo_camera4.2.jpg";
import windows from "../assets/programming/geoCamera/geo_camera5.1.jpg";
import windowsAntiGhost from "../assets/programming/geoCamera/geo_camera5.2.jpg";
import tsne from "../assets/programming/geoCamera/tsne.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import TextLink from "./TextLink";

export default function GeoCamera() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="GEO CAMERA"
          subtitle="Experimental Capture Spring 2017"
        />
        <Grid
          direction="row"
          container
          justify="center"
          alignItems="flex-start"
          spacing={smallBreakpoint ? 4 : 8}
        >
          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextLeft}>Normal</div>
            </Grid>
          )}
          <Grid item md={4}>
            <img src={ceiling} width="100%" alt="ceiling" />
          </Grid>
          <Grid item md={4}>
            <img src={celingAntiGhost} width="100%" alt="ceilng anti-ghost" />
          </Grid>
          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextRight}>Anti-ghost</div>
            </Grid>
          )}

          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextLeft}>Normal</div>
            </Grid>
          )}
          <Grid item md={4}>
            <img src={eifle} width="100%" alt="Eifle tower" />
          </Grid>
          <Grid item md={4}>
            <img
              src={eifleAntiGhost}
              width="100%"
              alt="Eifle tower anti-ghost"
            />
          </Grid>
          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextRight}>Anti-ghost</div>
            </Grid>
          )}

          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextLeft}>Normal</div>
            </Grid>
          )}
          <Grid item md={4}>
            <img src={windows} width="100%" alt="windows" />
          </Grid>
          <Grid item md={4}>
            <img src={windowsAntiGhost} width="100%" alt="windows anti-ghost" />
          </Grid>
          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextRight}>Anti-ghost</div>
            </Grid>
          )}

          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextLeft}>Normal</div>
            </Grid>
          )}
          <Grid item md={4}>
            <img src={sculpture} width="100%" alt="sculpture" />
          </Grid>
          <Grid item md={4}>
            <img
              src={sculptureAntiGhost}
              width="100%"
              alt="sculpture anti-ghost"
            />
          </Grid>
          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextRight}>Anti-ghost</div>
            </Grid>
          )}

          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextLeft}>Normal</div>
            </Grid>
          )}
          <Grid item md={4}>
            <img src={cathedral} width="100%" alt="cathedral" />
          </Grid>
          <Grid item md={4}>
            <img
              src={cathedralAntiGhost}
              width="100%"
              alt="cathedral anti-ghost"
            />
          </Grid>
          {!smallBreakpoint && (
            <Grid item md={2}>
              <div className={classes.sideTextRight}>Anti-ghost</div>
            </Grid>
          )}

          <Grid item md={6}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Inspiration</h3>
                <p>
                  I was inspired by Philipp Schmitt’s{" "}
                  <TextLink href="http://philippschmitt.com/projects/camera-restricta">
                    Camera Restricta
                  </TextLink>
                  , and wanted to use a similar method of crowd sourcing data
                  while using geolocations. Therefore, I made a machine that
                  given a latitude longitude coordinate and a picture taken at
                  the location, will crowd source pictures that people have
                  posted online and fuse them to create a single picture of the
                  location. Thus, this is a camera that takes pictures of what
                  other people has taken.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>Collecting Data</h3>
                <p>
                  First, I wrote a Python script using{" "}
                  <TextLink href="https://temboo.com/library/Library/Flickr/">
                    Temboo/Flikr API
                  </TextLink>{" "}
                  to extract all the information I needed given a latitude
                  longitude coordinate as input. I was able to get over
                  thousands of images with one coordinate if the location is a
                  popular spot, which was exactly what I wanted. I then wrote
                  another Python script to download all these images and save it
                  somewhere in my laptop.
                </p>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className={classes.textContainer}>
              <div className={classes.section}>
                <h3 className={classes.subtitleStyle}>
                  Finding Relevant Images: ofxTSNE
                </h3>
                <p>
                  I realized it wasn’t realistic to use all the photos in one
                  location, because people upload such drastically different
                  photos. I had to figure out a way to "choose" the pictures
                  that looked closest to the “picture I am taking”. I used the
                  Openframeworks add-on{" "}
                  <TextLink href="https://github.com/genekogan/ofxTSNE">
                    ofxTSNE
                  </TextLink>{" "}
                  to create a grid that sorted the top couple thousands photos
                  by similarities.
                </p>
                <br />
                <br />
                <h3 className={classes.subtitleStyle}>
                  Generating Images & Final Results
                </h3>
                <p>
                  Finally I used a 7×7 grid to find the closest 49 pictures in
                  the TSNE grid from a given image (the initial image that I
                  took), and put these batch of pictures into{" "}
                  <TextLink href="http://kristinyin.com/portfolio/programming/www.kolor.com/autopano/">
                    Autopano
                  </TextLink>
                  , an image stitching software. The results turned out better
                  than I thought. Some were fairly normal, and just looked like
                  a shitty panorama job, and others turned out super
                  interesting. Above are some results with normal and anti-ghost
                  settings.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <img src={tsne} width="100%" alt="tsne" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  sideTextLeft: {
    transform: "rotate(-90deg) translateX(18px)",
    transformOrigin: "bottom right",
    textAlign: "end",
    fontFamily: "Julius Sans One",
    fontStyle: "normal",
    fontWeight: "normal",
    letterSpacing: "0.4em",
    color: "#6f727b ",
  },
  sideTextRight: {
    transform: "rotate(90deg) translateX(-18px)",
    transformOrigin: "bottom left",
    textAlign: "start   ",
    fontFamily: "Julius Sans One",
    fontStyle: "normal",
    fontWeight: "normal",
    letterSpacing: "0.4em",
    position: "absolute",
    color: "#6f727b ",
  },

  subtitleStyle: {
    fontSize: "16px",
    fontWeight: 600,
    margin: 0,
    paddingBottom: "16px",
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
