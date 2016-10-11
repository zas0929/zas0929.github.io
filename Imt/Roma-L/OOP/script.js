"use strict"
//Класс
function Mechanism(power, waterCapacity) {
	this.power = power;
	this.waterCapacity = waterCapacity;
	var enabled = false;

	var showstate = function() {
		if (enabled) {
			console.log("Mechanism enabled");
		}
		else {
			console.log("Mechanism disabled");
		}
	}
	this.enable = function() {
		enabled = true;
		showstate();
		return this;
	}
	this.disable = function() {
		enabled = false;
		showstate();
		return this;
	}

}

function CoffeMachine(power, waterCapacity, coffeCapacity) {
	Mechanism.apply(this, arguments);

	// this.getBoilTime = function() {
	// 	if(this.enabled) {
	// 		return this.power;
	// 	}
	// }
	var parentEnable = this.enable;
	var parentDisable = this.disable;
	this.enable = function() {
		parentEnable.call(this);
		alert("enabled");
		return this;
	}
	this.disable = function() {
		parentDisable.apply(this, arguments);
		alert("disabled");
		return this;
	}
}
var suzuki = new CoffeMachine(2500, 2000);

suzuki.enable().disable();




function CoffeMachineMusic(power, waterCapacity, coffeCapacity, someMusic) {
	Mechanism.apply(this, arguments);
	
	this.someMusic = someMusic;
	var parentEnableMusic = this.enable;
	this.enable = function() {
		parentEnableMusic.call(this);
		console.log('Music playing');
		console.log(this.someMusic);
		return this;
	}
}
var toyota = new CoffeMachineMusic(1500, 100, 5, "nice song");
toyota.enable();



// function CoffeMachine() {
// 	this.power = power;
// 	this.capacity = capacity;
// 	this.coffeCapacity = coffeCapacity; 
// }





// function Kettle(capacity, color, power) {
// 	this.capacity = capacity;
// 	this.color = color;
// 	this.power = power;
// 	this.boilTime = function() {
// 		return this.power / this.capacity;
// 	}
// }

// var kettle = new Kettle(2, 'black', 1500);

// console.log(kettle.boilTime());







// var kettle = {
// 	color    : "white",
// 	capacity : 2,
// 	power    : 2000,
// 	boilTime : function(){
// 			return kettle.power / kettle.capacity;
// 	}
	
// };
// alert(kettle.boilTime());
// // доступ к св-ву об
// // alert(kettle.color);
// // alert(kettle['color']);
// for (var key in kettle) {
// 	console.log(kettle[key]);
// }