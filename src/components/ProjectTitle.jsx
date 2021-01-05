import React from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import roundArrowBackIos from "@iconify/icons-ic/round-arrow-back-ios";
import { Icon } from "@iconify/react";
import { PROGRAMMING_PATH } from "..";

function ProjectTitle({ title, subtitle, history }) {
  const classes = useStyles();
  return (
    <div>
      <button
        onClick={() => history.push(PROGRAMMING_PATH)}
        className={classes.button}
      >
        <div className={classes.icon}>
          {" "}
          <Icon
            icon={roundArrowBackIos}
            style={{ fontSize: "24px", color: "#000100" }}
          />
        </div>
        <div className={classes.titleContainer}>
          <h3 className={classes.titleStyle}>{title}</h3>
          <h4 className={classes.subtitleStyle}>{subtitle}</h4>
        </div>
      </button>
    </div>
  );
}

export default withRouter(ProjectTitle);

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: "16px",
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
      width: 0,
      height: 0,
      padding: 0,
      margin: 0,
    },
  },
  button: {
    height: "100%",
    display: "flex",
    alignItems: "flexStart",
  },
  titleContainer: {
    paddingBottom: "24px",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "24px",
      paddingBottom: "24px",
    },
  },
  titleStyle: {
    fontFamily: "Julius Sans One",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "26px",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  subtitleStyle: {
    fontFamily: "Julius Sans One",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "16px",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "14px",
      marginTop: "8px",
    },
  },
}));