import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PicNav from './PicNav';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h1 className="homeIntroLg">Welcome Home</h1>

				<PicNav />
			</div>
		);
	}
}
export default Home;
