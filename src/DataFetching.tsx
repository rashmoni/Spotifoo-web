import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Card from "./components/Card";

function DataFetching() {
const [music, setMusic] = useState([])


useEffect(() => {
axios.get('http://localhost:8080/music',{
	headers: {
	  'Access-Control-Allow-Origin': '*',
	}
	})
.then(res=> {
    console.log(res)
})
.catch(err => {
    console.log(err)
})
})


  return (
    <div>
    </div>
  )
}

export default DataFetching