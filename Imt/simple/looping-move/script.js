'use strict'

var enterSign = parseInt(prompt("ВВедите число"));
while (enterSign == 0 || isNaN(enterSign) || enterSign < 0) {
    alert("Данные введены не верно");
    enterSign = parseInt(prompt("ВВедите число"));
}
var facCount = 1;
for (var i = 1; i <= enterSign; i++) {
  facCount = facCount * i;
  console.log(facCount);
}
alert("Факториал числа " + enterSign + " = " + facCount)
