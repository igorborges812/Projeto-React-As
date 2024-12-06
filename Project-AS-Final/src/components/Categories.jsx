import React from "react";
import "../styles/Categories.css";

const Categories = () => {
  return (
    <header className="categories">
      <div className="categories-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike Logo"
          className="logo"
        />
      </div>
      <nav className="categories-nav">
        <ul>
          <li>Find a Store</li>
          <li>Help</li>
          <li>Join Us</li>
          <li>Sign In</li>
        </ul>
      </nav>
      <div className="categories-list">
        <div className="category">
          <h4>Featured</h4>
          <ul>
            <li>Air Force 1</li>
            <li>Jordan 1</li>
            <li>Metcon</li>
            <li>Air Max 270</li>
          </ul>
        </div>
        <div className="category">
          <h4>Shoes</h4>
          <ul>
            <li>All Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
            <li>Basketball Shoes</li>
          </ul>
        </div>
        <div className="category">
          <h4>Clothing</h4>
          <ul>
            <li>All Clothing</li>
            <li>Tops & T-Shirts</li>
            <li>Shorts</li>
            <li>Hoodies & Pullovers</li>
          </ul>
        </div>
        <div className="category">
          <h4>Kids</h4>
          <ul>
            <li>Infant & Toddler Shoes</li>
            <li>Kids Shoes</li>
            <li>Kids Basketball Shoes</li>
            <li>Kids Running Shoes</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Categories;