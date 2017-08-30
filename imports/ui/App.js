import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home';
import PaintPage from './PaintPage';
import AppliancePage from './AppliancePage';
import HardwarePage from './HardwarePage';
import FlooringPage from './FlooringPage';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/paint" component={PaintPage} />
					<Route path="/appliances" component={AppliancePage} />
					<Route path="/hardware" component={HardwarePage} />
					<Route path="/flooring" component={FlooringPage} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
