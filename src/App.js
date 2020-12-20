import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/home/HeroSection.js';
import MomSection from './components/home/MomSection.js' ;
import BenefitsSection from './components/home/BenefitsSection' ;
import FunctionsSection from './components/home/FunctionsSection.js';
import ExpertsSection from './components/home/ExpertsSection.js';
import AppStoreSection from './components/home/AppStoreSection.js' ;
import ValuesSection from './components/home/ValuesSection.js';
import BaseSection from './components/home/BaseSection.js';
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
          <Route path='/' exact />
        </Switch>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
