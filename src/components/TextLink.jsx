import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function TextLink({ children, ...props }) {
  const classes = useStyles();

  return (
    <a className={classes.link} {...props} target="_blank">
      {children}
    </a>
  );
}

const useStyles = makeStyles(() => ({
  link: {
    color: "#000100",
    fontFamily: "Lato, sans-serif",
    fontSize: "16px",
    textDecoration: "underline",
    transition: ".5s",
    "&:hover": {
      color: "#6F727B ",
    },
  },
}));
