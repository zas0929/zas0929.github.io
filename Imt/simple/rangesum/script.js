'use strict'
var startRange = parseInt(prompt("ВВедите начало диапазона")),
    finishRange = parseInt(prompt("ВВедите конец диапазона"));
while (finishRange < startRange || isNaN(startRange) || isNaN(finishRange)) {
    alert("Данные введены не верно");
    startRange = parseInt(prompt("ВВедите начало диапазона"));
    finishRange = parseInt(prompt("ВВедите конец диапазона"));
}
var mainRange = [];
for (var i = startRange; i <= finishRange; i++) {
  mainRange.push(i);

}

var sumMainRangeItems = startRange;
for (var i = 0; i < mainRange.length; i++) {
  sumMainRangeItems += mainRange[i];

}
sumMainRangeItems = sumMainRangeItems - startRange

  console.log(mainRange);
  console.log(sumMainRangeItems);
  alert("Сумма диапазона заданных чисел " + sumMainRangeItems);
