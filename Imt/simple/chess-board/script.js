'use strict'
//
var tableSize = parseInt(prompt('Введите размер ячейки таблицы (от 1 до 10)'));
while (tableSize > 10 || tableSize <= 0 || isNaN(tableSize)) {
  alert('Некорректный ввод');
  tableSize = parseInt(prompt('Введите размер ячейки таблицы (от 1 до 10)'));
}


document.write('<table  border="2" style="border-collapse: collapse;">');

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if(i % 2 == 0) {
        if (j % 2 !== 0) {
          document.write('<td style="width:' + 30 * tableSize + 'px; height:' + 30 * tableSize + 'px; background: #ccc"></td>')
        }
        else {
          document.write('<td style="width:' + 30 * tableSize + 'px; height:' + 30 * tableSize + 'px; background: #fff"></td>')
        }
      }
      else {
        if (j % 2 == 0) {
          document.write('<td style="width:' + 30 * tableSize + 'px; height:' + 30 * tableSize + 'px; background: #ccc"></td>')
        }
        else {
          document.write('<td style="width:' + 30 * tableSize + 'px; height:' + 30 * tableSize + 'px; background: #fff"></td>')
        }
      }




    }
  document.write('</tr>')
}

document.write('</table>');
