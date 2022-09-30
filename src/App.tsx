import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import Music from "./data/music.json";
import "./styles/style.css";
import DataFetching from "./DataFetching";

export default function App() {

  const [musics, setMusics] = React.useState(Music);

  // Components
  const Cards = musics.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      text={item.album}
      pathToAlbum={item.pathToAlbum}
    />
  ));

  return (
    <div className="page">
    <Navbar/>
    <section>
    <h2 className="main-header">
        Artist
       
    </h2>
    <div className="card-article-container">
    {Cards}
    </div>
    
    </section>

    <DataFetching/>

    </div>
  );
}