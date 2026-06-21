import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Assume basic CSS is here for the active class

const Navbar = () => {
  // Helper function to apply the 'active' class dynamically
  const checkActive = ({ isActive }) => (isActive ? 'active-link' : 'nav-link');

  return (
    <nav style={{ background: '#333', padding: '10px', textAlign: 'center' }}>
      <NavLink to="/" className={checkActive} style={{ margin: '0 15px', color: 'white' }}>Home</NavLink>
      <NavLink to="/about" className={checkActive} style={{ margin: '0 15px', color: 'white' }}>About</NavLink>
      <NavLink to="/contact" className={checkActive} style={{ margin: '0 15px', color: 'white' }}>Contact</NavLink>
    </nav>
  );
};

export default Navbar;