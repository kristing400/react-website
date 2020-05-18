import React from "react";
import Navigation from "./Navigation";
import profile from "../assets/me.jpg";

export default function Home() {
  return (
    <>
      <Navigation />
      <div style={containerStyle}>
        <img
          src={profile}
          alt="profile_img"
          style={imgStyle}
          width={400}
          height={400}
        />
        <div style={textContainerStyle}>
          <div>
            <h3 style={subtitleStyle}>Software Engineer @ Airbnb</h3>
            <br />
            <p>Carngie Mellon University 2018</p>
            <p>Bachelors of Computer Science and Arts</p>
            <br />
            <p>
              Ask me about: Airbnb, anime, watercolors, drawing, CMU, BCSA,
              League of Legends, traveling, Shanghai, working in tech,
              badminton, interactive art, generative art, video games, piano
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const subtitleStyle = {
  fontFamily: "Julius Sans One",
  fontSize: "18px",
  fontWeight: "normal",
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

const textContainerStyle = {
  width: "400px ",
  display: "flex",
  alignItems: "center",
  padding: "32px",
};

const imgStyle = {
  borderRadius: "50%",
  padding: "32px",
};
