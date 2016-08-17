'use strict'
document.write("Четные числа <br>");
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
      document.write(i + "<br>");
  }

}
document.write("<br>Нечетные числа<br>");
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
   document.write(i + "<br>")
  }

}
document.write("<br>Не Кратные 3<br>");
for (var i = 1; i <= 20; i++) {
  if (i % 3 !== 0) {
   document.write(i + "<br>")
  }

}
