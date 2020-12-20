import React from 'react' ;
import './Button.css' ;
import {Link} from 'react-router-dom' ;

const STYLES=['btn--primary'] ;
const SIZES= ['btn--medium', 'btn--large'] ;

export const Button = ({children, type, onClick, buttonSize}) =>
{
    const checkButtonSize = STYLES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0] ;

    return (
            <Link to='/pobierz-aplikacje' className='btn-mobile'>
        <button className={`btn--primary ${checkButtonSize} `}
        onClick={onClick}
        type={type}
        > 
            {children}
        </button>

    </Link>
    )
};
