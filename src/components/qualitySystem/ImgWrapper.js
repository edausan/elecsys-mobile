import React, { Component } from 'react';
import { css } from 'glamor'
// import { FamilyConsumer } from '../context/FamilyContext'


export default class ImgWrapper extends Component {
    state = {
        loaded: false,
        ongoing: true,
        imgCreated: false
    }

    componentDidMount() {
        this.imgLoad()
    }

    componentWillUnmount() {
        this.setState({
            ongoing: false
        })
    }

    imgLoad = () => {

        const { src, id } = this.props
        let wrap = id
        let img = ''
        if (!this.state.imgCreated) {

            img = new Image()
            img.src = src
            img.classList.add('responsive-img')
            img.onload = () => {
                this.setState({
                    loaded: true
                })
                let wrapper = document.getElementById(wrap)
                if (wrapper) {
                    wrapper.appendChild(img)
                }
            }
        }
        this.setState({
            imgCreated: true
        })

    }

    render() {
        return (
            <div id={this.props.id} className={`row grey lighten-3 ${this.state.loaded ? wrap : imgWrapper}`}>
                {/* <FamilyConsumer>
                    {
                        value => <h1>{value}</h1>
                    }
                </FamilyConsumer> */}
            </div>
        );
    }
}


const placeHolderShimmer = css.keyframes({
    '0%': {
        backgroundPosition: '-468px 0'
    },
    '100%': {
        backgroundPosition: '468px 0'
    }
})

const wrap = css({
    '> img': {
        display: 'block'
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