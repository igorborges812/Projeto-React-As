import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <>
    <header className="header-container">
      <div className="logo">
        <img src="./src/styles/assets/logo.svg" alt="Logo Nike" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Produtos</Link></li>
          <li><a href="/">Black Friday</a></li>
          <li><a href="/">Lançamentos</a></li>
          <li><a href="/">Ofertas</a></li>
          <li><a href="/">Masculino</a></li>
          <li><a href="/">Feminino</a></li>
          <li><a href="/">Infantil</a></li>
          <li><a href="/">SNKRS</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Buscar" />
      </div>
    </header>
  </>
);

export default Header;