import React from 'react' ;
import './BaseSection.css' ;

function BaseSection() {
    return (



        <section className='base-section'>
             <div className='base-rectangle'>
            <img className='base-v-1' src='./images/proba3.png' alt='vector-base-1' />

                <h1>Poznaj naszą bazę<br/> wiedzy</h1>
                <div className='baseContainer'>
                <div className='base-row-1'>
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
                </div>
                </div> 
                </div> 

            


        </section>
    )
}

export default BaseSection

