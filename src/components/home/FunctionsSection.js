import React from 'react' ;
import './FunctionsSection.css' ;


function FunctionsSection() {
    return (
        <section className='functions-section'>
            <h1>Funkcje aplikacji</h1>
            {/* <div className='row'>
                <div className='column'>
                    <div className='figure'>
                        <img className='fig-img' src='./images/fun1.png' alt='fun1'/>
                        <div className='fig-caption'>Monitoring cyklu i dni<br/> płodnych
                        </div>
                    </div>
                </div>

                <div className='column'>
                    <div className='figure'>
                        <img className='fig-img' src='./images/fun2.png' alt='fun2'/>
                        <div className='fig-caption'>Rejestracja<br/> codziennych<br/> aktywności
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='figure'>
                        <img className='fig-img' src='./images/fun3.png' alt='fun3'/>
                        <div className='fig-caption'>Spersonalizowane<br/> raporty i wskazówki
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='figure'>
                        <img className='fig-img' src='./images/fun4.png' alt='fun4'/>
                        <div className='fig-caption'>Prognozy szans<br/> na ciążę
                        </div>
                    </div>
                </div>
                
            </div> */}


            {/* <div className='row2'>
            <div className='column2'>
                    <div className='figure'>
                        <img className='fig-img' src='./images/fun5.png' alt='fun5'/>
                        <div className='fig-caption'>Powiadomienia dla<br/> Twojego partnera
                        </div>
                    </div>
                </div>

                <div className='column2'>
                    <div className='figure'>
                        <img className='fig-img' src='./images/fun6.png' alt='fun6'/>
                        <div className='fig-caption'>Analizy Twojej<br/> płodności i wyników<br/> badań
                        </div>
                    </div>
                </div>

                <div className='column2'>
                    <div className='figure'>
                        <img className='fig-img' src='./images/fun7.png' alt='fun7'/>
                        <div className='fig-caption'>Obszerna baza wiedzy</div>
                    </div>
                </div>
            </div>

            <div className='stores-wrapper'>
                <div className='store-row'>
                    <div className='store-column'>
                        <img className='store-img' src='./images/app-store-logo.png' alt='apple-store'/>
                    </div>
                    <div className='store-column'>
                        <img className='store-img' src='./images/app-store-logo.png' alt='google-store'/>
                    </div>
                </div>
            </div> */}
            
<div className='flex-wrapper-a'>
    <div className='flex-container'>
        <div className='flex-col-container-a'>
            <img className='fun-icon' src='./images/fun1.png' alt='1'/>    
            <p className='fun-description'>Monitoring cyklu i dni płodnych</p>
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
            <p className='fun-description'>Prognozy szans na ciążę</p>
        </div>
    </div>
</div>

<div className='flex-wrapper-b'>
    <div className='flex-container'>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src='./images/fun5.png' alt='5'/>    
            <p className='fun-description'>Monitoring cyklu i dni płodnych</p>
        </div>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src='./images/fun6.png' alt='6'/>    
            <p className='fun-description'>Rejestracja codziennych aktywności</p>
        </div>
        <div className='flex-col-container-b'>
            <img className='fun-icon' src='./images/fun7.png' alt='7'/>    
            <p className='fun-description'>Spersonalizowane raporty i wskazówki</p>
        </div>

    </div>
</div>


        </section>
    )
}

export default FunctionsSection
