import React, { useState } from 'react';
import NavBar from './NavBar';
import './App.css';
import phoneImage from './Assets/iphone13-Layout.png';
import showreel from './Assets/videoplayback.mp4';
import logo from './Assets/FoodieLogo.png';

function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleJoinWaitlistClick = (e) => {
    e.preventDefault(); // Prevents the form from submitting and reloading the page
    setShowWaitlist(true);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="welcome-section">
        <div className="overlay"></div>
        <img src={require('../src/Assets/Map-UI.png.webp')} className="overlay-1" alt="Map UI" />
        <div className="container">
          <div className="phone-frame">
            <img src={phoneImage} alt="iPhone 13 Layout" />
            <video autoPlay loop muted>
              <source src={showreel} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="group">
            <img src={logo} alt="Foodie Logo" />
            <div className="welcome-text">
              <h1>Welcome to Foodie</h1>
              <p>
                At Foodie, we redefine convenience with our seamless
                food delivery service. Whether you're craving the
                flavors of home or exploring new culinary delights,
                Foodie brings it all to your doorstep. From hearty
                breakfasts to gourmet dinners and everything in
                between, our curated menu caters to every palate and
                preference.
              </p>
            </div>
            <button
              className="join-waitlist-button join-waitlist-button-white"
              onClick={handleJoinWaitlistClick}
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
      {showWaitlist && (
        <section className="waitlist-section">
          <div className="container">
            <h1>Join the Waitlist</h1>
            <p>Thank you!</p>
          </div>
        </section>
      )}
      {!showWaitlist && (
        <section className="waitlist-section">
          <h2>Join the Waitlist</h2>
          <form onSubmit={handleJoinWaitlistClick}>
            <div className="form_detail">
              <input type="text" name="name" placeholder="Name" required />
              <input type="tel" name="phone" placeholder="Phone Number" required />
              <input type="text" name="city" placeholder="City" required />
            </div>
            <button type="submit" className="join-waitlist-button join-waitlist-button-orange">Join the Waitlist</button>
          </form>
        </section>
      )}
      <footer>@Foodie, 2024</footer>
    </div>
  );
}

export default App;
