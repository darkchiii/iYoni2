import React from 'react' ;
import './HeroSection.css' ;

function HeroSection() {
    return (
        <div className='hero-container'>
                <img className='hero-background' src='/images/HeroSectionBanner.png' alt='hero-bg'/>
            <div className='hero-row'>
                <div className='hero-column-1'>
                    <h1>Zadbaj o swoją płodność<br/>i zwiększ szanse na<br/>zajście w ciążę</h1>
                    <h2>Aplikacja opracowana przez lekarzy<br/>dla przyszłych mam - dba o zdrowie,<br/>przypomina i edukuje.</h2>
                    <div className='store-logo-row'>
                        <div className='store-logo-column'>
                            <img className='store-img' src='./images/app-store-logo.png' alt='img'/>
                        </div>
                        <div className='store-logo-column'>
                            <img className='store-img' src='./images/app-store-logo.png' alt='img'/>
                        </div>
                    </div>
                </div>
                <div className='hero-column-2'>
                    <img className='app-img' src='./images/LayerBanner.png' alt='banner'/>
                </div>
            </div>

        </div>

    )
}

export default HeroSection
