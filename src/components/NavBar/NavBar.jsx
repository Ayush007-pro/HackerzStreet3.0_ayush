import React, { useState } from 'react';
import './NavBar.css';

export default function NavBar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src="/ieee_main_logo.svg" alt="IEEE CS Logo" />
      </div>
      
      <nav>
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#about_us">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className='void_header'></div>
      
      <div className="register-button">
        <a href="#">REGISTER</a>
      </div>
      
      <div className="menu-icon">
        <img src='/menu_icon.svg' onClick={toggleSideNav}/>
      </div>
      
      <div className={`side-nav ${isSideNavOpen ? 'active' : ''}`}>
        <div className="close-btn" onClick={toggleSideNav}>
          <img src='/close_button.svg'/>
        </div>
        <ul>
          <li>
            <div className='side-nav_1'>
              <a href="#" onClick={toggleSideNav}>REGISTER</a>
            </div>
          </li>
          <li>
            <div className='side-nav_2'>
              <div><a className='side_active' href="#home" onClick={toggleSideNav}>Home</a></div>
              <div><a href="#schedule" onClick={toggleSideNav}>Schedule</a></div>
              <div><a href="#tracks" onClick={toggleSideNav}>Tracks</a></div>
              <div><a href="#about_us" onClick={toggleSideNav}>About Us</a></div>
              <div><a href="#contact" onClick={toggleSideNav}>Contact</a></div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}