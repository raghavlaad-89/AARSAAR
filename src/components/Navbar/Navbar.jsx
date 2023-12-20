import React from 'react';
import "./Navbar.css"
import { RIDE, user, navNum, download } from "../../assets";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <img src={RIDE} alt="Ride Icon" />
        </li>
        <li className="nav-item">
          <img src={navNum} alt="Nav Number Icon" />
        </li>
        <li className="nav-item">
          <img src={download} alt="Download Icon" />
        </li>
        <li className="nav-item right">
          <img src={user} alt="User Icon" />
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;