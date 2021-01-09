import React from "react";
import roundArrowBackIos from "@iconify/icons-ic/round-arrow-back-ios";
import roundArrowForwardIos from "@iconify/icons-ic/round-arrow-forward-ios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import close from "@iconify/icons-clarity/window-close-line";
import { Slide } from "@material-ui/core";
import { Icon } from "@iconify/react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

export default function ImgModal({
  photo,
  leftButtonDisabled,
  rightButtonDisabled,
  leftButtonOnClick,
  rightButtonOnClick,
  onClose,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const smallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Modal
      open={!!photo ? true : false}
      onClose={onClose}
      className={classes.modal}
    >
      <Slide direction="up" in={!!photo}>
        <div className={classes.paper}>
          {smallBreakpoint && (
            <button
              className={`${(classes.icon, classes.close)}`}
              onClick={onClose}
            >
              <Icon
                icon={close}
                style={{ fontSize: "32px", color: "#000100" }}
              />
            </button>
          )}
          {!smallBreakpoint && (
            <button
              disabled={leftButtonDisabled}
              className={`${classes.icon} ${classes.buttonLeft}`}
              onClick={leftButtonOnClick}
            >
              <Icon
                icon={roundArrowBackIos}
                style={{
                  fontSize: "24px",
                  color: leftButtonDisabled ? "transparent" : "#000100",
                }}
              />
            </button>
          )}
          <img src={photo && photo.src} className={classes.img} />

          {!smallBreakpoint && (
            <button
              style={{ marginLeft: "72px" }}
              disabled={rightButtonDisabled}
              className={`${classes.icon} ${classes.buttonRight}`}
              onClick={rightButtonOnClick}
            >
              <Icon
                icon={roundArrowForwardIos}
                style={{
                  fontSize: "24px",
                  color: rightButtonDisabled ? "transparent" : "#000100",
                }}
              />
            </button>
          )}
        </div>
      </Slide>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  close: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "16px",
  },
  img: {
    maxWidth: "800px",
    width: "auto",
    maxHeight: "800px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      maxHeight: "680px",
      maxWidth: "100%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#ffffff",
    paddingTop: "88px",
    paddingBottom: "88px",
    paddingRight: "80px",
    paddingLeft: "80px",
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "4px",
    width: "1060px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: 0,
      borderRadius: 0,
      height: "100%",
      justifyContent: "center",
    },
  },
  buttonLeft: {
    marginRight: "72px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "8px",
    },
  },
  buttonRight: {
    marginLeft: "72px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "8px",
    },
  },
  icon: {
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    padding: "16px",
    border: "1px solid transparent",
    boxSizing: "border-box",
    "&:hover": {
      borderColor: "#000100",
      color: "#000100",
    },
    "&:disabled": {
      borderColor: "transparent",
      cursor: "auto",
    },
  },
}));
