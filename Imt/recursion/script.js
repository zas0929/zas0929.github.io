"use strict"
var randArray = [['apple', 2, "cherry", [3, "apple"]], "orange", 2, "onion", 'apple', 'apple'];

function checkArray(array) {
  var sumApple = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == 'apple') {
      sumApple += 1;
      console.log(sumApple);
      // return checkArray(array);
    }
    else if (array[i][0]) {
      console.log((array[i][0]));
    }
    else {
      return;
    }
  }

}

checkArray(randArray);
