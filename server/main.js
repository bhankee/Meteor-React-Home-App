import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function() {
	class Person {
		constructor(name = 'Anonymous', age = 0) {
			this.name = name;
			this.age = age;
		}
		getGreeting() {
			return `Hi I am ${this.name}.`;
		}
		getPersonDescription() {
			return `${this.name} is ${this.age} year(s) old! `;
		}
	}

	class Employee extends Person {
		constructor(name, age, title) {
			super(name, age);
			this.title = title;
		}
		getGreeting() {
			if (this.title) {
				return `Hi I am ${this.name}.I work as a ${this.title}`;
			} else {
				return super.getGreeting();
			}
		}
		hasJob() {
			return !!this.title;
		}
	}

	class Programmer extends Person {
		constructor(name, age, lang = 'Assembly') {
			super(name, age);
			this.lang = lang;
		}
		getGreeting() {
			return `Hi I am ${this.name} and I am a ${this.lang} developer!`;
		}
	}

	let me = new Programmer('Brad', 25, 'React');

	console.log(me.getPersonDescription());
	console.log(me.getGreeting());
});
