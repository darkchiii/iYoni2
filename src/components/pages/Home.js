import React from 'react' ;
import '../../App.css' ;
import MomSection from '../../home/MomSection.js' ;
import BenefitsSection from '../../home/BenefitsSection' ;
import FunctionsSection from '../../home/FunctionsSection.js';
import ExpertsSection from '../../home/ExpertsSection.js';
import ValuesSection from '../../home/ValuesSection.js';
import BaseSection from '../../home/BaseSection.js';
import AppStoreSection from '../../home/AppStoreSection.js';
import HeroSection from '../../home/HeroSection.js'

function Home() {
    return (
        <>
        <HeroSection/>
        <MomSection/>
        <BenefitsSection/>
        <BaseSection/>
        <FunctionsSection/>
        <ValuesSection/>
        <ExpertsSection/>
        <AppStoreSection/> 
        </>
    )
}

export default Home ;
