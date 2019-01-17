import React from 'react';
import { NavLink } from 'react-router-dom'
import { css } from 'glamor'

const handleClick = (e) => {
    const navLink = document.getElementsByTagName('li')
    for (let x = 0; x < navLink.length; x++) {
        navLink[x].classList.remove('active');
        navLink[x].classList.remove('active-bg');
    }

    e.target.parentNode.classList.add('active')
    e.target.parentNode.classList.add('active-bg')
}

const handleClickOnFooter = () => {
    const navLink = document.getElementsByTagName('li')
    for (let x = 0; x < navLink.length; x++) {
        navLink[x].classList.remove('active');
        navLink[x].classList.remove('active-bg');
    }
}



const NavbarLinks = (props) => {
    return (
        <ul className={`${props.classNames} ${props.wrapper === 'footer' ? footerText : ''} center`}>
            <li id="home" onClick={props.wrapper === 'footer' ? handleClickOnFooter : handleClick} className={props.wrapper === 'footer' ? null : `active active-bg`}><NavLink to='/'>Home</NavLink></li>
            <li onClick={props.wrapper === 'footer' ? handleClickOnFooter : handleClick}><NavLink to='/about'>About Us</NavLink></li>
            <li onClick={props.wrapper === 'footer' ? handleClickOnFooter : handleClick}><NavLink to='/capabilities'>Capabilities</NavLink></li>
            <li onClick={props.wrapper === 'footer' ? handleClickOnFooter : handleClick}><NavLink to='/quality_system'>Quality System</NavLink></li>
            <li onClick={props.wrapper === 'footer' ? handleClickOnFooter : handleClick}><NavLink to='/contact'>Contact Us</NavLink></li>
            <li onClick={props.wrapper === 'footer' ? handleClickOnFooter : handleClick}><NavLink to='/downloads'>Downloads</NavLink></li>
        </ul>
    )
}

const footerText = css({
    '> li > a': {
        color: 'white !important'
    },
    padding: '20px 0',
    margin: 0
})

export default NavbarLinks