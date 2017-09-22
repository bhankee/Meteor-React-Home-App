import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(e) {
		e.preventDefault();
		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();

		Accounts.createUser({ email, password }, err => {
			if (err) {
				this.setState({ error: err.reason });
			} else {
				this.setState({ error: '' });
			}
		});
	}

	render() {
		return (
			<div className="row text-center">
				<div className="col-sm-4 col-sm-offset-4 formContainer">
					<h1 className="welcomeText">Join Home App</h1>

					{this.state.error ? <p>{this.state.error}</p> : undefined}

					<form onSubmit={this.onSubmit.bind(this)} noValidate>
						<input
							className="inputField form-group"
							type="email"
							ref="email"
							name="email"
							placeholder="Email"
						/>

						<input
							className="inputField form-group"
							type="password"
							ref="password"
							name="password"
							placeholder="Password"
						/>

						<button className="btn btn-primary btn-lg btn-block">
							Sign up
						</button>
					</form>

					<Link to="/login" className="formLink">
						Already signed up?
					</Link>
				</div>
				<div className="container-fluid">
					<div className="row bottomFooter">
						<div className="col-xs-12 col-md-12 footer">
							<p>Copyright Brad Hankee 2017</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Signup;
