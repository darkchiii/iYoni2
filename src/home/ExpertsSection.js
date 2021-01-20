import React from 'react' ;
import './ExpertsSection.css' ;
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item2 from "../components/Item2"
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];

function ExpertsSection() {
    return (
        <section className='experts-section'> 
            <h1>Nasi eksperci</h1>

            <div className="carousel-container-b">
      <Carousel breakPoints={breakPoints}>
        <Item2>
        <div className='overlay-wrapper'>
        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'>
                        <p className='fig-p1'>Jan kowalski</p> 
                        <p className='fig-p2'>Ginekolog</p>
                        </div>
        </div>
        </Item2>

        <Item2>
        <div className='overlay-wrapper'>
        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'>
                        <p className='fig-p1'>Jan kowalski</p> 
                        <p className='fig-p2'>Ginekolog</p>
                        </div>
        </div>
        </Item2>
        <Item2>
        <div className='overlay-wrapper'>
        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'>
                        <p className='fig-p1'>Jan kowalski</p> 
                        <p className='fig-p2'>Ginekolog</p>
                        </div>
        </div>
        </Item2>
      </Carousel>
    </div>



            {/* <div className='experts-row'>
                <div className='experts-column'>
                    <div className='experts-figure'>
                        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'>
                        <p className='fig-p1'>Jan kowalski</p> 
                        <p className='fig-p2'>Ginekolog</p>
                        </div>
                    </div>
                </div>

                <div className='experts-column'>
                    <div className='experts-figure'>
                        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'>
                            <p className='fig-p1'>Jan kowalski</p> 
                            <p className='fig-p2'>Ginekolog</p>
                        </div>
                    </div>
                </div>

                <div className='experts-column'>
                    <div className='experts-figure'>
                        <img className='experts-img' src='./images/expert.png' alt=''/>
                        <div className='fig-caption'>
                        <p className='fig-p1'>Jan kowalski</p> 
                        <p className='fig-p2'>Ginekolog</p>                        </div>
                    </div>
                </div>
            </div> */}

            <div className='subtitle'> <p> Wspierane przez</p>
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
