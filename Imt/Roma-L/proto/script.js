"use strict"

var ObjProto = {
	prop1: true,
	prop2: 123,
	toString: function() {
		var checkObj = "";
		for (var key in this) {
			if (key != "toString") {
				checkObj += key + " = " + this[key] + " "
				console.log(checkObj)
			}
			
			
		}
		return checkObj;
	}
}

function ClassA(name) {
	this.name = name;
	this.__proto__ = ObjProto;
}

ClassA.prototype = ObjProto;

var ObjA = new ClassA("Object A")

document.write(ObjA);


var ObjB = {
	__proto__: ObjA,
	prop3: "foo"
}


// alert(ObjB.toString())
// console.log(ObjB.prop2)