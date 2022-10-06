import {useState,useEffect} from 'react'
import Card from "./Card";

function GenerateCards() {
const [music, setMusic] = useState<any[]>([])
const url = 'http://localhost:8080/music/'


useEffect(() => {
  fetch(url)
  .then(res => res.json())
  .then(data => setMusic(data))
},[]);


const AllCards = music.map((item) => (
  <Card
    key={item.id}
    title={item.title}
    artist={item.artist}
    pathToAlbum={item.pathToAlbum}
  />
));

   return (
    <div className="card-article-container">
     {AllCards}
    </div>

  )
}

export default GenerateCards