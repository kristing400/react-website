import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"; import * as serviceWorker from './serviceWorker';
import './index.css';
import Navigation from './Navigation';
import WatercolorGallery from './components/WatercolorGallery';

const contentStyle = {
  paddingLeft: '256px',
  paddingRight: '256px',
  paddingTop: '56px',
  paddingBottom: '56px',
}

ReactDOM.render(
  <Router>
    <Navigation />
    <div style={contentStyle}>
      <Route path='/' >
        <WatercolorGallery />
      </Route>
    </div>
  </Router>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
