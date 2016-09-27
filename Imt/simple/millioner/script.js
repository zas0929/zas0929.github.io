"use strict"
var ask1 = prompt("ВВедите цифру 1")
var userCount = 0;
if (ask1 == "1") {
  userCount += 5;
  alert("Вы ответили верно, ваш счет: " + userCount);
  var ask2 = prompt("Введите цифру 2");
  if (ask2 == "2") {
    userCount += 5;
    alert("Вы ответили верно, ваш счет" + userCount);
    var ask3 = prompt("Введите цифру 3");
    if (ask3 == "3") {
      userCount += 5;
      alert("Вы ответили верно, ваш счет" + userCount);
      var ask4 = prompt("Введите цифру 4");
      if (ask4 == "4") {
        userCount += 5;
        alert("Вы ответили верно, ваш счет" + userCount);
        alert("Победа! Вы миллионер!)")
      }
      else {
        userCount -= 10;
        alert("Вы проиграли, ваш счет " + userCount);
      }
    }
    else {
      userCount -= 10;
      alert("Вы проиграли, ваш счет " + userCount);
    }

  }
  else {
    userCount -= 10;
    alert("Вы проиграли, ваш счет " + userCount);
  }
}
else {
  alert("Вы проиграли")
}
