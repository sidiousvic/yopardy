import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App.jsx";
import { AudioPlayerProvider } from "react-use-audio-player";

ReactDOM.render(
  <AudioPlayerProvider>
    <App file="./assets/dark_arcade_vic_sidious.m4a" />
  </AudioPlayerProvider>,
  document.getElementById("root")
);
