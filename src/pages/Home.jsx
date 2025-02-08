import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <img
              src="TransitFlow Logo.png"
              alt="TransitFlow Logo"
              className="logo"
            />
            <h1>Bus Tickets</h1>
            <h1>Train Tickets</h1>
          </div>
          <div className="navbar-right">
            <a href="#">Help</a>
            <a href="#">English</a>
            <a href="#">Account</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <h2>India's No. 1 Online Ticket Booking Site</h2>

        {/* Search Section */}
        <div className="search-container">
          <div className="search-item">
            <label htmlFor="from">From</label>
            <div className="input-wrapper">
              <span className="icon">🚌</span>
              <input type="text" id="from" placeholder="Enter Source" />
            </div>
          </div>
          <div className="search-item">
            <label htmlFor="to">To</label>
            <div className="input-wrapper">
              <span className="icon">📍</span>
              <input type="text" id="to" placeholder="Enter Destination" />
            </div>
          </div>
          <div className="search-item">
            <label htmlFor="date">Date</label>
            <div className="input-wrapper">
              <span className="icon">📅</span>
              <input type="date" id="date" />
            </div>
          </div>
          <button className="search-button">Search Buses</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Apno ko, Sapno ko Kareeb Laaye.</p>
      </footer>
    </div>
  );
};

export default App;

