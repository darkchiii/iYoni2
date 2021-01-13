import React from 'react' ;
import './BioAppSection.css' ;

function BioAppSection() {
    return (
        <section className='bio-store-section'>
            <div className='bio-app-rectangle'>
                <div className='bio-app-container'>
                    <img className='bio-app-logo' src='./images/logo-footer.png' alt='logo'/>
                    <h3>Technologia i medycyna <br/>
w służbie Twoich marzeń.</h3>
                    <div className='bio-store-img-row'>
                            <div className='bio-store-img-col'>
                                <img className='bio-store-img' src='./images/app-store-logo.png' alt='store-img'/>
                            </div>
                            <div className='bio-store-img col'>
                                <img className='bio-store-img' src='./images/app-store-logo.png' alt='store-img'/>
                            </div>
                        </div>
                <img className='rec-img' src='./images/bio-rec.png' alt='bio-img'/>
                </div>

            </div>
        </section>
    )
}

export default BioAppSection ;