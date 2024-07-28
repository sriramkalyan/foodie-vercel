import React from 'react';
import './NavBar.css';
import logo from './Assets/FoodieLogo.png';
function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Foodie Logo" className="logo" />
      <button className="join-waitlist-button">Join the Waitlist</button>
    </nav>
  );
}

export default NavBar;
