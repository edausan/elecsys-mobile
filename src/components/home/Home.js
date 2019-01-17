import React from 'react';
import { css } from 'glamor'
import Carousel from '../layout/Carousel'
import Wrapper from '../layout/Wrapper'

const Home = (props) => {
    return (
        <section>
            <Carousel />
            <Wrapper>
                <div className="row"></div>
                <div className="row">
                    <div className="card z-depth-1">
                        <div className="card-content">
                            <p className="flow-text">
                                <small className={`blue-text ${elecsys}`}><strong>ELECSYS MANUFACTURING CORPORATION</strong></small> is providing EMS solutions based in the Philippine Free Trade Zone</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

const elecsys = css({
    fontSize: '1.05rem'
})

export default Home