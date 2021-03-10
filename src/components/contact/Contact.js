import React from 'react';
import { css } from 'glamor';
import Wrapper from '../layout/Wrapper';
import Card from './Card';
import MapCard from './MapCard';

const manufacturingPlantAddress = (
	<div>
		<p>Lot 1B Block 6 Phase II,</p>
		<p>PEZA Rosario, Cavite,</p>
		<p>Philippines 4106</p>
	</div>
);

const australiaAddress = (
	<div>
		<p>Suite 9, 138-140,</p>
		<p>Elizabeth Drive Liverpool N.S.W.</p>
		<p>2170</p>
	</div>
);
const usAddress = (
	<div>
		<p>5424 Sunol Blvd,</p>
		<p>Ste 10-243</p>
		<p>Pleasanton CA, 94566</p>
	</div>
);

const philMap =
	'https://maps.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15456.98850681144!2d120.85626681315182!3d14.41291262867656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962ce690e93381%3A0x88abf36c4ae8f094!2sElecsys+Mfg.+Corp!5e0!3m2!1sen!2sph!4v1539418610019';

const australiaMap =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9787345675554!2d150.90787151521147!3d-33.915946880643354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1295b5736d976d%3A0x8448536f05e07845!2sRepco!5e0!3m2!1sen!2sph!4v1539415978856';

const usMap =
	'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.9267855483777!2d-121.88084048468596!3d37.650925279782214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe9bfe139c52f%3A0x7f37c60dd6eed515!2s5424+Sunol+Blvd+Ste+10-243%2C+Pleasanton%2C+CA+94566%2C+USA!5e0!3m2!1sen!2sph!4v1539422686127';

const Contact = () => {
	const tels = () => {
		return (
			<div>
				<div>+63 (046) 458 1703</div>
				<div>+63 (046) 437 7697</div>
				<div>+63 (046) 437 7698</div>
			</div>
		);
	};

	return (
		<Wrapper title="Contact Us">
			<section className="row">
				<div className="col s12">
					<h5 className={`blue white-text ${siteTitle}`}>Manufacturing Plant</h5>
				</div>
				<div className="col s12 m6 l6">
					<Card
						icon="location_on"
						title="Address"
						content={manufacturingPlantAddress}
						link="https://goo.gl/maps/EYm8i8ZiKDn"
						withLink={true}
					/>
					<Card icon="call" title="Telephone" content={tels()} />
					<Card
						icon="person_add"
						title="Skype"
						content="live:elecsysmfg"
						link="https://join.skype.com/invite/Hkdzgiu2ZQht"
						withLink={true}
					/>
					<Card
						icon="alternate_email"
						title="Email"
						content="sales@elecsysmfg.com"
						link="sales@elecsysmfg.com"
						withLink={true}
					/>
					<Card
						icon="person_add"
						title="Facebook"
						content="ElecSys Manufacturing Corporation"
						link="https://www.facebook.com/Elecsys-Manufacturing-Corporation-253856048601742/?view_public_for=253856048601742"
						withLink={true}
					/>
				</div>
				<div className="col s12 m6 l6">
					<MapCard id="wrapper-1" icon="map" title="Map" src={philMap} />
				</div>
			</section>

			<section className="row">
				<div className="col s12">
					<h5 className={`blue white-text ${siteTitle}`}>International Sales Site</h5>
					<h6>
						<blockquote>Australia</blockquote>
					</h6>
				</div>
				<div className="col s12 m6 l6">
					<Card
						icon="location_on"
						title="Address"
						content={australiaAddress}
						link="https://goo.gl/maps/vQd99A4462C2"
						withLink={true}
					/>
					<Card
						icon="alternate_email"
						title="Email"
						content="sales@elecsysmfg.com"
						link="sales@elecsysmfg.com"
						withLink={true}
					/>
					<Card icon="call" title="Telephone" content="1 300 412 270" />
				</div>
				<div className="col s12 m6 l6">
					<MapCard id="wrapper-2" icon="map" title="Map" src={australiaMap} />
				</div>
			</section>

			<section className="row">
				<div className="col s12">
					<h6>
						<blockquote>US</blockquote>
					</h6>
				</div>

				<div className="col s12 m6 l6">
					<Card
						icon="location_on"
						title="Address"
						content={usAddress}
						link="https://goo.gl/maps/vQd99A4462C2"
						withLink={true}
					/>
					<Card
						icon="alternate_email"
						title="Email"
						content="sales@elecsysmfg.com"
						link="sales@elecsysmfg.com"
						withLink={true}
					/>
					<Card icon="call" title="Toll Free" content="1-866-8993532" />
				</div>
				<div className="col s12 m6 l6">
					<MapCard id="wrapper-3" icon="map" title="Map" src={usMap} />
				</div>
			</section>
		</Wrapper>
	);
};

const siteTitle = css({
	padding: 15,
});

export default Contact;
