import React from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';


function Services() {
  return (
    <>
      <Navbar />
      <h1 className='services'>Services</h1>
      <Cards />
      <Footer />
    </>
  )
}

export default Services