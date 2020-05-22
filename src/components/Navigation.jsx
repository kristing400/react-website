import React from "react";
import SocialNavBar from "./SocialNavBar";
import Header from "./Header";
import { ReactComponent as Arrow } from "../assets/icons/arrow_back.svg";
import { withRouter } from "react-router";

function Navigation({ currentTab, history, showBackArrow }) {
  return (
    <div>
      <SocialNavBar />
      <Header currentTab={currentTab} />
      {showBackArrow && (
        <div
          style={{
            width: "256px",
            position: "absolute",
            left: 0,
            top: "280px",
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
