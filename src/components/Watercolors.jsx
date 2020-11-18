import React from "react";
import Gallery from "react-photo-gallery";
import { makeStyles } from "@material-ui/core/styles";
import riceballUrl from "../assets/watercolors/riceball.JPG";
import sashimiUrl from "../assets/watercolors/sashimi.JPG";
import hiddenStairwaysUrl from "../assets/watercolors/hiddenStairways.JPG";
import seoulUrl from "../assets/watercolors/seoul.JPG";
import palaceOfFineArtsUrl from "../assets/watercolors/palaceOfFineArts.JPG";
import Navigation from "./Navigation";
import { WATERCOLORS } from "./Header";

export default function Watercolors() {
  const classes = useStyles();

  const photos = [
    {
      src: hiddenStairwaysUrl,
      width: 9,
      height: 12,
    },
    {
      src: riceballUrl,
      width: 6,
      height: 4,
    },
    {
      src: sashimiUrl,
      width: 6,
      height: 4,
    },
    {
      src: seoulUrl,
      width: 8,
      height: 9,
    },
    {
      src: palaceOfFineArtsUrl,
      width: 6,
      height: 4,
    },
  ];
  return (
    <>
      <Navigation currentTab={WATERCOLORS} />
      <div className={classes.container}>
        <Gallery margin={8} direction="column" photos={photos} />
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: "32px",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "16px",
      paddingBottom: "16px",
    },
  },
}));
