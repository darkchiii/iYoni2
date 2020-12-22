import React from 'react' ;
import './ExpertsSection.css' ;

function ExpertsSection() {
    return (
        <section className='experts-section'> 
            <h1>Nasi eksperci</h1>
            <div className='experts-row'>
                <div className='experts-column'>
                    <div className='experts-figure'>
                        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'><span>Jan kowalski</span><br/> Ginekolog 
                        </div>
                    </div>
                </div>

                <div className='experts-column'>
                    <div className='experts-figure'>
                        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'><span>Jan kowalski</span><br/> Ginekolog 
                        </div>
                    </div>
                </div>

                <div className='experts-column'>
                    <div className='experts-figure'>
                        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'><span>Jan kowalski</span><br/> Ginekolog 
                        </div>
                    </div>
                </div>
            </div>

            <div className='subtitle'> <h4> Wspierane przez</h4>
            </div>

            <div className='support-row'>
                <div className='support-column'>
                    <img className='support-img' src='./images/IMID-logo.png' alt='sup1'/>
                </div>
                <div className='support-column'>
                    <img className='support-img' src='./images/IMID-logo.png' alt='sup1'/>
                </div>
                <div className='support-column'>
                    <img className='support-img' src='./images/IMID-logo.png' alt='sup1'/>
                </div>
                <div className='support-column'>
                    <img className='support-img' src='./images/IMID-logo.png' alt='sup1'/>
                </div>
            </div>
        </section>
    )
}

export default ExpertsSection
