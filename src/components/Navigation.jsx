import React from "react";
import SocialNavBar from "./SocialNavBar";
import Header from "./Header";

export default function Navigation({ currentTab }) {
  return (
    <div>
      <SocialNavBar />
      <Header currentTab={currentTab} />
    </div>
  );
}
