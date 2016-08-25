'use strict'

var userSign = prompt("ВВедите число");

while (isNaN(userSign) || userSign == 0 || userSign == null) {
    alert("Данные введены не верно");
    userSign = prompt("ВВедите число")
  }

var userSignArr = userSign.split('');
var userSignArrReverse = userSignArr.reverse();
var userSignNew = userSignArrReverse.join('');
alert(userSignNew);
console.log(userSignNew);
