import React from 'react';
import { NavLink } from 'react-router-dom'
import { css } from 'glamor'

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 2);
    }
}


const handleClick = (e) => {
    scrollToTop()

    const navLink = document.getElementsByTagName('li')
    const id = e.target.innerHTML.toLowerCase().split(' ').join('_')
    const li = document.querySelector(`li#${id}`)

    for (let x = 0; x < navLink.length; x++) {
        navLink[x].classList.remove('active');
        navLink[x].classList.remove('active-bg');
    }

    e.target.parentNode.classList.add('active')
    e.target.parentNode.classList.add('active-bg')

    li.classList.add('active')
    li.classList.add('active-bg')
}

const handleClickOnFooter = (e) => {
    scrollToTop()

    const navLink = document.getElementsByTagName('li')
    const id = e.target.innerHTML.toLowerCase().split(' ').join('_')
    const li = document.querySelectorAll(`li#${id}`)

    for (let x = 0; x < navLink.length; x++) {
        navLink[x].classList.remove('active');
        navLink[x].classList.remove('active-bg');
    }

    for (let x = 0; x < li.length; x++) {
        li[x].classList.add('active')
        li[x].classList.add('active-bg')
    }

    e.target.parentNode.classList.remove('active')
    e.target.parentNode.classList.remove('active-bg')
}

const lis = ['Home', 'About Us', 'Capabilities', 'Quality System', 'Contact Us', 'Downloads']

const lowerIt = (text) => {
    return text.toLowerCase().split(' ').join('_')
}

const listLoaded = () => {
    console.log('List Loaded!');

    const home = document.querySelector(`li#home`)
    home.classList.add('active')
    home.classList.add('active-bg')
    if (home) {
    }
}

const NavbarLinks = (props) => {
    return (
        <ul id="slide-out" onLoad={listLoaded} className={`${props.classNames} ${props.wrapper === 'footer' ? footerText : ''} center`}>
            {
                lis.map((li, i) => <li key={i} id={`${lowerIt(li)}`} onClick={props.wrapper === 'footer' ? handleClickOnFooter : handleClick} className={`waves-effect waves-dark item ${wave}`} ><NavLink className="sidenav-close" to={`/${lowerIt(li) === 'home' ? '' : lowerIt(li)}`}>{li}</NavLink></li>)
            }
        </ul>
    )
}

// css
const wave = css({
    display: 'block !important'
})

const footerText = css({
    '> li > a': {
        color: 'white !important'
    },
    padding: '20px 0',
    margin: 0
})

export default NavbarLinks