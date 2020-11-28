import React from "react";
import Navigation from "./Navigation";
import { PROGRAMMING } from "./Header";
import ProjectTitle from "./ProjectTitle";

export default function Net() {
  return (
    <>
      <Navigation currentTab={PROGRAMMING} showBackArrow />
      <ProjectTitle
        title="NET"
        subtitle="Facebook Global Hackathon Finals 2018 - Top 6 finalists"
      />
      <div style={rowStyle}>
        <div style={{ width: "616px", height: "347px" }}>
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fhackathon%2Fvideos%2F2306855209387580%2F&show_text=0&width=560&start=1000"
            style={{ border: "none", overflow: "hidden" }}
            width="100%"
            height="100%"
            scrolling={false}
            allowTransparency={true}
            allowFullScreen={true}
          ></iframe>
          <p style={{ paddingTop: "16px" }}>See our demo around 29:30!</p>
        </div>
        <div style={{ width: "400px", padding: "32px" }}>
          <p>
            Have you ever forgotten someone’s name right after you met them? And
            then it would’ve been too awkward afterwards to actually ask them?
            The past couple days, we got to meet so many cool hackers from
            different parts of the world. But to be honest, it was really hard
            to remember all of their names and what we actually talked about
            with each of them. We decided to build an app, called Net, which
            notes down who you met at an event, and builds out a profile for
            each person based on your conversation with them.
          </p>
        </div>
      </div>
    </>
  );
}

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
};
