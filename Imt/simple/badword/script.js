'use strict'


var someText = prompt("Введите текст со словом \"буй\"");
var someTextArr = someText.split(' ');
	
for(var i = 0; i < someTextArr.length; i++) {
	/*if(someTextArr[i] == "буй") {
		var bigWord = someTextArr[i].toUpperCase();
	
		alert("Вы ввели плохое слово: " + bigWord);
	}
	*/
	switch (someTextArr[i]) {

	case "буй":
	 var bigWord = someTextArr[i].toUpperCase();
	 alert("Вы ввели плохое слово: " + bigWord);
	break;	

	case "ука":
	 var bigWord = someTextArr[i].toUpperCase();
	 alert("Вы ввели плохое слово: " + bigWord);
	break;

	
}	


	
}
