import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer2 from '../components/Footer2';
import Team from '../components/Team';
import './App.css';
import PriceCards from './PriceCards';
import Email from '../components/Email';
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
        <Footer2 />
      </>
    )
  }
}

export default App;
