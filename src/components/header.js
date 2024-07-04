import React from 'react';
import { Link } from 'react-scroll'; // Import the Link component from react-scroll
import './header.css';
import logo from '../images/logo.png';
import profile from '../images/image1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Header() {

    const openMenu = () => {
        const menu = document.getElementById('sidemenu');
        menu.style.display = 'flex';
        const openbar = document.getElementById('open')
        openbar.style.display = 'none';
        const closebar = document.getElementById('close')
        closebar.style.display = 'block';
      };
    
      const closeMenu = () => {
        const menu = document.getElementById('sidemenu');
        const closebar = document.getElementById('close')
        closebar.style.display = 'none';
        const openbar = document.getElementById('open')
        openbar.style.display = 'block';
        menu.style.display = 'none';
      };
      
  return (
    <div id="header" className="header">
      <div id="container_header" className="container">
        <nav id="header-nav">
          <img src={logo} alt="Logo" className="logo" />
          <ul id="sidemenu">
          <FontAwesomeIcon icon={faTimes}  id = "close" aria-hidden="true" onClick={() => closeMenu()}/>
            <li>
              <Link to="header" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
            
          </ul>
          
          <FontAwesomeIcon icon = {faBars} aria-hidden="true" id = "open" onClick={() => openMenu()}/>
        </nav>
        <div className="header-text">
          <span>
            <p>IT Undergraduate</p>
            <h1>Hi, I am <span>Sandali</span> Liyanage <br /> from Kandy, Sri Lanka</h1>
          </span>
          <span>
            <img src={profile} alt="profile" id="profile" />
          </span>
        </div>
      </div>
    </div>
  );
}
