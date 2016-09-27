'use strict'
function countPlus() {
	var res = enterFirstNumber + enterSecondNumber;
	console.log(res);
}
function countMinus() {
	var res = enterFirstNumber - enterSecondNumber;
	console.log(res);
}
function countMultiply() {
	var res = enterFirstNumber * enterSecondNumber;
	console.log(res);
}
function countDivide() {
	if (enterSecondNumber == 0) {
	 alert("На \"0\" делить нельзя")
	}
	else {
	 var res = enterFirstNumber / enterSecondNumber;
	}
	console.log(res);

}
function countPow() {
	var res = 1;
	for(var i = 0; i < enterSecondNumber; i++) {
	  res *= enterFirstNumber;
	}
	console.log(res);
}

	do {
	var enterFirstNumber = parseInt(prompt("Введите первое число")),
    enterSecondNumber = parseInt(prompt("Введите второе число")),
    enterSign = prompt("Введите знак (+,-,*,/,pow)");

    if(isNaN(enterFirstNumber) || isNaN(enterSecondNumber)) {
    	alert("Неверно введены числа")
    }
    else {

	    if (enterSign == "+") {
	    	countPlus();
	    }
	    else if (enterSign == "-") {
	    	countMinus();
	    }
	    else if (enterSign == "*") {
	    	countMultiply();
	    }
	    else if (enterSign == "/") {
	    	countDivide();
	    }
	    else if (enterSign == "pow") {
	    	countPow();
	    }
	    else {
	    	alert("Неверно введена операция")
	    }
		var calculateAgain = confirm("Еще считать будем?");
    }

}
while (calculateAgain);

