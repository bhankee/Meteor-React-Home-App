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
			console.log('Signup callback', err);
		});
		// this.setState({
		// 	error: 'Whoops, something went wrong!'
		// });
	}

	render() {
		return (
			<div>
				<h1>Join My Home App</h1>

				{this.state.error ? <p>{this.state.error}</p> : undefined}

				<form onSubmit={this.onSubmit.bind(this)}>
					<input
						type="email"
						ref="email"
						name="email"
						placeholder="Email"
					/>
					<input
						type="password"
						ref="password"
						name="password"
						placeholder="Password"
					/>
					<button>Create Account</button>
				</form>

				<Link to="/Login">Already have an account?</Link>
			</div>
		);
	}
}
export default Signup;
