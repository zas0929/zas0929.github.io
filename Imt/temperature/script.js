'use strict'

var userTemperature = parseFloat(prompt("Какая у вас температура?"));

if (userTemperature >= 41) {
  alert("Поздравляем, вы труп!)")
}
else if (userTemperature <= 35) {
  alert("Поздравляем, вы уже давно труп!")
}
else if (userTemperature < 36.6 && userTemperature > 35) {
  alert("У вас упадок сил")
}
else if (userTemperature > 37 && userTemperature < 41) {
  alert("Вы заболели")
}
else if (userTemperature >= 36.6 && userTemperature <= 37){
  alert("Вы здоровы")
}
else {
  alert("Некорректный ввод")
}
