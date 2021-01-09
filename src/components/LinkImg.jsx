import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";

export default function LinkImg({
  photo,
  onClick,
  direction,
  margin,
  left,
  top,
  title,
  description,
  subtitle,
  onLoad,
}) {
  const classes = useStyles();

  let cont = {
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
  };

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const [loaded, setLoaded] = useState(false);

  return (
    <Fade in={loaded} timeout={2000}>
      <div
        className={classes.container}
        style={{ margin, height: photo.height, width: photo.width, ...cont }}
      >
        <div className="overlay">
          <div className={classes.overlayText}>
            <h4 className={classes.titleStyle}>{title}</h4>
            <h5 className={classes.subtitle}>{subtitle}</h5>
            <p className={classes.descriptionStyle}>{description}</p>
          </div>
          <img
            {...photo}
            alt={photo.alt}
            onClick={onClick}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </Fade>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    background:
      "linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%), #94c5cc;",
  },
  titleStyle: {
    fontFamily: "Julius Sans One",
    fontSize: "20px",
    margin: 0,
    fontWeight: 600,
    lineHeight: 1.4,
    paddingLeft: "16px",
    paddingRight: "16px",
  },
  descriptionStyle: {
    fontSize: "18px",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: 400,
    marginBottom: "4px",
  },
  overlayText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    visibility: "visible",
    zIndex: 100,
    color: "#000100",
    fontSize: "16px",
    fontWeight: 800,
    height: "100%",
  },
}));
