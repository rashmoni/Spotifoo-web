
interface iProps {
  artist: string;
  title: string;
  pathToAlbum?: string;
}
export default function Card({ artist,title, pathToAlbum }: iProps) {

  const altImagePath =  "/images/picture-no-album.png"

  if (pathToAlbum === undefined) {
    pathToAlbum= altImagePath
    } 

const clickHandler =() => {
  alert('Playing Song');
} 
  return (
   
    <article className="card-box">
      <button className="card-box card-button" onClick={clickHandler}>
      <img src={pathToAlbum} className="card-box card-image"/>
      <h3 className="card-box card-artist">{artist}</h3>
      <h3 className="card-box card-title">{title}</h3>
      </button>
    </article>

  );
}
