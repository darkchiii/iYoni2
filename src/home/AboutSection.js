import React from 'react' ;
import './AboutSection.css'

function AboutSection() {
    return (
        <section className='about-section'>
            <div className='about-container'>
            {/* <div className='water-marks-1'>
                        <img className='b-vector-1' src='./images/vector-b-1.png' alt='vector-b-1'/> 
                        <img className='b-vector-2' src='./images/vector-b-2.png' alt='vector-b-2'/> 
                    </div> */}
                <div className='pink-rectangle'>
                    {/* <div className='water-marks-1'> */}
                        <img className='b-vector-1' src='./images/vector-b-1.png' alt='vector-b-1'/>
                        <img className='b-vector-2' src='./images/vector-b-2.png' alt='vector-b-2'/>
                    {/* </div> */}
                    <h1>Aplikacja iYoni powstała, by kompleksowo wspierać kobiety w dbaniu o płodność i w czasie starań o ciążę. </h1>
                    <h2>Stworzyliśmy narzędzie, które nie tylko pozwala na szczegółowe monitorowanie cyklu, dni płodnych i codziennych aktywności, ale również dostarcza rzetelnej wiedzy, co możesz zrobić, by zwiększyć szansę na poczęcie dziecka.</h2>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
