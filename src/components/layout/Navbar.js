import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { css } from 'glamor'
import NavbarLinks from './NavbarLinks'
import Logo from './elecsys-logo-long.svg'

import './Navbar.css'

export default class Navbar extends Component {
    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop

        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 2);
        }
    }

    handleClick = (e) => {
        this.scrollToTop()

        console.log(e.target.id);

        const navLink = document.getElementsByTagName('li')
        const id = e.target.id
        const li = document.querySelectorAll(`li#${id}`)

        for (let x = 0; x < navLink.length; x++) {
            navLink[x].classList.remove('active');
            navLink[x].classList.remove('active-bg');
        }

        for (let x = 0; x < li.length; x++) {
            li[x].classList.add('active')
            li[x].classList.add('active-bg')
        }

        const footerHome = document.querySelector('footer #home')

        footerHome.classList.remove('active')
        footerHome.classList.remove('active-bg')
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="white nav-extended">
                    <div className="container">
                        {/* <div className="nav-content"></div> */}
                        <div className="nav-wrapper">
                            <div className={`hide-on-med-and-down ${lgLogoWrapper}`}>
                                <NavLink to='/' className={`brand-logo valign-wrapper ${lgLogo}`} >
                                    <img id="home" onClick={this.handleClick} className="" src={Logo} alt="" />
                                </NavLink>
                            </div>

                            <div className="hide-on-med-and-up">
                                <NavLink to='/' className={`brand-logo ${logo}`}>
                                    <img id="home" onClick={this.handleClick} className="responsive-img" src={Logo} alt="" />
                                </NavLink>
                            </div>
                            {/* <div className="hide-on-med-and-up">
                                <NavLink to='/' className={`center ${logo}`}><img className="" src={Logo} alt="" /></NavLink>
                            </div> */}

                            {/* <div className={mobileNav}>
                                <ul>
                                    <li className={`waves-effect waves-dark item `}>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className={`waves-effect waves-dark item `}>
                                        <NavLink to="/about_us">About Us</NavLink>
                                    </li>
                                    <li className={`waves-effect waves-dark item `}>
                                        <NavLink to="/capabilities">Capabilities</NavLink>
                                    </li>
                                    <li className={`waves-effect waves-dark item `}>
                                        <NavLink to="/quality_system">Quality System</NavLink>
                                    </li>
                                    <li className={`waves-effect waves-dark item `}>
                                        <NavLink to="/contact_us">Contact Us</NavLink>
                                    </li>
                                    <li className={`waves-effect waves-dark item `}>
                                        <NavLink to="/downloads">Downloads</NavLink>
                                    </li>
                                </ul>
                            </div> */}

                            <div id="slide-out" className="sidenav">
                                <li className={`valign-wrapper ${sidenavlogoWrapper}`}><img className={`${sidenavLogo}`} src={Logo} alt="" /></li>
                                <NavbarLinks />
                            </div>

                            <NavbarLinks classNames={`right hide-on-med-and-down ${fullnav}`} />

                            <a href="/" data-target="slide-out" className="sidenav-trigger blue-text"><i className="material-icons">menu</i></a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

// const mobileNav = css({
//     '> ul li a': {
//         color: 'black !important'
//     }
// })

const lgLogoWrapper = css({
    // position: 'relative',
    // display: 'inline-block',
    // height: '100%',
    // width: 200
})

const lgLogo = css({
    maxWidth: 120,
    '> img': {
        // position: 'absolute',
        width: '100%',
        marginTop: 10
        // top: '50%',
        // left: 0,
        // transform: 'translateY(-50%)'
    },
})

const sidenavlogoWrapper = css({
    textAlign: 'center !important',
    padding: '2.5rem 0',
    position: 'relative'
})

const fullnav = css({
    '> li': {
        '> a': {
            color: 'black !important'
        }
    }
})

const sidenavLogo = css({
    height: '50px !important',
    // filter: 'grayscale(100)',
    left: '50%',
    top: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
})

const logo = css({
    display: 'block',
    position: 'absolute',
    height: '70%',
    '> img': {
        height: '100%'
    },
    top: '50%',
    transform: 'translate(-50%, -50%) !important'
    // '> img': {
    //     display: 'block',
    //     maxWidth: '40%',
    //     margin: '10px auto 0'
    // }
})