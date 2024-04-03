import React from 'react';
import './Header.css';
import image from './logo-sistema-solar.png';

function Header() {
  return (
    <header>
      <h1>Sistema Solar</h1>
      <img src={ image } alt="" />
    </header>
  );
}

export default Header;
