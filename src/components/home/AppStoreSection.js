import React from 'react' ;
import './AppStoreSection.css' ;

function AppStoreSection() {
    return (
        <section className='app-store-section'>
            <div className='rectangle'>
                <div className='app-store-row'>
                    <div className='app-column-1'>
                        <h3>Zadbaj o swoją <br/>płodność z iyoni</h3>
                        <div className='store-img-row'>
                            <div className='store-img-col'>
                                <img className='store-img' src='./images/app-store-logo.png' alt='store-img'/>
                            </div>
                            <div className='store-img col'>
                                <img className='store-img' src='./images/app-store-logo.png' alt='store-img'/>
                            </div>
                        </div>
                    </div>
                    <div className='app-column-2'>
                    <img className='phone-img' src='./images/phone-mockup.png' alt='phone-img'/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AppStoreSection
