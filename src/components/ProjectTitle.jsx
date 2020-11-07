import React from "react";

export default function ProjectTitle({ title, subtitle }) {
  return (
    <div style={{ paddingBottom: "24px" }}>
      <h3 style={titleStyle}>{title}</h3>
      <h4 style={subtitleStyle}>{subtitle}</h4>
    </div>
  );
}

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
