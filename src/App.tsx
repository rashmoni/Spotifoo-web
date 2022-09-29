import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card";
import Countries from "./data/countries.json";

export default function App() {


  // Local state
  const [greetings, setGreetings] = React.useState(Countries);
  const [counter, setCounter] = React.useState(0);

  // Components
  const Cards = greetings.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      text={item.text}
      imageURL={item.imageURL}
    />
  ));

  return (
    <div>
      <div className="main-body">
        <Navbar/>
      </div>
      <h2 className="main-header">
        Artist
      </h2>
      <div className="card">
        {Cards}
        </div>
    </div>
  );
}