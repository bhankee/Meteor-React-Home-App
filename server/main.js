import { Meteor } from 'meteor/meteor';
import { Paint } from '../imports/api/Paint';

Meteor.startup(function() {
	class PaintColor {
		constructor(brand, color, sheen, room) {
			this.brand = brand;
			this.color = color;
			this.sheen = sheen;
			this.room = room;
		}
	}
});
