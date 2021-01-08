import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Button({ children, onClick, href, ...props }) {
  const classes = useStyles();
  const handleOnClick = (e) => {
    if (href) {
      e.preventDefault();
      window.open(href, "_blank");
    } else {
      onClick(e);
    }
  };

  return (
    <button className={classes.button} {...props} onClick={handleOnClick}>
      {children}
    </button>
  );
}

const useStyles = makeStyles(() => ({
  button: {
    border: "1px solid #000100",
    boxSizing: "border-box",
    borderRadius: "5px",
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "32px",
    paddingRight: "32px",
    color: "#000100",
    fontFamily: "Lato, sans-serif",
    fontSize: "16px",
    transition: ".7s",
    "&:hover": {
      backgroundColor: "#EBEBEB",
    },
  },
}));
