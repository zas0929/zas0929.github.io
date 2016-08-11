'use strict'

var userEnter = prompt("ВВедите ФИО");
    userEnter = userEnter.toLowerCase();
var userArr = userEnter.split(' ');

for(var i = 0; i < userArr.length; i++) {
    
var userArrItem = userArr[i].split('')
var userSign = userArrItem[0].toUpperCase();
		
        userArrItem.shift();
	userArrItem.unshift(userSign);
var correctName = userArrItem.join('');

userArr[i] = correctName;

       
}
var finalName = userArr.join(' ');
alert(finalName);

   

