import React from "react";
import SocialNavBar from "./SocialNavBar";
import Header from "./Header";
import { ReactComponent as Arrow } from "../assets/icons/arrow_back.svg";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

function Navigation({ currentTab, history, showBackArrow }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.desktop}>
        <SocialNavBar />
      </div>
      <Header currentTab={currentTab} />
      {showBackArrow && (
        <div
          style={{
            width: "256px",
            position: "absolute",
            left: 0,
            top: "304",
          }}
        >
          <button
            onClick={() => history.goBack()}
            style={{ right: "16%", position: "absolute" }}
          >
            <Arrow width={24} height={24} />
          </button>
        </div>
      )}
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
