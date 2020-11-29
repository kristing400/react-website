import React from "react";
import SocialNavBar from "./SocialNavBar";
import Header from "./Header";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

function Navigation({ currentTab, showBackArrow }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.desktop}>
        <SocialNavBar />
      </div>
      <Header currentTab={currentTab} showBackArrow={showBackArrow} />
    </div>
  );
}

export default withRouter(Navigation);

const useStyles = makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
      height: 0,
    },
  },
}));
