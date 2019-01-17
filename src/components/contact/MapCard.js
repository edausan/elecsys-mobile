import React, { Component } from 'react';
import { css } from 'glamor'


export default class MapCard extends Component {
    state = {
        loaded: false,
        height: null
    }

    componentDidMount() {
        const wrapper = document.getElementById(this.props.id)
        this.setState(prevState => ({
            height: prevState.height = wrapper.offsetWidth
        }))

        this.mapLoader(wrapper.offsetWidth)
    }

    mapLoader = (height) => {
        const { src, id } = this.props
        let iframe = document.createElement('iframe')
        iframe.src = src
        iframe.style.height = `${height}px`
        iframe.allowFullscreen = true
        iframe.frameBorder = 0
        iframe.classList.add(map)

        let wrapper = document.getElementById(id)
        wrapper.appendChild(iframe)
    }

    render() {
        return (
            <section className={`card`}>
                <div className={`card-content ${mapcard}`}>
                    <small className="card-title blue-text">
                        <i className="material-icons left prefix">{this.props.icon}</i>
                        <strong className={title}>{this.props.title}</strong>
                    </small>
                </div>
                <div id={this.props.id} style={{ height: this.state.height }} className={`${this.state.loaded ? null : mapWrapper} ${mapWrap}`}></div>
            </section>
        );
    }
}

const mapWrap = css({
    // minHeight: 500
})

const mapcard = css({
    '> small': {
        margin: '0 !important'
    }
})

const map = css({
    width: '100%',
    display: 'block',
    // height: (window.innerWidth - 80)
})


const title = css({
    textTransform: 'uppercase'
})

const placeHolderShimmer = css.keyframes({
    '0%': {
        backgroundPosition: '-468px 0'
    },
    '100%': {
        backgroundPosition: '468px 0'
    }
})

const mapWrapper = css({
    animationDuration: '1.25s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: placeHolderShimmer,
    animationTimingFunction: 'linear',
    backgroundColor: '#F6F6F6',
    background: 'linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%)',
    backgroundSize: '800px 104px',
    position: 'relative',
})