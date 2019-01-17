import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const imageLoad = (e) => {
    const carouselWrapper = document.querySelector('.carousel')
    carouselWrapper.style.height = `${e.target.height}px`
}

const resize = () => {
    window.addEventListener('resize', ImageResizing)
}

const ImageResizing = () => {
    const carouselWrapper = document.querySelector('.carousel')
    const carouselImg = document.querySelector('.carousel div img')
    carouselWrapper.style.height = `${carouselImg.height}px`
}

const Carousels = () => {
    resize()
    return (
        <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} showThumbs={false}>
            <div>
                <img onLoad={imageLoad} src="/static/images/carousel/Home no.1.jpg" alt="" />
            </div>
            <div>
                <img src="/static/images/carousel/Home no.1.jpg" alt="" />
            </div>
            <div>
                <img src="/static/images/carousel/Home no.1.jpg" alt="" />
            </div>
        </Carousel>
    )
}

export default Carousels