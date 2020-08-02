import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './style/index.css';
import './style/button.css';
import * as serviceWorker from './serviceWorker';
import Timeline from "./components/Timeline";

ReactDOM.render(
  <React.StrictMode>
    <Timeline/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
