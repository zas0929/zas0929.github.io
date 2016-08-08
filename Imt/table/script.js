'use strict'

var trS = parseInt(prompt("Введите число tr")),
    tdS = parseInt(prompt("Введите число td"));


document.write('<table border="2" style="border-collapse: collapse">');

for (var i = 1; i <= trS; i++) {
  document.write('<tr>');
  if (i % 2 == 1) {
    document.write('<tr style="background: #ccc">');
  }

  for (var j = 1; j <= tdS; j++) {
    document.write('<td style="width: 30px; text-align: center">' + j * i + '</td>');
  }

  document.write('</tr>');
}


document.write("</table>");
