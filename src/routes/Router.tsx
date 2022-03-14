import React from "react";
import { Route, Routes } from "react-router-dom";
import Chart from "./Chart";
import Home from "./Home";
import Map from "./Map";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
}

export default Router;
