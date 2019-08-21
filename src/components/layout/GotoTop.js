import React, { Component } from 'react'
import { css } from 'glamor'

class GotoTop extends Component {
    state = {
        showBtn: false
    }

    componentDidMount() {
        this.handleScroll()
    }

    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop

        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 10);
        }
    }

    handleScroll = () => {
        window.addEventListener('scroll', () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop
            if (c > 0) {
                if (!this.state.showBtn) {
                    this.setState({
                        showBtn: true
                    })
                }
            } else if (c === 0) {
                if (this.state.showBtn) {
                    this.setState({
                        showBtn: false
                    })
                }
            }
        })

    }

    render() {
        return (
            <button
                onClick={this.scrollToTop}
                className={`${this.state.showBtn ? show : hide} btn white black-text waves-effect waves-dark z-depth-4 valign-center ${gotoWrapper}`}>
                <i className="material-icons">arrow_upward</i>
            </button>
        )
    }
}

const show = css({
    transform: 'translateX(0%)'
})
const hide = css({
    transform: 'translateX(200%)'
})

const gotoWrapper = css({
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 1001,
    transition: '500ms ease',
    padding: '5px 16px !important',
    boxSizing: 'initial !important'
})


export default GotoTop;