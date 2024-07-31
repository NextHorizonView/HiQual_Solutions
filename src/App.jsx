import React, { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ProjectDetail from "./component/ProjectDetail";
import logo from './assets/horizon-view-logo.png'

export default function App() {
  // return <Routes>
  //   <Route index element={<Home />} />
  //   <Route path="/projects/:type/:id" element={<ProjectDetail />} />
  // </Routes>
  return <div className="w-screen h-screen bg-[#222222] p-8  flex flex-col justify-center items-center">
    <img src={logo} />
    <p className="text-lg text-center text-white">Need help? Contact us at <span className="text-[#495cf3]">nexthorizonview@gmail.com</span></p>
  </div>
}
