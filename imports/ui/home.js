import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductNav from './ProductNav';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1 className="homeIntroLg">Welcome Home</h1>
				<h1 className="homeIntroLg">
					Congrats for adding something to your amazing home
				</h1>
				<h3 className="homeIntroMd">I want to add...</h3>
				<ProductNav />
			</div>
		);
	}
}
export default Home;
