import React from 'react' ;
import './BenefitsSection.css' ;

function BenefitsSection() {
    return (
        <section className='benefits-section' >
                   
        <div className='list'>
            <div className='iphone-mockup-box'> 
            <img className='iphone-mockup' src='/images/iphone-mockup.png' alt='ip-mockup'/>
            </div>
    <div className='grid-wrapper'>
        <div className='benefits-grid-wrapper'>
            <div className='vector-icon'>
                <img className='benefits-vector-style' src='../images/list-vector.png' alt='vector'/>
            </div>
            <div className='benefits-subtitle'>
                <p1>Poznajesz lepiej swoje ciało i czynniki wpływające na Twoją płodność</p1>
            </div>
            <div className='benefits-description'>
                <p2>Sprawdzone metody stworzone przez lekarzy.</p2>
            </div>
        </div>     
        <div className='benefits-grid-wrapper'>
            <div className='vector-icon'>
                <img className='benefits-vector-style' src='../images/list-vector.png' alt='vector'/>
            </div>
            <div className='benefits-subtitle'>
                <p1>Możesz precyzyjnie przewidywać dni<br/> płodne i przebieg cykli</p1>
            </div>
            <div className='benefits-description'>
                <p2>Kalendarz cyklu, historia zdrowia.</p2>
            </div>
        </div>     
        <div className='benefits-grid-wrapper'>
            <div className='vector-icon'>
                <img className='benefits-vector-style' src='../images/list-vector.png' alt='vector'/>
            </div>
            <div className='benefits-subtitle'>
                <p1>Otrzymujesz raporty i spersonalizowane wskazówki dot. Twojego zdrowia i starań</p1>
            </div>
            <div className='benefits-description'>
                <p2>Porady od renomowanych lekarzy ginekologów na każdy etap ciąży.</p2>
            </div>
        </div>     
        <div className='benefits-grid-wrapper'>
            <div className='vector-icon'>
                <img className='benefits-vector-style' src='../images/list-vector.png' alt='vector'/>
            </div>
            <div className='benefits-subtitle'>
                <p1>Sprawdzasz, jak zwiększyć szansę na<br/> poczęcie dziecka</p1>
            </div>
            <div className='benefits-description'>
                <p2>Masz dostęp do bazy wiedzy, statystyk i rekomendacji, opracowanych<br/> przez ekspertów.</p2>
            </div>
        </div>    
        <div className='benefits-grid-wrapper'>
            <div className='vector-icon'>
                <img className='benefits-vector-style' src='../images/list-vector.png' alt='vector'/>
            </div>
            <div className='benefits-subtitle'>
                <p1>Dowiadujesz się, jak diagnozować i leczyć zaburzenia płodności, by zostać mamą</p1>
            </div>
            <div className='benefits-description'>
                <p2>Jeśli zajdzie potrzeba, zostaniesz przekierowana na działania, które<br/> zwiększą szanse na ciążę.</p2>
            </div>
        </div>   
     </div> 
        </div>
        </section>
    )
}

export default BenefitsSection
