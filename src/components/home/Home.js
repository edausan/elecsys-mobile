import React, { Component } from 'react';
import { css } from 'glamor'
import Carousel from '../layout/Carousel'
import Wrapper from '../layout/Wrapper'
import Icons from './Icons'
import { NavLink } from 'react-router-dom'



class Home extends Component {
    state = {
        carouselLoaded: false
    }

    updateCarousel = () => {
        this.setState({
            carouselLoaded: true
        })

        setTimeout(() => {
            // console.log(this.state.carouselLoaded);
        }, 1000);

    }

    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop

        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 2);
        }
    }


    handleClick = (e) => {
        this.scrollToTop()

        const navLink = document.getElementsByTagName('li')
        const id = e.target.id
        const li = document.querySelectorAll(`#${id}`)

        for (let x = 0; x < navLink.length; x++) {
            navLink[x].classList.remove('active');
            navLink[x].classList.remove('active-bg');
        }

        for (let x = 0; x < li.length; x++) {
            li[x].classList.add('active')
            li[x].classList.add('active-bg')
        }

        const footerAbout = document.querySelector('footer #about_us')

        footerAbout.classList.remove('active')
        footerAbout.classList.remove('active-bg')

        // document.body.id = id
    }
    render() {

        return (
            <section>
                <Carousel carouselLoaded={this.state.carouselLoaded} updateCarousel={this.updateCarousel} />

                <div className={`valign-wrapper center ${descriptionWrapper}`}>
                    <div className="container">
                        <section className={`white-text flow-text ${description}`}>
                            <div className="row">
                                <div><h4>ELECSYS MANUFACTURING CORPORATION</h4> is providing EMS solutions based in the Philippine Free Trade Zone. </div>
                            </div>
                            <NavLink to="/about_us">
                                <button id="about_us" onClick={this.handleClick} className={`btn white blue-text waves-effect waves-dark ${btn}`}>
                                    Learn More <i className="material-icons right prefix">chevron_right</i>
                                </button>
                            </NavLink>
                        </section>
                    </div>
                </div>

                <Wrapper>
                    <Icons />
                </Wrapper>
            </section>
        )
    }
}

const btn = css({
    transition: '300ms ease',
    boxShadow: '0 5px 10px 2px rgba(0,0,0,0), 0 1px 10px 5px rgba(0,0,0,0), 0 4px 5px -7px rgba(0,0,0,0)',
    transform: 'scale(1)',
    '> i': {
        transition: '300ms ease',
    },
    ':hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 16px 24px 2px rgba(0,0,0,0.10), 0 6px 30px 5px rgba(0,0,0,0.08), 0 8px 10px -7px rgba(0,0,0,0.2)',
        '> i': {
            transform: 'translateX(5px)'
        }
    }
})

const description = css({
    position: 'relative',
    zIndex: 1001,
})

const descriptionWrapper = css({
    position: 'relative',
    height: '30vw',
    margin: '12rem 0 5rem',
    textAlign: 'center',
    '::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: '50%',
        width: '100%',
        minHeight: 330,
        background: '#2196f3',
        transform: 'translateY(-50%) skewY(-10deg)',
        zIndex: 1000,
    }
})

export default Home