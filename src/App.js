/* eslint-disable import/no-unresolved */
// import React, { useEffect, useState } from "react";
import React from "react";

import "./App.css";
import Spline from "@splinetool/react-spline";
import MyProjectsCards from "./components/MyProjectsCards";
import SplashCursor from "./components/secondComp/SplashCursor";
function App() {
  return (
    <div className="App">
      <SplashCursor />
      <Spline
        className="absolute -z-10  "
        scene="https://prod.spline.design/O-EhODGr7YsxUd5V/scene.splinecode"
      />

      <div>
        <MyProjectsCards />
      </div>
    </div>
  );
}

export default App;
