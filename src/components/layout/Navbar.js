import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { css } from 'glamor'
import NavbarLinks from './NavbarLinks'
import Logo from './elecsys-logo-long.svg'

export default class Navbar extends Component {

    componentDidMount() {
        this.handleHome()
    }

    handleClick = (e) => {
        const navLink = document.getElementsByTagName('li')
        for (let x = 0; x < navLink.length; x++) {
            navLink[x].classList.remove('active');
            navLink[x].classList.remove('active-bg');
        }
        // e.target.parentNode.classList.add('active')
        // e.target.parentNode.classList.add('active-bg')
    }

    componentDidUpdate() {
        this.handleHome()
    }

    handleHome = () => {
        if (window.location.href === 'http://localhost:3000/' || window.location.href === 'http://elecsysmfg.cf/') {
            let home = document.getElementById('home')
            home.classList.add('active')
            home.classList.add('active-bg')
        }
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="">
                    <div className="white darken-1 nav-wrapper">
                        <div className={`hide-on-med-and-down ${lgLogoWrapper}`}>
                            <NavLink to='/' onClick={this.handleClick} className={`brand-logo ${lgLogo}`}><img src={Logo} alt="" /></NavLink>
                        </div>
                        <div className="hide-on-med-and-up">
                            <NavLink to='/' onClick={this.handleClick} className={`brand-logo ${logo}`}><img className="responsive-img" src={Logo} alt="" /></NavLink>
                        </div>
                        <div id="slide-out" className="sidenav">
                            <li className={`valign-wrapper ${sidenavlogoWrapper}`}><img className={`${sidenavLogo}`} src={Logo} alt="" /></li>
                            <NavbarLinks />
                        </div>
                        <NavbarLinks classNames={`right hide-on-med-and-down ${fullnav}`} />

                        <a href="/" data-target="slide-out" className="sidenav-trigger blue-text"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </div>
        )
    }
}

const lgLogoWrapper = css({
    position: 'relative',
    display: 'inline-block',
    height: '100%',
    width: 100
})

const lgLogo = css({
    height: '80%',
    '> img': {
        height: '100%'
    },
    top: '50%',
    left: 20,
    transform: 'translateY(-50%)'
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
    position: 'absolute',
    height: '70%',
    '> img': {
        height: '100%'
    },
    top: '50%',
    transform: 'translate(-50%, -50%) !important'
})