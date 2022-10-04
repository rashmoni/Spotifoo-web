import {useState,useEffect} from 'react'
import Card from "./Card";

function GenerateCards() {
const [music, setMusic] = useState<any[]>([])


useEffect(() => {
  fetch('http://localhost:8080/music/')
  .then(res => res.json())
  .then(data => setMusic(data))
},[]);

const AllCards = music.map((item) => (
  <Card
    key={item.id}
    title={item.artist}
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