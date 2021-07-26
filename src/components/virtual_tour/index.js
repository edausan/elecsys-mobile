import React from 'react';
import { css } from 'glamor';
import Wrapper from '../layout/Wrapper';

export const VirtualTour = () => {
	const loadVideo = () => {
		const src = 'https://www.youtube.com/embed/VR_xOCBF1uc';

		return (
			<div className={`col s12 ${capWrapper}`}>
				<iframe
					// width="1268"
					// height="713"
					src="https://www.youtube.com/embed/VR_xOCBF1uc"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className={vid}
				></iframe>
				{/* <video id="video" className={vid} style={{ width: '100%' }} autoPlay controls>
					<source src={src} type="video/mp4" />
					Your browser does not support the video tag.
				</video> */}
			</div>
		);
	};

	return <Wrapper title="Virtual Tour" jumbotron={loadVideo()} />;
};

const vid = css({
	width: '100%',
	minHeight: 188,
});

const placeHolderShimmer = css.keyframes({
	'0%': {
		backgroundPosition: '-468px 0',
	},
	'100%': {
		backgroundPosition: '468px 0',
	},
});

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
});
