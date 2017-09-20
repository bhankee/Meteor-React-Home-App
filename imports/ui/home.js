import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PicNav from './PicNav';
import { Accounts } from 'meteor/accounts-base';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onLogout() {
		Accounts.logout();
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<button
						className="btn btn-primary logoutButton"
						onClick={this.onLogout.bind(this)}
					>
						Logout
					</button>
				</div>

				<div className="col-md-4 col-md-offset-4">
					<div className="homeIntro">Welcome Home</div>
					<div className="homeIntroMd">
						Select a category below to upgrade your house!
					</div>
				</div>

				<PicNav />
			</div>
		);
	}
}
export default Home;
