import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import '../index.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  )
}

export default Home