import React, { useCallback } from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import Gallery from "react-photo-gallery";
import net from "../assets/programming/net/cover.png";
import equerry from "../assets/programming/equerry/equerry.png";
import tailord from "../assets/programming/tailord/tailord.jpg";
import cozmo from "../assets/programming/cozmo/cover.jpg";
import pressureClassifier from "../assets/programming/pressureClassifier/pressureClassifier.jpg";
import masked from "../assets/programming/masked/masked.png";
import wickihow from "../assets/programming/wickihow/wickihow.jpg";
import aero from "../assets/programming/aero/aero.jpg";
import escapeRoom from "../assets/programming/escapeRoom/escapeRoom.png";
import geoCamera from "../assets/programming/geoCamera/geoCamera.jpg";
import rubeGoldberg from "../assets/programming/rubeGoldberg/rubegoldberg.png";

import { withRouter } from "react-router";
import LinkImg from "./LinkImg";
import {
  NET_PATH,
  TAILORD_PATH,
  EQUERRY_PATH,
  COZMO_PATH,
  GEOCAMERA_PATH,
  PRESSURE_CLASSIFIER_PATH,
  MASKED_PATH,
} from "..";

function Programming({ history }) {
  const photos = [
    {
      src: net,
      width: 8,
      height: 5,
      alt: "net",
      title: "NET",
      subtitle: "Facebook Global Hackathon Finals 2018",
      description: "Top 6 Finalist",
      href: NET_PATH,
    },
    {
      src: equerry,
      width: 16,
      height: 11,
      alt: "equerry",
      title: "EQUERRY",
      subtitle: "CMU Tartanhacks 2018",
      description: "Best Social Impact Award",
      href: EQUERRY_PATH,
    },
    {
      src: cozmo,
      width: 16,
      height: 10,
      alt: "autopilot cozmo",
      title: "autopilot cozmo",
      subtitle: "Cognitive Robotics",
      description: "Spring 2018",
      href: COZMO_PATH,
    },
    {
      src: masked,
      width: 18,
      height: 10,
      alt: "masked",
      title: "masked",
      subtitle: "BXA Capstone Project",
      description: "Fall 2018",
      href: MASKED_PATH,
    },
    {
      src: pressureClassifier,
      width: 16,
      height: 10,
      alt: "pressure classifier",
      title: "pressure classifier",
      subtitle: "Experimental Capture",
      description: "Spring 2017",
      href: PRESSURE_CLASSIFIER_PATH,
    },
    {
      src: geoCamera,
      width: 16,
      height: 16,
      alt: "geo camera",
      title: "geo camera",
      subtitle: "Experimental Capure",
      description: "Spring 2017",
      href: GEOCAMERA_PATH,
    },
    {
      src: aero,
      width: 16,
      height: 10,
      alt: "aero 01",
      title: "aero 01",
      subtitle: "Art & Arduino",
      description: "Spring 2018",
      href: EQUERRY_PATH,
    },
    {
      src: wickihow,
      width: 16,
      height: 10,
      alt: "wickihow",
      title: "wickihow",
      subtitle: "Modding & Remixing",
      description: "Fall 2017",
      href: EQUERRY_PATH,
    },
    {
      src: rubeGoldberg,
      width: 16,
      height: 10,
      alt: "virtual rube-goldberg machine",
      title: "Virtual rube-goldberg machine",
      subtitle: "Experimental Game Design",
      description: "Fall 2016",
      href: EQUERRY_PATH,
    },
    {
      src: escapeRoom,
      width: 16,
      height: 10,
      alt: "escape the room: parallel universes",
      title: "escape the room: parallel universes",
      subtitle: "Experimental Game Design",
      description: "Fall 2016",
      href: EQUERRY_PATH,
    },

    {
      src: tailord,
      width: 14,
      height: 11,
      alt: "tailor'd",
      title: "tailor'd",
      subtitle: "HACKCMU 2016",
      description: "Best Mobile App Award",
      href: TAILORD_PATH,
    },
  ];

  const onClick = useCallback(
    (href) => {
      history.push(href);
    },
    [history]
  );

  const renderImage = useCallback(
    ({ photo, margin, direction, top, left }) => (
      <LinkImg
        photo={photo}
        onClick={() => onClick(photo.href)}
        margin={margin}
        direction={direction}
        top={top}
        left={left}
        title={photo.title}
        subtitle={photo.subtitle}
        description={photo.description}
      />
    ),
    [onClick]
  );

  return (
    <>
      <Navigation currentTab={PROGRAMMING} />
      <Gallery
        margin={16}
        direction="column"
        photos={photos}
        renderImage={renderImage}
      />
    </>
  );
}
export default withRouter(Programming);
