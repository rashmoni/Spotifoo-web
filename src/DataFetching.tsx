import React, {useState,useEffect} from 'react'

function DataFetching() {
const [music, setMusic] = useState([])


useEffect(() => {
  fetch('http://localhost:8080/music/')
  .then(res => res.json())
  .then(data => setMusic(data))
},[]);

   (
    <div>
      {music[0]}
    </div>

  )
}

export default DataFetching