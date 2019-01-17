import React from 'react';
import NavbarLinks from './NavbarLinks'
import { css } from 'glamor'
import Logo from './elecsys-logo-white.svg'

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer>
            <div className="blue-grey darken-3">
                <div className="container">
                    <div className="row">
                        <div className={`col s6 offset-s3 ${footerIcon}`}>
                            <img className="responsive-img" src={Logo} alt="" />
                        </div>

                        <div className="col s12">
                            <NavbarLinks classNames="" wrapper="footer" />
                        </div>
                    </div>
                </div>
                <div className={`center blue-grey darken-4 blue-grey-text darken-1 ${copyright}`}>
                    <small>Copyright © {year} Elecsys. All rights reserved.</small>
                </div>
            </div>
        </footer>
    )
}

const copyright = css({
    padding: '10px 0 !important'
})

const footerIcon = css({
    marginTop: 10
})

export default Footer