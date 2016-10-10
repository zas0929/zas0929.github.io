'use strict'

var myAuto = {
	power: 200,
	engine: 2.5,
	transmission: 'mechanic',
	speed: 280,
	fuel: 12,
	typeBody: 'sedan',
	year: 2005,
	tank: 70,
	color: 'black',
	acceleration: 8,

	start: function() {
		console.log("engine started");
	},
	drive: function() {
		console.log('auto moving');
	},
	beep: function() {
		console.log('auto sad BEEEEEEEPPPP');
	},
	turnLights: function() {
		console.log('lights turned');
	},
	move50km: function() {
		var gasSpent = 12 / 100 * 50;
		console.log('You drive 50km and spent ' + gasSpent + ' liters');
		this.tank = this.tank - gasSpent;
	},
	checkTank: function() {
		var tankAmount = this.tank;
		console.log('You have ' + tankAmount + ' liters in your tank');
	},
	stopDrive: function() {
		console.log('Your car was stopped');
	}
	offEngine: function() {
		console.log('Engine turned off')
	}

}



myAuto.checkTank()
