import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Signup from '../imports/ui/Signup';
import Home from '../imports/ui/Home';
import Login from '../imports/ui/Login';
import App from '../imports/ui/app';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
require('../imports/client/styles/index.css');
import { Paint } from '../imports/api/Paint';
import { Appliances } from '../imports/api/Appliances';
import { Hardware } from '../imports/api/Hardware';
import { Flooring } from '../imports/api/Flooring';
import PaintPage from '../imports/ui/PaintPage';
import AppliancePage from '../imports/ui/AppliancePage';
import HardwarePage from '../imports/ui/HardwarePage';
import FlooringPage from '../imports/ui/FlooringPage';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
		<Route path="/signup" component={Signup} />
		<Route path="/login" component={Login} />
		<Route path="/paint" component={PaintPage} />
		<Route path="/appliances" component={AppliancePage} />
		<Route path="/hardware" component={HardwarePage} />
		<Route path="/flooring" component={FlooringPage} />
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
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
	const isAuthenticatedPage = authenticatedPages.includes(pathname);

	if (isUnauthenticatedPage && isAuthenticated) {
		browserHistory.push('/');
	} else if (isAuthenticatedPage && !isAuthenticated) {
		browserHistory.push('/login');
	}
});

Meteor.startup(() => {
	Tracker.autorun(() => {
		let paint = Paint.find().fetch();
		let appliances = Appliances.find().fetch();
		let hardware = Hardware.find().fetch();
		let flooring = Flooring.find().fetch();
		ReactDOM.render(routes, document.getElementById('app'));
	});
});
