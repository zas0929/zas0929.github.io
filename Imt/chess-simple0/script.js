"use strict"

var userFigure = prompt("Выберите фигуру соперника (Офицер, Конь, Ладья, Ферзь)");


//для офицера
if (userFigure == "Офицер") {
  var enemyX = Number(prompt("Введите координату фигуры соперника по оси Х (от 1 до 8)"));
  var enemyY = Number(prompt("Введите координату фигуры соперника по оси Y (от 1 до 8)"));

  var userX = Number(prompt("Введите координату вашей фигуры по оси Х (от 1 до 8)"));
  var userY = Number(prompt("Введите координату вашей фигуры по оси Y (от 1 до 8)"));
  if ((enemyX + enemyY == userX + userY) || (enemyX - enemyY == userX - userY)) {
    alert("Вам МАТ!");
  }
  else {
    alert("Вы выиграли!");
  }
}
//для коня
else if (userFigure == "Конь") {
  var enemyX = Number(prompt("Введите координату фигуры соперника по оси Х (от 1 до 8)"));
  var enemyY = Number(prompt("Введите координату фигуры соперника по оси Y (от 1 до 8)"));

  var userX = Number(prompt("Введите координату вашей фигуры по оси Х (от 1 до 8)"));
  var userY = Number(prompt("Введите координату вашей фигуры по оси Y (от 1 до 8)"));
  if ((enemyX + enemyY == userX + userY) || (enemyX - enemyY == userX - userY)) {
    alert("Вы выиграли!");
  }
  else if((userX - enemyX <= 2 && userX - enemyX >= -2) && (userY - enemyY <= 2 && userY - enemyY >= -2)) {
    alert("Вам МАТ!");
  }
  else {
    alert("Вы выиграли!");
  }
}
//для ладьи
else if (userFigure == "Ладья") {
  var enemyX = Number(prompt("Введите координату фигуры соперника по оси Х (от 1 до 8)"));
  var enemyY = Number(prompt("Введите координату фигуры соперника по оси Y (от 1 до 8)"));

  var userX = Number(prompt("Введите координату вашей фигуры по оси Х (от 1 до 8)"));
  var userY = Number(prompt("Введите координату вашей фигуры по оси Y (от 1 до 8)"));
  if ((enemyX == userX) || (enemyY == userY)) {
    alert("Вам МАТ!");
  }
  else {
    alert("Вы выиграли!");
  }
}
//для ферзя
else if (userFigure == "Ферзь") {
  var enemyX = Number(prompt("Введите координату фигуры соперника по оси Х (от 1 до 8)"));
  var enemyY = Number(prompt("Введите координату фигуры соперника по оси Y (от 1 до 8)"));

  var userX = Number(prompt("Введите координату вашей фигуры по оси Х (от 1 до 8)"));
  var userY = Number(prompt("Введите координату вашей фигуры по оси Y (от 1 до 8)"));
  if ((enemyX == userX) || (enemyY == userY) || (enemyX + enemyY == userX + userY) || (enemyX - enemyY == userX - userY)) {
    alert("Вам МАТ!");
  }
  else {
    alert("Вы выиграли!");
  }
}
else if (userFigure == "") {
  alert("Заполните поле фигуры")
}
else {
  alert("Фигура выбрана не верно!")
}
