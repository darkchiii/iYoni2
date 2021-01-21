import React from 'react' ;
import './AboutSection.css' ;
import './BioAppSection.css';
import './BioSection' ;
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


            <img className='vector-b-3' src='./images/vector-b-3.png' alt='vector-b-3'/>


<div className='flex-wrap'>
    {/* <img className='vector-b-3' src='./images/vector-b-3.png' alt='vector-b-3'/> */}
    
    <div className='row'>
        <div className='column order-2'>
        <div className='text-container'>
        <h4>iYoni to jedyna tego typu aplikacja, która promuje postępowanie <b className='pink'>zgodne z medycznym standardem.</b></h4>
                <p className='p-a'>Podpowiedzi i sugestie, które otrzymujesz, oparte są o aktualną wiedzę naukową oraz rekomendacje towarzystw medycznych. Algorytmy będące podstawą naszej aplikacji zostały opracowane przy współpracy z ekspertami – <strong className='strong'>specjalistami medycyny rozrodczości z kilkudziesięcioletnim doświadczeniem.</strong>
                </p>
                <p className='p-a'>Aplikacja wspiera kobiety podczas naturalnych starań o dziecko, ale jest także po to, by na wczesnym etapie wykrywać ew. ryzyko zaburzeń powodujących trudności z zajściem w ciążę. Korzystając z niej, zadbasz o swoją płodność, a jeśli będzie taka potrzeba – dowiesz się, jakie badania wykonać i jakie dodatkowe kroki podjąć, by zostać mamą.
                </p>
                </div>
        </div>
        <div className='column-2 order-1'>
        <div className='images-container'>
            <img className='bio-image-1' src='./images/bio1.png' alt=''/>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='column-2 order-1'>
            <div className='images-container'>
            <img className='bio-image-2' src='./images/bio2.png' alt=''/>
            </div>
        </div>
        <div className='column order-2'>
            <div className='text-container'>
        <h4><b className='pink'>Dostarczamy Ci wiedzy</b>, wyjaśniamy wątpliwości i uzasadniamy wskazówki, które dostajesz.</h4>
                <p className='p-a'>Pomagamy dbać o płodność w sposób kompleksowy.  Chcemy, byś podejmowała decyzje i działała świadomie. I zależy nam na tym, byś została mamą. Dostarczamy Ci wsparcia w naturalnych staraniach o ciążę, ale też podpowiadamy rzetelnie, jeśli – w świetle aktualnej wiedzy – w swojej sytuacji warto, byś wykonała dodatkowe badania lub skonsultowała się z lekarzem.
                </p>
                <p className='p-a'>Rekomendacje dot. stylu życia, starań, badań czy możliwości postępowania przy wsparciu medycyny, które otrzymujesz, są zgodne z praktyką kliniczną i zasadą <strong className='strong'>evidence based medicine.</strong> Mają na celu wsparcie Ciebie w możliwie jak najszybszym poczęciu dziecka. W iYoni wierzymy w jakość i skuteczność.
                </p>
                </div>
        </div>
    </div>

    <div className='row'>
        <div className='column order-2'>
        <div className='text-container'>
        <h4><b className='pink'>Ochrona danych </b>jest dla nas kluczowa. </h4>
                <p className='p-a'><strong className='strong'>Korzystamy z serwerów firmy Microsoft,&nbsp;</strong>w których zastosowano najnowsze rozwiązania dot. architektury i inżynierii systemów, zapewniające bezpieczeństwo. 
                </p>
                <p className='p-a'><strong className='strong'>Twoje dane osobowe (e-mail) przechowywane są w osobnej bazie&nbsp;,</strong>&nbsp;a ich połączenie z informacjami wprowadzanymi w trakcie korzystania z aplikacji jest odpowiednio szyfrowane. Mechanika połączenia danych jest poufna i znana tylko iYoni. Nasze zabezpieczenia przechodzą dodatkowo audyty przeprowadzane przez zewnętrzne, niezależne podmioty. 
                </p>
                </div>
        </div>
        <div className='column-2 order-1'>
        <div className='images-container'>
            <img className='bio-image-3' src='./images/bio3.png' alt=''/>
            </div>
        </div>
    </div>
</div>

<div className='bio-store-section'>
            <div className='bio-app-rectangle'>
                <div className='bio-app-container'>
                    <img className='bio-app-logo' src='./images/logo-footer.png' alt='logo'/>
                    <h3>Technologia i medycyna <br/>
w służbie Twoich marzeń.</h3>
                    {/* <div className='bio-store-img-row'>
                            <div className='bio-store-img-col'>
                                <img className='bio-store-img' src='./images/app-store.png' alt='store-img'/>
                            </div>
                            <div className='bio-store-img col'>
                                <img className='bio-store-img' src='./images/google-play-store.png' alt='store-img'/>
                            </div>
                        </div> */}
                        
                     <img className='bio-store-img' src='./images/google-play-store.png' alt='store-img'/>
                        
                     {/* <img className='rec-img' src='./images/bio-rec.png' alt='bio-img'/>
                <img className='rec-img-mobile' src='./images/bio-rec-mobile.png' alt='bio-img-mobile'/> */}
                        </div>

                <img className='rec-img' src='./images/bio-rec.png' alt='bio-img'/>
                <img className='rec-img-mobile' src='./images/bio-rec-mobile.png' alt='bio-img-mobile'/>
                {/* </div> */}

            </div>
        </div>






        </section>
    )
}

export default AboutSection
