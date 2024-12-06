import React from 'react';
import Banner from '../components/Banner';  
import PicksSection from '../components/PicksSection';  
import Footer from "../components/Footer";
import Categories from '../components/Categories';

const Home = () => (
  <main>
   
    <Banner />  
    <PicksSection />  
    <Categories/>
    <Footer />
    
  </main>
);

export default Home;