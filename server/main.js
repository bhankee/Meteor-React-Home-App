import { Meteor } from 'meteor/meteor';
import { Paint } from '../imports/api/Paint';
import { Appliances } from '../imports/api/Appliances';
import { Hardware } from '../imports/api/Hardware';
import { Flooring } from '../imports/api/Flooring';

Meteor.startup(function() {
	class PaintColor {
		constructor(brand, color, sheen, room) {
			this.brand = brand;
			this.color = color;
			this.sheen = sheen;
			this.room = room;
		}
	}
	class MyAppliances {
		constructor(brand, descripton, model, room) {
			this.brand = brand;
			this.descripton = descripton;
			this.model = model;
			this.room = room;
		}
	}
	class MyHardware {
		constructor(brand, descripton, model, room) {
			this.brand = brand;
			this.descripton = descripton;
			this.model = model;
			this.room = room;
		}
	}
	class MyFlooring {
		constructor(brand, descripton, model, room) {
			this.brand = brand;
			this.descripton = descripton;
			this.model = model;
			this.room = room;
		}
	}
});
