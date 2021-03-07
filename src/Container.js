import React from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import MiddleSection from "./components/MiddleSection";
import "./App.css";

function Container() {
  return (
    <div className="main-container">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  );
}

export default Container;
