import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">
          <h4>Home</h4>
          </Link>
          <Link to="/about">
          <h4>About</h4>
          </Link>
          <Link to="/contact">
          <h4>Contact</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
