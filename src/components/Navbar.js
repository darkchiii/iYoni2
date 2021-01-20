import React, {useState, useEffect} from 'react' ;
import './Navbar.css' ;

import { Link } from 'react-router-dom' ;
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false) ;
    const [button, setButton] = useState(true) ;

    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false) ;

    const showButton = () => {
        if (window.innerWidth <=960) {
            setButton(false) ;
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton) ;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="logo" src='./images/logo-iyoni.png' alt='logo' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to='/o-iyoni' className='nav-links' onClick={closeMobileMenu}>
                            O iYoni
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/baza-wiedzy' className='nav-links' onClick={closeMobileMenu}>
                            Baza wiedzy
                        </Link>
                    </li>
                    <li>
                        <Link to='pobierz-aplikacje' 
                        className='nav-links-mobile'
                        onClick={closeMobileMenu}
                        >
                            Pobierz aplikację
                        </Link>
                    </li>
                    {button &&<Button>Pobierz aplikację</Button>}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar ;
