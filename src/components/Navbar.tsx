import React from "react";
import Logo from "../assets/logo-spotifoo.png";
import "../styles/style.css";
import navHomeIcon from "../assets/icons/home.svg"
import searchIcon from "../assets/icons/search.svg"


const Navbar = () => {
    return (
        <div>
        <nav className="nav-bar">
        <img className="nav-logo" src={Logo} />
        <img className="nav-icon" src={navHomeIcon} />
        <button className="nav-button">Home</button>
        <img className="search-icon" src={searchIcon} />
        <button className="search-button">Search</button>
        </nav>
        </div>
    );
  }

  export default Navbar;