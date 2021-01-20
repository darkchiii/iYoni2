import React from 'react' ;
import './BaseSection.css' ;
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../components/Item"
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
  ];

function BaseSection() {
    return (



        <section className='base-section'>
             <div className='base-rectangle'>
            <img className='base-v-1' src='./images/proba3.png' alt='vector-base-1' />
            <img className='base-v-2' src='./images/base-v2.png' alt='vector-base-1' />
            <img className='base-v-3' src='./images/base-vector-3.png' alt='vector-base-1' />

                <h1>Poznaj naszą bazę<br/> wiedzy</h1>
                <div className='baseContainer'>
                {/* <div className='base-row-1'>
                    <div className='col-row-1'>
                        <img className='base-img' src='./images/base1.png' alt='base1' />
                        <button className='btn'>Twoja płodność i cykl</button>
                    </div>
                    <div className='col-row-1'>
                        <img className='base-img-2' src='./images/base2.png' alt='base2' />
                        <button className='btn'>Płodność Twojego partnera</button>

                    </div>
                    <div className='col-row-1'>
                        <img className='base-img-3' src='./images/base3.png' alt='base3' />
                        <button className='btn'>Szanse na ciążę – od czego zależą</button>
                    </div>
                </div> */}

<div className="carousel-container">
      <Carousel breakPoints={breakPoints}>
        <Item>
        <div className='overlay-wrapper'>
                <img className='base-img' src='./images/zdj1.jpg' alt='base1' />
             <div className='img-overlay'>
                 <button className="btn">Twoja płodność i cykl</button>
            </div>
       </div>
        </Item>

        <Item>
              <div className='overlay-wrapper'>
              <img className='base-img' src='./images/zdj2.jpg' alt='base2' />
             <div className='img-overlay'>
             <button className='btn'>Płodność Twojego partnera</button>
            </div>
       </div>
        </Item>
        <Item>
        <div className='overlay-wrapper'>
        <img className='base-img' src='./images/zdj3.jpg' alt='base3' />
             <div className='img-overlay'>
                        <button className='btn'>Szanse na ciążę – od czego zależą</button>
            </div>
       </div>
        </Item>
      </Carousel>
    </div>
                </div> 
                </div> 
        </section>
    )
}

export default BaseSection

