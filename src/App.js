/* eslint-disable import/no-unresolved */
// import React, { useEffect, useState } from "react";
import React from "react";

import "./App.css";
import Spline from "@splinetool/react-spline";
import MyProjectsCards from "./components/MyProjectsCards";
import SplashCursor from "./components/secondComp/SplashCursor";
function App() {
  return (
    <div className="App h-screen w-full relative overflow-hidden">
      <SplashCursor />
      <div className="absolute inset-0 w-full h-full">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/O-EhODGr7YsxUd5V/scene.splinecode"
        />
      </div>
      <div className="relative z-10">
        <MyProjectsCards />
      </div>
    </div>
  );
}

export default App;
