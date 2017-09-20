import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from '../imports/ui/Home';
import App from '../imports/ui/app';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
require('../imports/client/styles/index.css');
import { Paint } from '../imports/api/Paint';
import { Appliances } from '../imports/api/Appliances';
import { Hardware } from '../imports/api/Hardware';
import { Flooring } from '../imports/api/Flooring';

const unauthenticatedPages = ['/signup', '/login'];
const authenticatedPages = [
	'/',
	'/paint',
	'/appliances',
	'/harware',
	'/flooring'
];

Meteor.startup(() => {
	Tracker.autorun(() => {
		let paint = Paint.find().fetch();
		let appliances = Appliances.find().fetch();
		let hardware = Hardware.find().fetch();
		let flooring = Flooring.find().fetch();
		ReactDOM.render(
			<App
				paint={paint}
				appliances={appliances}
				hardware={hardware}
				flooring={flooring}
			/>,
			document.getElementById('app')
		);
	});
});
