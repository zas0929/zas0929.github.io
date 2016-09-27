"use strict"
var randArray = ['apple', ['apple', 2,  'cherry', [3, 'apple', 'apple', 'apple']], 'orange', 2, 'onion', 'apple', 'apple'];


function checkArray(array) {
  var sumApple = 0;
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i]) == 'object') {
      checkArray(array[i]);
    }
    else if (array[i] == 'apple') {
      sumApple += 1;
    }

  }
  console.log('количество яблок: ' + sumApple);

}

checkArray(randArray);
