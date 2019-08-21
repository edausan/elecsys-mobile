import React from 'react'
import { css } from 'glamor'
import ElectroMechanical from '../../images/electromechanical.png'
import Laser from '../../images/laser-machine.svg'
import { NavLink } from 'react-router-dom'

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 2);
    }
}

const handleClickOnFooter = (e) => {
    scrollToTop()
    const navLink = document.getElementsByTagName('li')
    const li = document.querySelectorAll('#capabilities')

    for (let x = 0; x < navLink.length; x++) {
        navLink[x].classList.remove('active');
        navLink[x].classList.remove('active-bg');
    }

    for (let x = 0; x < li.length; x++) {
        li[x].classList.add('active');
        li[x].classList.add('active-bg');
    }

    const footerCapabilities = document.querySelector('footer #capabilities')

    footerCapabilities.classList.remove('active')
    footerCapabilities.classList.remove('active-bg')
}

const Icon = (props) => {
    return (
        <NavLink to="/capabilities">
            <div id="capabilities" onClick={handleClickOnFooter} className={`center ${wrapper}`}>
                <figure className={iconWrapper}>
                    <img className={`responsive-img ${img}`} src={props.icon} alt={props.title} />
                </figure>
                <div>
                    <h6>{props.title}</h6>
                </div>
            </div>
        </NavLink>
    )
}

const Icons = () => {
    return (
        <div className={icons}>
            <div className="row">
                <div className="col s12 m4 l4">
                    <Icon icon={ElectroMechanical} title="Electro-Mechanical Assembly" />
                </div>
                <div className="col s12 m4 l4">
                    <Icon icon={Laser} title="Laser Etching Machine" />
                </div>
            </div>
        </div>
    );
}

const icons = css({
    margin: '0 auto'
})

const img = css({
    transform: 'scale(1)',
    transition: '300ms cubic-bezier(0.22, 0.61, 0.36, 1)',
    opacity: .8
})

const wrapper = css({
    padding: 15,
    transition: '300ms cubic-bezier(0.22, 0.61, 0.36, 1)',
    boxShadow: '0 1px 5px rgba(0,0,0,.05)',
    borderRadius: 10,
    transform: 'scale(.95) rotate(0deg)',
    border: '1px solid rgba(0,0,0,0)',
    cursor: 'pointer',
    margin: '5rem 0 0',
    '> div h6': {
        transition: '300ms cubic-bezier(0.22, 0.61, 0.36, 1)',
        fontWeight: 400,
        color: 'black'
    },
    ':hover': {
        border: '1px solid rgba(33,150,243,1)',
        transform: 'scale(1)',
        boxShadow: '0 8px 32px rgba(0,0,0,.1)',
        '> figure img': {
            transform: 'scale(.8) rotate(8deg)',
            opacity: 1,
        },
        '> div h6': {
            transition: '300ms cubic-bezier(0.22, 0.61, 0.36, 1)',
            color: '#2196f3',
            fontWeight: 600
        }
    }
})

const iconWrapper = css({
    maxWidth: '50%',
    display: 'inline-block'
})

export default Icons;