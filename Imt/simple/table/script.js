'use strict'

var trS = parseInt(prompt("Введите число tr")),
    tdS = parseInt(prompt("Введите число td"));


document.write('<table border="2" style="border-collapse: collapse">');

for (var i = 1; i <= trS; i++) {
  document.write('<tr>');
  for (var j = 1; j <= tdS; j++) {
    if (i > 3 && i < trS - 3) {
      document.write('<td style="width: 30px; height: 30px">' + '</td>');
    }
    else if (j > 3 && j < tdS - 3) {
      document.write('<td style="width: 30px; height: 30px; background: #ccc">' + '</td>');
    }

    else {
      document.write('<td style="width: 30px; height: 30px">' + '</td>');
    }
  }

  document.write('</tr>');
}


document.write("</table>");
