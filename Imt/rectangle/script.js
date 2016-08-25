'use strict'
var trS = parseInt(prompt("Введите ширину таблицы")),
    tdS = parseInt(prompt("Введите высоту таблицы")),
    widthUser = parseInt(prompt("Введите ширину квадрата")),
    heightUser = parseInt(prompt("Введите высоту квадрата"));


document.write('<table border="2" style="border-collapse: collapse">');

for (var i = 1; i <= trS; i++) {
  document.write('<tr>');
if (i == widthUser) {
  document.write('<tr style="background: #ccc">');
}
  for (var j = 1; j <= tdS; j++) {
    document.write('<td style="width: 30px; height: 30px; text-align: center">' + '</td>');
    if (j == heightUser) {
      document.write('<td style="width: 30px; height: 30px; text-align: center; background: #ccc">' + '</td>');
    }
  }

  document.write('</tr>');
}


document.write("</table>");
