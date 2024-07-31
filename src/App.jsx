import React, { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ProjectDetail from "./component/ProjectDetail";
import logo from './assets/horizon-view-logo.png'

export default function App() {
  return <Routes>
    <Route index element={<Home />} />
    <Route path="/projects/:type/:id" element={<ProjectDetail />} />
  </Routes>
}
