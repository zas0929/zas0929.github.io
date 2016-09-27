"use strict"

var enterSex = prompt("Введите ваш пол (мужчина, женщина)");
var enterAge = parseInt(prompt("Введите ваш возраст"));
if (enterAge > 100) {
  alert("Вы слишком долго живете!!")
}
else if (enterSex == "" || enterAge == "") {
  alert("Некорректно введены значения!")
}
else if(enterSex == "мужчина" && enterAge > 65) {
  alert("Вам пора на пенсию")
}
else if(enterSex == "женщина" && enterAge > 55) {
  alert("Вам пора на пенсию")
}
else {
  alert("Еще надо поработать)")
}
