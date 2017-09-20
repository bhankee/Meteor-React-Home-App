import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './Home';
import PaintPage from './PaintPage';
import AppliancePage from './AppliancePage';
import HardwarePage from './HardwarePage';
import FlooringPage from './FlooringPage';
import Signup from './Signup';
import Login from './Login';

class App extends Component {
	render() {
		const onEnterPublicPage = () => {
			if (Meteor.userId()) {
				browserHistory.replace('/');
			}
		};

		const onEnterPrivatePage = () => {
			if (!Meteor.userId()) {
				browserHistory.replace('/login');
			}
		};

		const routes = (
			<Router history={browserHistory}>
				<Route path="/" component={Home} />
				<Route
					path="/signup"
					component={Signup}
					onEnter={onEnterPublicPage}
				/>
				<Route
					path="/login"
					component={Login}
					onEnter={onEnterPublicPage}
				/>
				<Route
					path="/paint"
					component={PaintPage}
					onEnter={onEnterPrivatePage}
				/>
				<Route
					path="/appliances"
					component={AppliancePage}
					onEnter={onEnterPrivatePage}
				/>
				<Route
					path="/hardware"
					component={HardwarePage}
					onEnter={onEnterPrivatePage}
				/>
				<Route
					path="/flooring"
					component={FlooringPage}
					onEnter={onEnterPrivatePage}
				/>
			</Router>
		);

		const unauthenticatedPages = ['/signup', '/login'];
		const authenticatedPages = [
			'/',
			'/paint',
			'/appliances',
			'/harware',
			'/flooring'
		];

		Tracker.autorun(() => {
			const isAuthenticated = !!Meteor.userId();
			const pathname = browserHistory.getCurrentLocation().pathname;
			const isUnauthenticatedPage = unauthenticatedPages.includes(
				pathname
			);
			const isAuthenticatedPage = authenticatedPages.includes(pathname);

			if (isUnauthenticatedPage && isAuthenticated) {
				browserHistory.replace('/');
			} else if (isAuthenticatedPage && !isAuthenticated) {
				browserHistory.replace('/login');
			}
		});

		return routes;
	}
}

export default App;
