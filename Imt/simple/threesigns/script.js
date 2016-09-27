'use strict'
var firstSign = parseInt(prompt("Введите первое число")),
    secondSign = parseInt(prompt("Введите второе число")),
    thirdSign = parseInt(prompt("Введите третье число"));

var maxMin = prompt("Найти максимум или минимум");

if (maxMin == "максимум") {
  if(firstSign > secondSign && firstSign > thirdSign) {
    alert("Первое число " + firstSign + " больше всех" )
  }
  else if (secondSign > firstSign && secondSign > thirdSign) {
    alert("Второе число " + secondSign + " больше всех" )
  }
  else if (thirdSign > firstSign && thirdSign > secondSign)  {
    // if (thirdSign > firstSign && thirdSign > secondSign)
        alert("Третье число " + thirdSign + " больше всех" )
  }
  else {
    alert("Некорректный ввод")
  }

}
else if (maxMin == "минимум") {
  if (firstSign < secondSign && firstSign < thirdSign) {
    alert("Первое число " + firstSign + " меньше всех" )
  }
  else if (secondSign < firstSign && secondSign < thirdSign) {
    alert("Второе число " + secondSign + " меньше всех" )
  }
  else if (thirdSign < firstSign && thirdSign < secondSign) {
    alert("Третье число " + thirdSign + " меньше всех" )
  }
  else {
    alert("Некорректный ввод")
  }
}
else {
  alert("Неверный ввод")
}
