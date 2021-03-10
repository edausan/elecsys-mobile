import React from 'react';
import { css } from 'glamor';
import Wrapper from '../layout/Wrapper';

export const VirtualTour = () => {
	const loadVideo = () => {
		const src = 'http://www.elecsysmfg.com/wp-content/uploads/2021/03/Virtual_Tour.mp4';

		return (
			<div className={`col s12 ${capWrapper}`}>
				<video id="video" className={vid} style={{ width: '100%' }} autoPlay controls>
					<source src={src} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		);
	};

	return <Wrapper title="Virtual Tour" jumbotron={loadVideo()} />;
};

const vid = css({
	width: '100%',
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
