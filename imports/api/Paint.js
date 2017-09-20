import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Paint = new Mongo.Collection('paint');

if (Meteor.isServer) {
	Meteor.publish('paint', function() {
		return Paint.find({ userId: this.userId });
	});
}
