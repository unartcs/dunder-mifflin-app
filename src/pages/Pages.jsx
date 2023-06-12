import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
function Pages() {
  return (
    <div className="pages-wrapper flex flex-col">
      <Navbar />
      <Home/>
    </div>
  );
}

export default Pages;
