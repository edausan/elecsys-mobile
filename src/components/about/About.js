import React from 'react';
import { css } from 'glamor'
import Wrapper from '../layout/Wrapper'
import ImgWrapper from '../qualitySystem/ImgWrapper'



const About = () => {
    const jumbotron = <ImgWrapper small="/static/images/about-us-banner-2-min.jpg" src="http://www.elecsysmfg.com/wp-content/uploads/2018/10/about-us-banner-2.jpg" id="about-wrapper-1" />
    return (


        <Wrapper title="About Us" jumbotron={jumbotron}>

            <p className={`flow-text ${paragraphs}`}>
                Since its inception, Electronic Systems Manufacturing Corp. (Elecsys MFG) has developed an outstanding reputation for customer service, on time delivery and producing high quality products at very competitive prices. We are able to provide consignment and turnkey manufacturing solutions for through hole and surface mount assemblies, testing and right through to complete box builds.
            </p>

            <p className={`flow-text ${paragraphs}`}>
                When you work with Electronic Systems Manufacturing Corp (Elecsys MFG), you really do work with us. Creating working partnerships  with our customers enables us to better meet their individual needs whiles delivering products that exceed their expectations. We offer the skills and expertise of much larger contract manufacturers with flexibility, service and attention to detail.
            </p>
            <p className={`flow-text ${paragraphs}`}>
                We understand that at times Engineering Change orders need to be applied to product that is already on the production floor or  that some rework may be required for various reasons. Electronic Systems Manufacturing Corp (Elecsys MFG) are more than happy to assist in this area giving our customer's every opportunity to achieve their goal.
            </p>
            <p className={`flow-text ${paragraphs}`}>

                Our experienced staff with over 30 years' experience in the manufacturing of electronic assemblies offer assistance in providing design and manufacturing solutions for new product indroduction (NPI), Limited Pilot Production (LPP) all the way to mass production. We understand that not all customers have high volume and as such accommodate low and medium volumes as well as high mix low volume products. Electronic Systems Manufacturing Corp (Elecsys MFG) as standard practise will offer recommendations for manufacturing cost reductions. This will ensure that all our customers' products are manufactured not only at the highest quality but also for the best possible price.
            </p>
        </Wrapper>

    )
}

const paragraphs = css({
    textAlign: 'justify'
})

export default About


