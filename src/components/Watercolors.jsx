import React from "react";
import riceballUrl from "../assets/watercolors/riceball.JPG";
import sashimiUrl from "../assets/watercolors/sashimi.JPG";
import hiddenStairwaysUrl from "../assets/watercolors/hiddenStairways.JPG";
import seoulUrl from "../assets/watercolors/seoul.JPG";
import palaceOfFineArtsUrl from "../assets/watercolors/palaceOfFineArts.JPG";
import Navigation from "./Navigation";
import { WATERCOLORS } from "./Header";

import ImgGallery from "./ImgGallery";

export default function Watercolors() {
  const photos = [
    {
      src: hiddenStairwaysUrl,
      width: 9,
      height: 12,
      id: 0,
    },
    {
      src: riceballUrl,
      width: 6,
      height: 4,
      id: 1,
    },
    {
      src: sashimiUrl,
      width: 6,
      height: 4,
      id: 2,
    },
    {
      src: seoulUrl,
      width: 8,
      height: 9,
      id: 3,
    },
    {
      src: palaceOfFineArtsUrl,
      width: 6,
      height: 4,
      id: 4,
    },
  ];

  return (
    <>
      <Navigation currentTab={WATERCOLORS} />
      <ImgGallery photos={photos} direction="column" />
    </>
  );
}
