import { Mongo } from 'meteor/mongo';

export const Hardware = new Mongo.Collection('hardware');

if (Meteor.isServer) {
	Meteor.publish('hardware', function() {
		return Hardware.find({ userId: this.userId });
	});
}
