import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import Watercolors from "./components/Watercolors";
import Hackathons from "./components/Hackathons";
import CodeArt from "./components/CodeArt";
import ShanghaiSubway from "./components/ShanghaiSubway";
import Home from "./components/Home";
import Net from "./components/Net";

const contentStyle = {
  paddingLeft: "256px",
  paddingRight: "256px",
  paddingBottom: "56px",
};

export const HACKATHONS_PATH = "/hackathons";
export const CODE_ART_PATH = "/code-art";
export const SHANGHAI_SUBWAY_PATH = "/shanghai-subway";
export const WATERCOLORS_PATH = "/watercolors";
export const EQUERRY_PATH = "/hackathons/equerry";
export const NET_PATH = "/hackathons/net";
export const TAILORD_PATH = "/hackathons/tailord";
export const HOME_PATH = "/";

export const projectPaths = [EQUERRY_PATH, NET_PATH, HOME_PATH];

ReactDOM.render(
  <Router>
    <HashRouter basename="/">
      <div style={contentStyle}>
        <Route exact path={HACKATHONS_PATH}>
          <Hackathons />
        </Route>
        <Route exact path={CODE_ART_PATH}>
          <CodeArt />
        </Route>
        <Route exact path={SHANGHAI_SUBWAY_PATH}>
          <ShanghaiSubway />
        </Route>
        <Route exact path={WATERCOLORS_PATH}>
          <Watercolors />
        </Route>
        <Route exact path={NET_PATH}>
          <Net />
        </Route>
        <Route exact path={HOME_PATH}>
          <Home />
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
