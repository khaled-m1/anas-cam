import React from 'react';
import Nav from '../Components/Navbar';
import Header from '../Components/Header';
import About from '../Components/About';
import Footer from '../Components/Footer';
import Clint from '../Components/Clint';
import Gallery from '../Components/Gallery';
const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Clint />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
