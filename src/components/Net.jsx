import React from "react";
import Navigation from "./Navigation";
import { HACKATHONS } from "./Header";

export default function CodeArt() {
  return (
    <>
      <Navigation currentTab={HACKATHONS} showBackArrow />
    </>
  );
}
