import React from 'react' ;
import './FunctionsSection.css' ;


function FunctionsSection() {
    return (
        <section className='functions-section'>
            <h1>Funkcje aplikacji</h1>
            
<div className='flex-wrapper-a'>
    <div className='flex-container'>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src='./images/fun1.png' alt='1'/>    
            <p className='fun-description-c'>Monitoring cyklu i dni płodnych</p>
        </div>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src='./images/fun2.png' alt='2'/>    
            <p className='fun-description'>Rejestracja codziennych aktywności</p>
        </div>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src='./images/fun3.png' alt='3'/>    
            <p className='fun-description'>Spersonalizowane raporty i wskazówki</p>
        </div>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src='./images/fun4.png' alt='4'/>    
            <p className='fun-description-b'>Prognozy szans na ciążę</p>
        </div>
    </div>
</div>

<div className='flex-wrapper-b'>
    <div className='flex-container'>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src='./images/fun5.png' alt='5'/>    
            <p className='fun-description-c'>Monitoring cyklu i dni płodnych</p>
        </div>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src='./images/fun6.png' alt='6'/>    
            <p className='fun-description-c'>Rejestracja codziennych aktywności</p>
        </div>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src='./images/fun7.png' alt='7'/>    
            <p className='fun-description'>Spersonalizowane raporty i wskazówki</p>
        </div>

    </div>
</div>


<div className='app-stores-wrapper'>
                <div className='store-row'>
                    <div className='store-column'>
                        <img className='store-img' src='./images/app-store.png' alt='apple-store'/>
                    </div>
                    <div className='store-column'>
                        <img className='store-img' src='./images/google-play-store.png' alt='google-store'/>
                    </div>
                </div>
            </div> 


        </section>
    )
}

export default FunctionsSection
