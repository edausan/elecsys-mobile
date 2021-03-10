import React from 'react';
import Wrapper from '../layout/Wrapper';
import ImgWrapper from './ImgWrapper';

const QualitySystem = () => {
	return (
		<Wrapper title="Quality System">
			<ImgWrapper
				small="/static/images/placeholder.jpg"
				src="http://www.elecsysmfg.com/wp-content/uploads/2021/03/Website-Certification-Registration.jpg"
				id="wrapper-1"
			/>
			<ImgWrapper
				small="/static/images/placeholder.jpg"
				src="http://www.elecsysmfg.com/wp-content/uploads/2021/03/Website-Mission-Vision.jpg"
				id="wrapper-2"
			/>
			<ImgWrapper
				small="/static/images/placeholder.jpg"
				src="http://www.elecsysmfg.com/wp-content/uploads/2021/03/Website-Quality-Policy.jpg"
				id="wrapper-3"
			/>
		</Wrapper>
	);
};

export default QualitySystem;
