import React from "react";
import Pdf from "../assets/resume.pdf";
import { withRouter } from "react-router";
import {
  HACKATHONS_PATH,
  CODE_ART_PATH,
  WATERCOLORS_PATH,
  HOME_PATH,
  SHANGHAI_SUBWAY_PATH,
} from "..";

export const RESUME = "RESUME";
export const HACKATHONS = "HACKATHONS";
export const CODE_ART = "CODE_ART";
export const SHANGHAI_SUBWAY = "SHANGHAI_SUBWAY";
export const WATERCOLORS = "WATERCOLORS";

function NavItem({ name, isFocused, children, onClick, href }) {
  let className = "header-link";
  if (isFocused) className = className + " header-link-selected";
  return (
    <div name={name} style={navItemStyle}>
      <a
        className={className}
        name={name}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
}

function Header({ history, currentTab }) {
  const shouldUnderline = (name) => name === currentTab;

  return (
    <>
      <header style={containerStyle}>
        <button
          onClick={() => history.push(HOME_PATH)}
          style={titleContainerStyle}
        >
          <h1 style={titleStyle}>Kristin Yin</h1>
        </button>
        <div style={navContainerStyle}>
          <NavItem isFocused={shouldUnderline(RESUME)} name={RESUME} href={Pdf}>
            resume
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(HACKATHONS)}
            name={HACKATHONS}
            onClick={() => history.push(HACKATHONS_PATH)}
          >
            hackathons
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(CODE_ART)}
            name={CODE_ART}
            onClick={() => history.push(CODE_ART_PATH)}
          >
            code/art
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(WATERCOLORS)}
            name={WATERCOLORS}
            onClick={() => history.push(WATERCOLORS_PATH)}
          >
            watercolors
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(SHANGHAI_SUBWAY)}
            name={SHANGHAI_SUBWAY}
            onClick={() => history.push(SHANGHAI_SUBWAY_PATH)}
          >
            shanghai subway
          </NavItem>
        </div>
        <hr />
      </header>
    </>
  );
}

export default withRouter(Header);

const navItemStyle = {
  paddingLeft: "32px",
  paddingRight: "32px",
};

const navContainerStyle = {
  paddingTop: "24px",
  paddingBottom: "56px",
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
};

const containerStyle = {
  paddingTop: "56px",
  paddingBottom: "48px",
};

const titleStyle = {
  fontFamily: "Julius Sans One",
  fontSize: "36px",
  fontWeight: "normal",
  textAlign: "center",
  letterSpacing: "0.1em",
  color: "#000100",
};

const titleContainerStyle = {
  textAlign: "center",
  margin: "auto",
  width: "100%",
};
