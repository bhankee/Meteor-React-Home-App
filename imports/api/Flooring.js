import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Flooring = new Mongo.Collection('flooring');

if (Meteor.isServer) {
	Meteor.publish('flooring', function() {
		return Flooring.find({ userId: this.userId });
	});
}
