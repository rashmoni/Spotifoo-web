import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import GenerateCards from "./components/GenerateCards";
import MusicPlayer from "./components/MusicPlayer";
import "./styles/style.css";

export default function App() {

  return (
    <React.Fragment>
    <Navbar/>
    <h2 className="main-header"> Artist </h2>
    <section><GenerateCards/></section>
    <MusicPlayer></MusicPlayer>
    </React.Fragment>
  );
}