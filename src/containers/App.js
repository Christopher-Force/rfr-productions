import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Team from '../components/Team';
import './App.css';
import PriceCards from './PriceCards';
// import Subscribe from '../components/LearnMore';
import LearnMore from '../components/LearnMore';
import Hero2 from '../components/Hero2';

class App extends Component {

  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Hero2 />
        <PriceCards />
        <Team />
        <LearnMore />
        <Footer />
      </>
    )
  }
}

export default App;
