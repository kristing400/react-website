import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import Watercolors from "./components/Watercolors";
import Programming from "./components/Programming";
import CodeArt from "./components/CodeArt";
import ShanghaiSubway from "./components/ShanghaiSubway";
import Home from "./components/Home";
import Net from "./components/Net";
import { Container } from "@material-ui/core";
import Equerry from "./components/Equerry";
import Cozmo from "./components/Cozmo";
import GeoCamera from "./components/GeoCamera";
import PressureClassifier from "./components/PressureClassifier";
import Masked from "./components/Masked";
import Wickihow from "./components/Wickihow";
import Aero from "./components/aero";
import Escape from "./components/Escape";
import Rubegoldberg from "./components/Rubegoldberg";
import Tailord from "./components/Tailord";

export const PROGRAMMING_PATH = "/programming";
export const CODE_ART_PATH = "/code-art";
export const SHANGHAI_SUBWAY_PATH = "/shanghai-subway";
export const WATERCOLORS_PATH = "/watercolors";
export const EQUERRY_PATH = "/programmming/equerry";
export const NET_PATH = "/programmming/net";
export const TAILORD_PATH = "/programmming/tailord";
export const COZMO_PATH = "/programming/cozmo";
export const GEOCAMERA_PATH = "/programming/geo-camera";
export const PRESSURE_CLASSIFIER_PATH = "/programming/pressure-classifier";
export const MASKED_PATH = "/programming/masked";
export const WICKIHOW_PATH = "/programming/wickihow";
export const AERO_PATH = "/programming/aero";
export const ESCAPE_PATH = "/programming/escape";
export const RUBEGOLDBERG_PATH = "/programming/rubegoldberg";
export const HOME_PATH = "/";

export const projectPaths = [EQUERRY_PATH, NET_PATH, HOME_PATH];

ReactDOM.render(
  <Router>
    <HashRouter basename="/">
      <Container maxWidth="lg">
        <div style={{ overflowX: "hidden" }}>
          <Route exact path={PROGRAMMING_PATH}>
            <Programming />
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
          <Route exact path={EQUERRY_PATH}>
            <Equerry />
          </Route>
          <Route exact path={COZMO_PATH}>
            <Cozmo />
          </Route>
          <Route exact path={GEOCAMERA_PATH}>
            <GeoCamera />
          </Route>
          <Route exact path={PRESSURE_CLASSIFIER_PATH}>
            <PressureClassifier />
          </Route>
          <Route exact path={MASKED_PATH}>
            <Masked />
          </Route>
          <Route exact path={WICKIHOW_PATH}>
            <Wickihow />
          </Route>
          <Route exact path={AERO_PATH}>
            <Aero />
          </Route>
          <Route exact path={ESCAPE_PATH}>
            <Escape />
          </Route>
          <Route exact path={RUBEGOLDBERG_PATH}>
            <Rubegoldberg />
          </Route>
          <Route exact path={TAILORD_PATH}>
            <Tailord />
          </Route>
          <Route exact path={HOME_PATH}>
            <Home />
          </Route>
        </div>
      </Container>
    </HashRouter>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
