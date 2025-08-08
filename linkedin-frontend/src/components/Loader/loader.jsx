import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loading-screen">
      <div className="loading-animation">
        <div className="logo-container">
          <span className="linkedin-text">Linked</span>
          <img src="/src/assets/linkedin.png" alt="LinkedIn Logo" className="logo" />
        </div>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
};

export default Loader;