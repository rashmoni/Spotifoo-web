import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import Music from "./data/music.json";
import "./styles/style.css";
import DataFetching from "./DataFetching";

export default function App() {

  const [musics, setMusics] = React.useState(Music);

  const [music, setMusic] = useState([])


useEffect(() => {
  fetch('http://localhost:8080/music/')
  .then(res => res.json())
  .then(data => setMusic(data))
},[]);

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
    <pre>{JSON.stringify(music,null,2)}</pre>
    </div>
  );
}