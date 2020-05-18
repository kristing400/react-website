import React, { useCallback } from "react";
import Navigation from "./Navigation";
import { HACKATHONS } from "./Header";
import Gallery from "react-photo-gallery";
import net from "../assets/hackathons/net/cover.png";
import equerry from "../assets/hackathons/equerry/equerry.png";
import tailord from "../assets/hackathons/tailord/tailord.jpg";
import { withRouter } from "react-router";
import LinkImg from "./LinkImg";

function Hackathons({ history }) {
  const photos = [
    {
      src: net,
      width: 8,
      height: 5,
      alt: "net",
      title: "Facebook Global Hackathon Finals 2018",
      description: "Top 6 hack",
    },

    {
      src: tailord,
      width: 9,
      height: 16,
      alt: "tailor'd",
      title: "HACKCMU 2016",
      description: "Best Mobile App Award",
    },
    {
      src: equerry,
      width: 16,
      height: 11,
      alt: "equerry",
      title: "CMU Tartanhacks 2018",
      description: "Best Social Impact Award",
    },
  ];

  const onClick = useCallback(
    (e) => {
      const name = e.target.alt;
      if (name === "net") {
        history.push("./hackathons/net");
      } else if (name === "tailor'd") {
        history.push("./hackathons/tailord");
      } else if (name === "equerry") {
        history.push("./hackathons/equerry");
      }
    },
    [history]
  );

  const renderImage = useCallback(
    ({ photo, margin, direction, top, left }) => (
      <LinkImg
        photo={photo}
        onClick={onClick}
        margin={margin}
        direction={direction}
        top={top}
        left={left}
        title={photo.title}
        description={photo.description}
      />
    ),
    []
  );

  return (
    <>
      <Navigation currentTab={HACKATHONS} />
      <div style={containerStyle}>
        <Gallery
          columns={2}
          margin={16}
          direction="column"
          photos={photos}
          renderImage={renderImage}
        />
      </div>
    </>
  );
}

const containerStyle = {
  paddingLeft: "200px",
  paddingRight: "200px",
};

export default withRouter(Hackathons);
