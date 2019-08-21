import React, { Component } from 'react';
import { css } from 'glamor'


export default class ImgWrapper extends Component {
    state = {
        imgCreated: false
    }


    componentDidMount() {

        this.smallLoaded()
    }

    renderImages = () => {
        const { src, id } = this.props
        const image = document.querySelectorAll(`#${id} img`)
        const bigImage = document.createElement('img')

        bigImage.onload = () => {
            for (let x = 0; x < image.length; x++) {
                image[x].src = bigImage.src
                image[x].classList.remove(blur)
                image[x].classList.add(unblur)
            }
        }

        setTimeout(() => {
            bigImage.src = src
        }, 1000);
    }

    smallLoaded = () => {
        console.log('small loaded');
        const small = new Image()
        small.src = this.props.small

        small.onload = () => {
            this.setState(() => ({
                imgCreated: true
            }))

            this.renderImages()
        }
    }

    render() {
        const { id, small } = this.props
        return (
            <div id={id} className={`${this.state.imgCreated ? null : imgWrapper} row grey lighten-3 img-wrapper `}>
                {
                    this.state.imgCreated ? <img id={`img-${id}`} className={`${blur} ${img} responsive-img`} src={small} alt="" /> : null
                }

            </div>
        );
    }
}

const img = css({
    display: 'block'
})

const blur = css({
    filter: 'blur(5px)',
    // transition: 'all 1s'
})

const unblur = css({
    filter: 'blur(0px)',
    transition: 'all 300ms'
})


const placeHolderShimmer = css.keyframes({
    '0%': {
        backgroundPosition: '-468px 0'
    },
    '100%': {
        backgroundPosition: '468px 0'
    }
})

const imgWrapper = css({
    paddingBottom: '50%',
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