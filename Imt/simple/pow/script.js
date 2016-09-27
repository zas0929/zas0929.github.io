'use strict'

var enterSign = parseInt(prompt("ВВедите число")),
    enterStep = parseInt(prompt("ВВедите степень"));
while (enterSign == 0 || isNaN(enterSign) || enterSign < 0 || isNaN(enterStep)) {
    alert("Данные введены не верно");
    enterSign = parseInt(prompt("ВВедите число"));
    enterStep = parseInt(prompt("ВВедите степень"));
}
var powCount = 1;
for (var i = 0; i < enterStep; i++) {
  powCount = powCount * enterSign;
  console.log(powCount);
}
alert(powCount);
