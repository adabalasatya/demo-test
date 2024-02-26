import React from 'react';
import './header.css';

const Header = () => {
  return (
     <nav className='nav-items'>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/about">Certifications</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <section className='item-2'>
        <h1>Welcome to the Plant Zone</h1>
        <button className='item-b'>Contact</button>
      </section>
  </nav>                  

  );
};

export default Header;
