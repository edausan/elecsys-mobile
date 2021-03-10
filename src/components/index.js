import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Imported Components
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
// Pages
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Capabilities from './capabilities/Capabilities';
import QualitySystem from './qualitySystem/QualitySystem';
import Downloads from './downloads/Downloads';
import GotoTop from './layout/GotoTop';
import { VirtualTour } from './virtual_tour';

export default class extends Component {
	state = {
		imgCreated: false,
		something: 'hello',
	};

	render() {
		return (
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" render={() => <Home something={this.state.something} />} />
						<Route path="/about_us" component={() => <About />} />
						<Route path="/capabilities" component={() => <Capabilities />} />
						<Route path="/quality_system" component={() => <QualitySystem />} />
						<Route path="/virtual_tour" component={() => <VirtualTour />} />
						<Route path="/contact_us" component={() => <Contact />} />
						<Route path="/downloads" component={() => <Downloads />} />
					</Switch>
					<Footer />
					<GotoTop />
				</div>
			</BrowserRouter>
		);
	}
}
