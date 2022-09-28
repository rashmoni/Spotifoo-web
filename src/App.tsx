// Node modules
import { useState } from "react";

// Project files
import Card from "./components/Card";
import Countries from "./data/countries.json";
import Logo from "./assets/logo-spotifoo.png";
import LoginForm from "./components/LoginForm";
import "./styles/style.css";

export default function App() {




  return (
    <div>
    <nav className="nav-bar">
    <img className="logo" src={Logo} />
    </nav>
    <p>Hello World</p>
    <p>This is Rashmoni</p>
    </div>
  );
}