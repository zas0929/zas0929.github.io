"use strict"

var userSign = parseInt(prompt("Введите число"));

if (userSign % 3 == 0) {
  alert("Ваше число кратно 3");
  if (userSign % 5 == 0) {
    alert("Ваше число кратно 5");
    if (userSign % 7 == 0) {
      alert("Ваше число кратно 7")
    }
  }

}
else if (userSign % 5 == 0) {
  alert("Ваше число кратно 5");
  if (userSign % 3 == 0) {
    alert("Ваше число кратно 3");
    if (userSign % 7 == 0) {
      alert("Ваше число кратно 7")
    }
  }

}
else if (userSign % 7 == 0) {
  alert("Ваше число кратно 7");
  if (userSign % 3 == 0) {
    alert("Ваше число кратно 3");
    if (userSign % 5 == 0) {
      alert("Ваше число кратно 5")
    }
  }

}


else {
  alert("Ваш число не кратно ни 3, ни, 5 ни 7");
}
