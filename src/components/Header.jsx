import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Icon } from "@iconify/react";
import menuLine from "@iconify/icons-clarity/menu-line";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Pdf from "../assets/resume0923.pdf";
import { withRouter } from "react-router";
import { useTheme } from "@material-ui/core/styles";
import roundArrowBackIos from "@iconify/icons-ic/round-arrow-back-ios";

import {
  PROGRAMMING_PATH,
  CODE_ART_PATH,
  WATERCOLORS_PATH,
  HOME_PATH,
  SHANGHAI_SUBWAY_PATH,
} from "..";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const RESUME = "RESUME";
export const PROGRAMMING = "PROGRAMMING";
export const CODE_ART = "CODE_ART";
export const SHANGHAI_SUBWAY = "SHANGHAI_SUBWAY";
export const WATERCOLORS = "WATERCOLORS";

function NavItem({ name, isFocused, children, onClick, href }) {
  const classes = useStyles();

  let className = "header-link";
  if (isFocused) className = className + " header-link-selected";
  return (
    <div name={name} className={classes.navItemStyle}>
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

function Header({ history, currentTab, showBackArrow }) {
  const [open, setOpen] = useState(false);
  const shouldUnderline = (name) => name === currentTab;
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const handleOnclick = () => {
    if (showBackArrow && smallBreakpoint) {
      history.goBack();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div className={classes.moweb}>
        <header className={classes.containerStyle}>
          <SwipeableDrawer open={open} onClose={() => setOpen(false)}>
            <List>
              <div className={classes.drawerStyle}>
                <ListItem
                  button
                  key="resume"
                  selected={shouldUnderline(RESUME)}
                  onClick={() => window.open(Pdf, "_blank")}
                >
                  <div className={classes.drawerItemStyle}>resume</div>
                </ListItem>

                <ListItem
                  button
                  key="programming"
                  selected={shouldUnderline(PROGRAMMING)}
                  onClick={() => history.push(PROGRAMMING_PATH)}
                >
                  <div className={classes.drawerItemStyle}>programming</div>
                </ListItem>

                {/* <ListItem
                  button
                  key="code_art"
                  selected={shouldUnderline(CODE_ART)}
                  onClick={() => history.push(CODE_ART_PATH)}
                >
                  <div className={classes.drawerItemStyle}>code/art</div>
                </ListItem> */}

                <ListItem
                  button
                  key="watercolors"
                  selected={shouldUnderline(WATERCOLORS)}
                  onClick={() => history.push(WATERCOLORS_PATH)}
                >
                  <div className={classes.drawerItemStyle}>watercolors</div>
                </ListItem>

                <ListItem
                  button
                  key="shanghai_subway"
                  selected={shouldUnderline(SHANGHAI_SUBWAY)}
                  onClick={() => history.push(SHANGHAI_SUBWAY_PATH)}
                >
                  <div className={classes.drawerItemStyle}>shanghai subway</div>
                </ListItem>
                <hr className={classes.navDividerStyle} />
                <ListItem
                  button
                  key="github"
                  onClick={() =>
                    window.open("https://github.com/kristing400", "_blank")
                  }
                >
                  <div className={classes.drawerItemStyle}>github</div>
                </ListItem>

                <ListItem
                  button
                  key="linkedin"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/kristin-yin-347b60110/",
                      "_blank"
                    )
                  }
                >
                  <div className={classes.drawerItemStyle}>linkedin</div>
                </ListItem>

                <ListItem
                  button
                  key="instagram"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/_kristinyin_",
                      "_blank"
                    )
                  }
                >
                  <div className={classes.drawerItemStyle}>instagram</div>
                </ListItem>
              </div>
            </List>
          </SwipeableDrawer>
          <button className={classes.iconStyle} onClick={handleOnclick}>
            <Icon
              icon={
                smallBreakpoint && showBackArrow ? roundArrowBackIos : menuLine
              }
              style={{ fontSize: "24px", color: "#000100" }}
            />
          </button>
          <button
            onClick={() => history.push(HOME_PATH)}
            className={classes.titleStyle}
          >
            KRISTIN YIN
          </button>
        </header>
        <hr />
      </div>
      <div className={classes.desktop}>
        <header className={classes.containerStyle}>
          <button
            onClick={() => history.push(HOME_PATH)}
            className={classes.titleContainerStyle}
          >
            <h1 className={classes.titleStyle}>Kristin Yin</h1>
          </button>
          <div className={classes.navContainerStyle}>
            <NavItem
              isFocused={shouldUnderline(RESUME)}
              name={RESUME}
              href={Pdf}
            >
              resume
            </NavItem>
            <NavItem
              isFocused={shouldUnderline(PROGRAMMING)}
              name={PROGRAMMING}
              onClick={() => history.push(PROGRAMMING_PATH)}
            >
              programming
            </NavItem>
            {/* <NavItem
              isFocused={shouldUnderline(CODE_ART)}
              name={CODE_ART}
              onClick={() => history.push(CODE_ART_PATH)}
            >
              code/art
            </NavItem> */}
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
      </div>
    </>
  );
}

export default withRouter(Header);

const useStyles = makeStyles((theme) => ({
  moweb: {
    visibility: "hidden",
    height: 0,

    [theme.breakpoints.down("sm")]: {
      visibility: "visible",
      height: "100%",
    },
  },

  desktop: {
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
      height: 0,
    },
  },

  navItemStyle: {
    paddingLeft: "32px",
    paddingRight: "32px",
  },

  navDividerStyle: {
    marginLeft: "8px",
    marginRight: "8px",
  },

  navContainerStyle: {
    paddingTop: "24px",
    paddingBottom: "56px",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
  },

  drawerStyle: {
    fontSize: "18px",
  },

  drawerItemStyle: {
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "8px",
    paddingRight: "8px",
  },

  containerStyle: {
    paddingTop: "56px",
    paddingBottom: "40px",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "24px",
      paddingBottom: "24px",
      display: "flex",
      justifyContent: "space-between",
    },
  },

  titleStyle: {
    fontFamily: "Julius Sans One",
    fontSize: "36px",
    fontWeight: "normal",
    textAlign: "center",
    letterSpacing: "0.1em",
    color: "#000100",

    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },

  titleContainerStyle: {
    textAlign: "center",
    margin: "auto",
    width: "100%",
  },
}));
