import React from 'react';
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <footer className="contact-footer" id='contact'>
      <div className="contact-footer-left">
        <h1 className="sub-title">Contact Me</h1>
        <p><FontAwesomeIcon icon={faPaperPlane} /> sithumanisandali@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhoneSquare} /> +94 703757159</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/sithumanisandali?igsh=MTlud3kxaGw0dnBsZw==">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/sandali-sithumani-600788201/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/sithusss">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="contact-footer-right">
        <form action="">
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn2">Submit</button>
        </form>
      </div>
    </footer>
  );
}
