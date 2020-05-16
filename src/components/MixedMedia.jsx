import React from "react";
import Gallery from "react-photo-gallery";
import Navigation from "./Navigation";
import { MIXED_MEDIA } from "./Header";
import subway1 from "../assets/mixedMedia/subway_1.jpg";
import subway2 from "../assets/mixedMedia/subway_2.jpg";
import subway3 from "../assets/mixedMedia/subway_3.jpg";
import subway4 from "../assets/mixedMedia/subway_4.jpg";
import subway5 from "../assets/mixedMedia/subway_5.jpg";
import subway6 from "../assets/mixedMedia/subway_6.jpg";
import subway7 from "../assets/mixedMedia/subway_7.jpg";
import subway8 from "../assets/mixedMedia/subway_8.jpg";
import subway9 from "../assets/mixedMedia/subway_9.jpg";
import subway10 from "../assets/mixedMedia/subway_10.jpg";
import subway11 from "../assets/mixedMedia/subway_11.jpg";

export default function MixedMedia() {
  const photos = [
    {
      src: subway1,
      width: 11,
      height: 16,
    },
    {
      src: subway2,
      width: 5,
      height: 16,
    },
    {
      src: subway3,
      width: 8,
      height: 4,
    },
    {
      src: subway4,
      width: 4,
      height: 8,
    },
    {
      src: subway5,
      width: 16,
      height: 11,
    },
    {
      src: subway6,
      width: 16,
      height: 11,
    },
    {
      src: subway11,
      width: 16,
      height: 11,
    },
    {
      src: subway8,
      width: 16,
      height: 11,
    },
    {
      src: subway9,
      width: 8,
      height: 6,
    },
    {
      src: subway7,
      width: 8,
      height: 3,
    },
    {
      src: subway10,
      width: 16,
      height: 11,
    },
  ];
  return (
    <>
      <Navigation currentTab={MIXED_MEDIA} />
      <div style={subtitleStyle}>
        <p style={{ width: "800px" }}>
          A concentration on the Shanghai Subway system. Nostalgic, complex,
          convenient, yet dreadful, these are the words that come to mine when I
          think of the Shanghai subway system. I completed this series back in
          2014, junior year of highschool, for my AP Art Studio portfolio. It's
          been over six years, and some of my favorite pieces still remain here.
        </p>
      </div>
      <Gallery margin={16} direction="row" photos={photos} />
    </>
  );
}

const subtitleStyle = {
  textAlign: "center",
  display: "flex",
  color: "#6F727B",
  justifyContent: "center",
  paddingBottom: "32px",
};
