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
				<h1 className="homeIntro">Welcome Home</h1>
				<h3 className="homeIntroMd">
					Select a category below to upgrade your house!
				</h3>

				<PicNav />
			</div>
		);
	}
}
export default Home;
