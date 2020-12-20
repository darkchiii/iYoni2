import React from 'react' ;
import { Link } from 'react-router-dom';
import './MomSection.css' ;

function MomSection() {
    return (
        <div>
            <div className='happy-mom-container'>
                <div className='happy-mom-row'>
                    <div className='mom-column1'>
                    <img className='happy-mom-pic' src='/images/happy-mom.png' alt='happy-mom'/>
                    </div>
                    <div className='mom-column2-rectangle'>
                        <div className='text-wrapper'>
                        <div className='quote-icon'>
                        <i class="fas fa-quote-left"/>
                        </div>
                        <div className='p2'>To działa! Jestem teraz mamą! <br/> Polecam w 100%</div>
                        <div className='p3'>~Basia, mama Kuby i Kasi.</div>
                        <div className='base-button-wrapper'> 
                        <button className='base-button'>Poznaj historię Basi</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-wrapper2'>
                <h1>Podjęłaś dezycję i<br/>chcesz zostać mamą?</h1> 
                <p><strong>Zwiększ swoje szanse na zajście ciąże i zadbaj o płodność. </strong> <br/>Dowiedz się, co na nią wpływa, prowadź „płodny” styl życia, z rozsądkiem się badaj. 
                    Jeśli to konieczne – świadomie przejdź przez proces leczenia.
                </p>
                <div className='mom-rectangle'>
                    <p className='p-rec'>
                        iYoni jest po to, żeby Ci pomóc
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MomSection
