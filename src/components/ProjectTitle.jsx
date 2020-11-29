import React from "react";
import { ReactComponent as Arrow } from "../assets/icons/arrow_back.svg";
import { withRouter } from "react-router";

function ProjectTitle({ title, subtitle, history }) {
  return (
    <div style={{ display: "flex", alignItems: "flexStart" }}>
      <button
        onClick={() => history.goBack()}
        style={{ height: "100%", marginRight: "16px" }}
      >
        <Arrow width={24} height={24} />
      </button>
      <div style={{ paddingBottom: "24px" }}>
        <h3 style={titleStyle}>{title}</h3>
        <h4 style={subtitleStyle}>{subtitle}</h4>
      </div>
    </div>
  );
}

export default withRouter(ProjectTitle);

const titleStyle = {
  fontFamily: "Julius Sans One",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "24px",
  lineHeight: "26px",
  margin: 0,
};

const subtitleStyle = {
  fontFamily: "Julius Sans One",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "16px",
};
