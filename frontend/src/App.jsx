import React from "react";
import HomePage from "./homePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registation from "./registation/Registation";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/register" element={<Registation/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
