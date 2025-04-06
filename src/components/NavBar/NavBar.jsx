import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <header>
      <div class="logo-container">
        <img src="/ieee_main_logo.svg" alt="IEEE CS Logo"/>
      </div>
      <nav>
        <ul>
          <li><a href="#home" class="active">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#tracks">Tracks</a></li>
          <li><a href="#about_us">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div class="register-button">
        <a href="#">REGISTER</a>
      </div>
    </header>
  )
}
