'use strict'
//простые числа
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199

var startRange = parseInt(prompt("ВВедите начало диапазона")),
    finishRange = parseInt(prompt("ВВедите конец диапазона"));
while (finishRange < startRange || isNaN(startRange) || isNaN(finishRange)) {
    alert("Данные введены не верно");
    startRange = parseInt(prompt("ВВедите начало диапазона"));
    finishRange = parseInt(prompt("ВВедите конец диапазона"));
}
var mainRange = [];
for (var i = startRange; i < finishRange; i++) {
  for (var j = startRange; j < i; j++) {
    if (i % j == 0) {
      mainRange.push(i);
    }
  }
}
    //  for (var i = 2; i < 10; i++) {
     //
    //    for (var j = 2; j < i; j++) {
    //      if (i % j == 0) {
    //        console.log(j);
    //      }
    //    }
     //
    //    alert( i ); // простое
    //  }


// for (var i = startRange; i <= finishRange; i++) {
// if (startRange < 10) {
//
// }
// if (i % i == 0 && i % 2 != 0 && i % 3 != 0 && i % 4 != 0 && i % 5 != 0 && i % 7 != 0 ) {
//     mainRange.push(i);
// }
//
//
// }


  console.log(mainRange);
