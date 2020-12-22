import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className='hero-section'>
        <div className='hero-container' style={{backgroundImage: 'url(./images/HeroSectionBanner.png)'}}> 
            <img className='hero-background' src='' alt='hero-bg' />
            <div className='hero-row'>
                <div className='hero-column-1'>
                    <h1 className='heroColumnHeading'>Zadbaj o swoją płodność<br />i zwiększ szanse na<br />zajście w ciążę</h1>
                    <h2 className='heroColumnSubHeading'>Aplikacja opracowana przez lekarzy<br />dla przyszłych mam - dba o zdrowie,<br />przypomina i edukuje.</h2>
                    <div className='store-logo-row'>
                        <div className='store-logo-column'>
                            <a href='#'>
                            <img className='hero-store-img' src='./images/app-store-logo.png' alt='img'/>
                            </a>
                        </div>
                    <div className='store-logo-column'>
                        <a href='#'>
                            <img className='hero-store-img' src='./images/app-store-logo.png' alt='img' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='hero-column-2'>
                <img className='app-img' src='./images/LayerBanner.png' alt='banner' />
            </div>
        </div>

        </div >
        </section>

    )
}

export default HeroSection
