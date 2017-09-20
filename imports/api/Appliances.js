import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Appliances = new Mongo.Collection('appliance');

if (Meteor.isServer) {
	Meteor.publish('appliance', function() {
		return Appliances.find({ userId: this.userId });
	});
}
