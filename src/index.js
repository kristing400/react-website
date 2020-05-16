import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import Watercolors from "./components/Watercolors";
import Hackathon from "./components/Hackathon";
import CodeArt from "./components/CodeArt";
import MixedMedia from "./components/MixedMedia";

const contentStyle = {
  paddingLeft: "256px",
  paddingRight: "256px",
  paddingBottom: "56px",
};

export const HACKATHONS_PATH = "/hackathons";
export const CODE_ART_PATH = "/code-art";
export const MIXED_MEDIA_PATH = "/mixed-media";
export const WATERCOLORS_PATH = "/watercolors";
export const HOME_PATH = "/";

ReactDOM.render(
  <Router>
    <HashRouter basename="/">
      <div style={contentStyle}>
        <Route exact path={HACKATHONS_PATH}>
          <Hackathon />
        </Route>
        <Route exact path={CODE_ART_PATH}>
          <CodeArt />
        </Route>
        <Route exact path={MIXED_MEDIA_PATH}>
          <MixedMedia />
        </Route>
        <Route exact path={WATERCOLORS_PATH}>
          <Watercolors />
        </Route>
        <Route exact path={HOME_PATH}>
          <Watercolors />
        </Route>
      </div>
    </HashRouter>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
