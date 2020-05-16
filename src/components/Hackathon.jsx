import React from "react";
import Navigation from "./Navigation";
import { HACKATHONS } from "./Header";

export default function Hackathon() {
  return (
    <>
      <Navigation currentTab={HACKATHONS} />
    </>
  );
}
