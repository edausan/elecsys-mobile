import React, { Component } from 'react'
import { css } from 'glamor'

class CarouselItem extends Component {

    state = {
        loaded: false,
        img: ''
    }

    componentDidMount() {
        if (!this.props.carouselLoaded) {
            this.renderImages()
        }
    }


    imageLoad = (e) => {
        const sliderWrapper = document.querySelector('.slider-wrapper')
        const carouselWrapper = document.querySelector('.carousel')
        sliderWrapper.style.height = `${e.target.height}px`
        carouselWrapper.style.height = `${e.target.height}px`
        this.resize()
    }

    resize = () => {
        window.addEventListener('resize', this.ImageResizing)
    }

    ImageResizing = (e) => {
        const carouselWrapper = document.querySelector('.carousel')
        const sliderWrapper = document.querySelector('.slider-wrapper')
        const carouselImg = document.querySelector('.carousel div img')
        if (carouselWrapper) {
            carouselWrapper.style.height = `${carouselImg.height}px`
            sliderWrapper.style.height = `${carouselImg.height}px`
            carouselWrapper.style.height = `${carouselImg.height}px`
        }
    }

    renderImages = () => {
        const { src } = this.props
        const image = document.querySelectorAll(`.carousel-img-wrapper img#cimg-${src}`)
        const bigImage = document.createElement('img')

        bigImage.onload = () => {
            for (let x = 0; x < image.length; x++) {
                image[x].src = bigImage.src
                image[x].className = unblur
            }
        }

        if (src === 10) {
            this.props.updateCarousel()
        }
        setTimeout(() => {
            bigImage.src = `http://www.elecsysmfg.com/wp-content/uploads/2018/10/home_no_${src}_min.jpg`
            if (src === 7 || src === 9) {
                bigImage.src = `http://www.elecsysmfg.com/wp-content/uploads/2018/10/home_no_${src}__min.jpg`
            }
        }, 1000);
    }

    render() {
        const { src } = this.props
        return (
            <div className="carousel-img-wrapper">
                <img id={`cimg-${src}`} className={blur} onLoad={this.imageLoad} src={`/static/images/blurred-carousel/Home no.${src}.jpg`} alt={`carousel-img-${src}`} />
            </div>
        )
    }
}

const blur = css({
    filter: 'blur(1px)',
    transition: 'all 1s'
})

const unblur = css({
    filter: 'blur(0px)',
    transition: 'all 300ms'
})

export default CarouselItem;