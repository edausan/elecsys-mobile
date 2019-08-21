import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem'


class Carousels extends Component {
    arrGenerator = (limit) => {
        let arr = []

        for (let x = 1; x <= limit; x++) {
            arr.push(x)
        }
        return arr
    }

    render() {
        const arrGen = this.arrGenerator(10)
        const carsItem = arrGen.map(arr => {
            return <CarouselItem carouselLoaded={this.props.carouselLoaded} updateCarousel={this.props.updateCarousel} key={arr} src={arr} />
        })
        return (
            <Carousel autoPlay={true} transitionTime={1000} interval={5000} showStatus={false} infiniteLoop={true} showThumbs={false}>
                {carsItem}
            </Carousel>
        )
    }
}

export default Carousels