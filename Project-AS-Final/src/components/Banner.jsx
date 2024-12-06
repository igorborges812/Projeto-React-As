import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 

  return (
    <section 
      className="banner" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    </section>
  );
};

export default Banner;