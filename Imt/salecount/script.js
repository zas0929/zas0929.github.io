'use strict'

var totalGoods = parseFloat(prompt("Введите количество товаров"));
var priceGoods = parseFloat(prompt("Введите цену за один товар"));

while (isNaN(totalGoods) || isNaN(priceGoods) || priceGoods == 0 || totalGoods == 0) {
  if (priceGoods == 0) {
    alert("Хитрый, да? А ну введи сумму больше 0!");
    totalGoods = parseFloat(prompt("Введите количество товаров"));
    priceGoods = parseFloat(prompt("Введите цену за один товар"));
  }
  else {
    alert("Хотел украсть? А ну введи правильно!")
    totalGoods = parseFloat(prompt("Введите количество товаров"));
    priceGoods = parseFloat(prompt("Введите цену за один товар"));
  }


}

   var totalGoodsCount = totalGoods * priceGoods;
   //округляем итог
   var totalGoodsCount = totalGoodsCount.toFixed(2);
   //проверяем дробную часть
   var checkNum = totalGoods * 10 % 10;
  if (checkNum != 0) {
     alert("Количество товара не можте быть дробным числом")
   }

  else if (totalGoodsCount >= 300) {
    var userPrice = totalGoodsCount - totalGoodsCount * 0.07;
        userPrice = userPrice.toFixed(2);
    alert("Общая сумма на товары = " + totalGoodsCount + "$, ваша скидка - 7%, итоговая сумма: " + userPrice + "$");
  }
  else if (totalGoodsCount >= 200) {
    var userPrice = totalGoodsCount - totalGoodsCount * 0.05;
        userPrice = userPrice.toFixed(2);
    alert("Общая сумма на товары = " + totalGoodsCount + "$, ваша скидка - 5%, итоговая сумма: " + userPrice + "$");
  }
  else if (totalGoodsCount >= 100) {
    var userPrice = totalGoodsCount - totalGoodsCount * 0.03;
        userPrice = userPrice.toFixed(2);
    alert("Общая сумма на товары = " + totalGoodsCount + "$, ваша скидка - 3%, итоговая сумма: " + userPrice + "$");
  }
  else if (totalGoodsCount < 100) {
    alert("Общая сумма на товары = " + totalGoodsCount + "$, скидки нет");

  }
  else if (totalGoods < 0) {
    alert("Количество товаров не может быть отрицательным")
  }

  else {
    alert("Некорректный ввод")
  }
