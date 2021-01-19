import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import OIyoni from './components/pages/OIyoni';

import HeroSection from './home/HeroSection.js';
import MomSection from './home/MomSection.js' ;
import BenefitsSection from './home/BenefitsSection' ;
import FunctionsSection from './home/FunctionsSection.js';
import ExpertsSection from './home/ExpertsSection.js';
import AppStoreSection from './home/AppStoreSection.js' ;
import ValuesSection from './home/ValuesSection.js';
import BaseSection from './home/BaseSection.js';
import BaseSectionB from './home/BaseSectionB.js';
import AboutSecton from './home/AboutSection.js' ;
import BioSection from './home/BioSection.js';
import BioAppSection from './home/BioAppSection.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection/>
        <MomSection/>
        <BenefitsSection/>
        <BaseSection/>
        <FunctionsSection/>
        <ValuesSection/>
        <ExpertsSection/>
        <AppStoreSection/> 
        <Switch>
        {/* <Route path='/' exactgit component={Home} />
        <Route path='/o-iyoni' component={OIyoni} /> */}
        </Switch>
        <AboutSecton/>
        <BioSection/>
        <BioAppSection/>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
