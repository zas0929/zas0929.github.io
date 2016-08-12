"use strict"

var selectOperation = prompt("Выберите знак (+,-,*,/)");
var firstSign = parseInt(prompt("Введите первый аргумент"));
var secondSign = parseInt(prompt("Введите второй аргумент"));
if (selectOperation == "+") {
  alert("Сумма чисел = " + (firstSign + secondSign));
}
else if (selectOperation == "-") {
  alert("Разность чисел = " + (firstSign - secondSign));
}
else if (selectOperation == "*") {
  alert("Произведение чисел = " + firstSign * secondSign);
}
else if (selectOperation == "/") {
  alert("Деление чисел = " + firstSign / secondSign);
}
else {
  alert("Данные введены неверно")
}
