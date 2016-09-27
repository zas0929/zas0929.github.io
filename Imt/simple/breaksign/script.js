'use strict'

var userSign = prompt("ВВедите число");

while (isNaN(userSign) || userSign == 0 || userSign == null) {
    alert("Данные введены не верно");
    userSign = prompt("ВВедите число")
  }

var userSignArr = userSign.split('');
alert(userSignArr);
console.log(userSignArr);

var userSignArrReverse = userSignArr.reverse();
alert(userSignArrReverse);
console.log(userSignArrReverse);
