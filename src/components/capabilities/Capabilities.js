import React, { Component } from 'react';
import Wrapper from '../layout/Wrapper'
import { css } from 'glamor'

class Capabilities extends Component {
    state = {
        height: window.innerWidth / 2,
        vidLoaded: false
    }

    componentDidMount() {
        this.loadVideo()
    }

    loadVideo = () => {
        const src = 'http://www.elecsysmfg.com/wp-content/uploads/2019/01/ELECSYS%20Capabilities.mp4'
        const videoWrapper =
            <div className={`col s12 ${capWrapper}`}>
                <video id="video" className={vid} style={{ width: '100%' }} autoPlay controls>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        // const video = document.getElementById('video')
        // video.onload = () => {
        // }
        // this.setState({
        //     vidLoaded: true
        // })

        return videoWrapper
    }

    render() {

        return (
            <Wrapper title="Capabilities" jumbotron={this.loadVideo()}>
                <div className="row">
                    <div className="col s12">
                        <h5>State-of-the-art equipment with highly skilled operators having over 30 years of experience.</h5>
                        <ul className={capabilityList}>
                            <li>Electronic and Microelectronics Assembly</li>
                            <li>Electro-Mechanical Assembly</li>
                            <li>X-ray analysis system</li>
                            <li>Four fully-equipped SMT lines With Solder Paste Inspection machine.</li>
                            <li>RoHS or non-RoHS assemblies</li>
                            <li>Nitrogen (N2) Reflow Over and 12 Zone IR Reflow Over</li>
                            <li>Lead Free wave solder machine</li>
                            <li>Automated optical inspection stations Both 3D and 2D for all SMT lines</li>
                            <li>Automated Radial Insertion machine</li>
                            <li>Laser Etching machine</li>
                            <li>Tape and Reel Capabilities.</li>
                            <li>Automated Conformal Coating Line.</li>
                            <li>Full Test Capabilities.</li>
                            <li>Full Turnkey and Consignment services.</li>
                        </ul>
                    </div>

                </div>

            </Wrapper>
        );
    }
}
const vid = css({
    width: '100%'
})

const placeHolderShimmer = css.keyframes({
    '0%': {
        backgroundPosition: '-468px 0'
    },
    '100%': {
        backgroundPosition: '468px 0'
    }
})

const capWrapper = css({
    animationDuration: '1.25s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: placeHolderShimmer,
    animationTimingFunction: 'linear',
    backgroundColor: '#F6F6F6',
    background: 'linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%)',
    backgroundSize: '800px 104px',
    position: 'relative',
    padding: '0 !important',
    // height: 500,
})

const capabilityList = css({
    paddingLeft: '20px !important',
    '> li': {
        listStyleType: 'disc !important',
        listStylePosition: 'outside',
    }
})

export default Capabilities













