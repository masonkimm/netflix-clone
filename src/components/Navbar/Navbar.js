import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <img
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <br />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="User Avatar"
        className="nav__avatar"
      />
    </div>
  );
}

export default Navbar;
