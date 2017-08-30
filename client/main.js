import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from '../imports/ui/app';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
require('../imports/client/styles/index.css');
import { Paint } from '../imports/api/Paint';

Meteor.startup(() => {
	Tracker.autorun(() => {
		let paint = Paint.find().fetch();
		ReactDOM.render(<App paint={paint} />, document.getElementById('app'));
	});
});
