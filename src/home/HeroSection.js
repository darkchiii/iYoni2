import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className='hero-section'>
        <div className='hero-container' 
        style={{backgroundImage: 'url(./images/HeroSectionBanner.png)'}}
        > 
            <div className='hero-row-container'>
            <div className='hero-row'>
                <div className='hero-column-1'>
                    <h1 className='heroColumnHeading'>Zadbaj o swoją płodność i zwiększ szanse na zajście w ciążę</h1>
                    <h2 className='heroColumnSubHeading'>Aplikacja opracowana przez lekarzy<br/> dla przyszłych mam - dba o zdrowie,<br />przypomina i edukuje.</h2>
                    <div className='store-logo-row'>
                        <div className='store-logo-column'>
                            <a href='#'>
                            <img className='hero-store-img' src='./images/google-play-store.png' alt='img'/>
                            </a>
                        </div>
                    <div className='store-logo-column'>
                        {/* <a href='#'>
                            <img className='hero-store-img' src='./images/google-play-store.png' alt='img' />
                        </a> */}
                    </div>
                </div>
            </div>
            <div className='hero-column-2'>
                <img className='app-img' src='./images/hero-app.png' alt='banner' />
            </div>
        </div>
        </div>
        </div>
        <div className='hero-container-mobile' 
        style={{backgroundImage: 'url(./images/hero-bg-mobile.png)'}}
        > 
        <div className='hero-mobile-text-container'>
            <h1>Zadbaj o swoją <br/>płodność i zwiększ<br/> szanse na zajście<br/> w ciążę</h1>
            <h2>Aplikacja opracowana przez lekarzy<br/> dla przyszłych mam - dba o zdrowie,<br/> przypomina i edukuje.</h2>
        </div>
        <div className='hero-mobile-images-container'>
            <img className='img-mobile-1' src='./images/hero-mobile-1.png' alt='hero-mobile-1'/>
            <img className='img-mobile-2' src='./images/hero-mobile-2.png' alt='hero-mobile-2'/>
            {/* </div> */}
            {/* <div className='store-logo-row-mobile'> */}
                        {/* <div className='store-logo-column-mobile'> */}
                            {/* <a href='#'> */}
                            <img className='hero-store-img-mobile' src='./images/google-play-store.png' alt='img'/>
                            {/* </a> */}
                        {/* </div> */}
                    {/* <div className='store-logo-column-mobile'>
                        <a href='#'>
                            <img className='hero-store-img-mobile' src='./images/google-play-store.png' alt='img' />
                        </a>
                    </div> */}
                {/* </div> */}
                </div>
        </div>
        </section>

    )
}

export default HeroSection
