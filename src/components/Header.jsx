import React, { useState, useCallback } from "react";
import Pdf from "../assets/resume.pdf";
import { withRouter } from "react-router";
import {
  HACKATHONS_PATH,
  CODE_ART_PATH,
  MIXED_MEDIA_PATH,
  WATERCOLORS_PATH,
  HOME_PATH,
} from "..";

export const RESUME = "RESUME";
export const HACKATHONS = "HACKATHONS";
export const CODE_ART = "CODE_ART";
export const MIXED_MEDIA = "MIXED_MEDIA";
export const WATERCOLORS = "WATERCOLORS";

function NavItem({
  name,
  isFocused,
  setFocusedButton,
  children,
  onClick,
  href,
}) {
  const onMouseEnter = useCallback((e) => setFocusedButton(e.target.name), [
    setFocusedButton,
  ]);

  const onMouseLeave = useCallback((e) => setFocusedButton(undefined), [
    setFocusedButton,
  ]);

  return (
    <div
      name={name}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={navItemStyle}
    >
      <a
        name={name}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={isFocused ? selectedNavStyle : undefined}
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
  const [focusedButton, setFocusedButton] = useState(currentTab);

  const shouldUnderline = (name) =>
    name === focusedButton || name === currentTab;

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
          <NavItem
            isFocused={shouldUnderline(RESUME)}
            name={RESUME}
            setFocusedButton={setFocusedButton}
            href={Pdf}
          >
            resume
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(HACKATHONS)}
            name={HACKATHONS}
            setFocusedButton={setFocusedButton}
            onClick={() => history.push(HACKATHONS_PATH)}
          >
            hackathons
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(CODE_ART)}
            name={CODE_ART}
            setFocusedButton={setFocusedButton}
            onClick={() => history.push(CODE_ART_PATH)}
          >
            code/art
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(WATERCOLORS)}
            name={WATERCOLORS}
            setFocusedButton={setFocusedButton}
            onClick={() => history.push(WATERCOLORS_PATH)}
          >
            watercolors
          </NavItem>
          <NavItem
            isFocused={shouldUnderline(MIXED_MEDIA)}
            name={MIXED_MEDIA}
            setFocusedButton={setFocusedButton}
            onClick={() => history.push(MIXED_MEDIA_PATH)}
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

const selectedNavStyle = {
  paddingBottom: "8px",
  borderBottomColor: "#94C5CC",
  borderBottomWidth: "2px",
  borderBottomStyle: "solid",
};

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
