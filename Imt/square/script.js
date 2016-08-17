'use strict'
var userFigure = prompt("Введите тип фигуры (треугольник, прямоугольник)");
if (userFigure == "треугольник") {
  var triangleWidth = parseFloat(prompt("Введите ширину основания треугольника"));
  var triangleHeight = parseFloat(prompt("Введите высоту треугольника"));

  var triangleSquare = triangleHeight * triangleWidth / 2;
  alert("Площадь треугольника = " + triangleSquare);
}
else if (userFigure == "прямоугольник") {
  var rectangleWidth = parseFloat(prompt("Введите ширину прямоугольника"));
  var rectangleHeight = parseFloat(prompt("Введите высоту прямоугольника"));

  var rectangleSquare = rectangleHeight * rectangleWidth;
  alert("Площадь прямоугольника = " + rectangleSquare);
}
else {
  alert("Неверный ввод")
}
