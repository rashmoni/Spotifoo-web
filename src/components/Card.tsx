import React from "react";

interface iProps {
  title: string;
  pathToAlbum?: string;
}

export default function Card({ title, pathToAlbum }: iProps) {

  if (pathToAlbum === undefined) {
    pathToAlbum= "/images/picture-no-album.png"
}

  return (

    <article className="card-box">
      <img src={pathToAlbum} className="card-box card-image"/>
      <h3 className="card-box card-title">{title}</h3>
    </article>

  );
}
