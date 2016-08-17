'use strict'
var firstSign = parseInt(prompt("Введите первое число")),
    secondSign = parseInt(prompt("Введите второе число"));

if (firstSign < secondSign) {
  alert("Певрое число " + firstSign + " меньше чем " + secondSign)
}

else if (firstSign > secondSign) {
  alert("Второе число " + secondSign + " меньше чем " + firstSign)
}
else {
  alert("Некорректный ввод")
}
