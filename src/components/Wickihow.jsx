import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Button from "./Button";
import wickihow from "../assets/programming/wickihow/wickihow.jpg";
import wickihow2 from "../assets/programming/wickihow/wickihow_2.png";
import wickihow3 from "../assets/programming/wickihow/wickihow_3.png";
import TextLink from "./TextLink";

export default function Wickihow() {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <div className={classes.container}>
        <ProjectTitle
          title="WICKIHOW"
          subtitle="Modding & Remixing Fall 2017"
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
                  Wickihow.xyz is a mock website (like the name suggests) of
                  wikihow.com. I thought it would be funny if users would
                  accidently stumble upon my website looking for wikihow advices
                  but only ending up with nonsense advises. The app will let the
                  user ask any questions that they wish to be answered, and
                  generates a page of what seems to be a legit wikihow article.
                  However, the generated article is really a nonsensical article
                  constructed from real wickihow articles webscrped via cheerio.
                </p>
              </div>
              <div className={classes.buttonContainer}>
                <Button href="http://www.wickihow.xyz/">live demo</Button>
              </div>
              <div className={classes.buttonContainer}>
                <Button href="https://github.com/kristing400/wickiHow">
                  github
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item md={8} xs={12}>
            <img src={wickihow} width="100%" alt="wickihow" />
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Technologies used</h3>
                <p>
                  <TextLink href="https://www.djangoproject.com/">
                    Django
                  </TextLink>
                  : web framework
                  <br />
                  <TextLink href="https://cheerio.js.org/">cheerio</TextLink>:
                  webscrape real wikihow articles
                  <br />
                  <TextLink href="https://www.nltk.org/">NLTK</TextLink>:
                  natural language processing library
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={8}>
            <div className={classes.textContainer}>
              <div>
                <h3 className={classes.subtitleStyle}>Generating articles</h3>
                <p>
                  Because I wanted to trick the user to thinking my website is
                  wikihow.com, I thought it would be interesting if the articles
                  would gradually get more random as the user reads on.
                  Therefore, I used NLTK, a natural processing library to look
                  for similar words from the user's query in the database when
                  generating the articles. However, this did not turn out as
                  well as I expected, since I did not have an efficient way to
                  search for similar words/sentences through the database.
                  Therefore, as a proof of concept I linked some{" "}
                  <TextLink href="http://www.wickihow.xyz/?title=How%20to%20Text%20Your%20Girlfriend">
                    pre-generated pages
                  </TextLink>{" "}
                  from the home page of my website that attempted to create
                  gradually more random articles.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={wickihow2} width="100%" alt="wickihow snippet 1" />
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={wickihow3} width="100%" alt="wickihow snippet 2" />
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
}));
