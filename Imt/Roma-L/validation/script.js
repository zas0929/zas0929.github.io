"use strict"

$(document).on('ready', function() {
	function validateField(elem, regExp, errorValidateText) {
			var checkVal = elem.val()
			var validateVal = checkVal.match(regExp);
			if (checkVal == '') {
				elem.addClass('error');
				elem.after('<span>Заполните поле<span>');
			}
			else if(validateVal == null) {
				elem.addClass('error');
				elem.next('span').remove();
				elem.after(errorValidateText);
			}
			else {
				elem.removeClass('error')
			}
	}
	function onFocus(elem) {
		elem.removeClass('error');
		elem.next('span').remove();
	}
//focus inputs
$('#wrapper').find('form').find('input').on('focus', function() {
	onFocus($(this))
})
//check login correct
$('#wrapper').find('form').find('input[name="login"]').on('blur', function() {
	validateField($(this), /^[a-zA-Z0-9_]{5,32}$/g, '<span>Логин должен содержать латинские символы или цифры и быть не короче 5 символов!</span>' )
});
//check passwd correct
$('#wrapper').find('form').find('input[name="passwd"]').on('blur', function() {
	validateField($(this), /^((?=.*\d)(?=.*[#$%@-])(?=.*[\S])(?=.*[a-z])(?=.*[A-Z]).{8,32})$/g, '<span>Слишком простой пароль (должен содержать минимум одну заглавную букву и содержать цифры и символы - #$%@-)</span>')
});
//check passwds identity
$('#wrapper').find('form').find('input[name="passwd2"]').on('blur', function() {
	if ($(this).val() !== $('input[name="passwd"]').val()) {
		$(this).addClass('error');
		$(this).after('<span>Пароли должны совпадать!<span>');
	}
	else {
		$(this).removeClass('error');
	}
});
//check name correct
$('#wrapper').find('form').find('input[name="name"]').on('blur', function() {
	validateField($(this), /^[\w]{2,64}$/g, '<span>Имя должно состоять из латинских букв или цифр, не короче 2 символов</span>')
});
//check email correct
$('#wrapper').find('form').find('input[name="email"]').on('blur', function() {
	validateField($(this), /[a-z0-9_]+@[a-z]{2,10}\.[a-z]{1,6}/, '<span>Некоррекнтный email</span>' )
});
//check phone
$('#wrapper').find('form').find('input[name="tel"]').on('blur', function() {
	validateField($(this), /\+38\(?0[0-9]{2}\)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}/, '<span>Неверно введен номер</span>' )
});

//validation on submit
$('#wrapper').find('form').on('submit', function(event) {
	validateField($('input[name=login]'), /^[a-zA-Z0-9_]{5,32}$/g, '<span>Логин должен содержать латинские символы или цифры и быть не короче 5 символов!</span>' )
	validateField($('input[name=passwd]'), /^((?=.*\d)(?=.*[#$%@-])(?=.*[\S])(?=.*[a-z])(?=.*[A-Z]).{8,32})$/g, '<span>Слишком простой пароль (должен содержать минимум одну заглавную букву и содержать цифры и символы - #$%@-)</span>')
	validateField($('input[name=name]'), /^[\w]{2,64}$/g, '<span>Имя должно состоять из латинских букв или цифр, не короче 2 символов</span>')
	validateField($('input[name=email]'), /[a-z0-9_]+@[a-z]{2,10}\.[a-z]{1,6}/, '<span>Некоррекнтный email</span>');
	validateField($('input[name="tel"]'), /\+38\(?0[0-9]{2}\)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}/, '<span>Неверно введен номер</span>' )

	if($('input[name=login]').hasClass('error') ||
		 $('input[name="passwd"]').hasClass('error') ||
	 	 $('input[name=name]').hasClass('error') ||
	 	 $('input[name=email]').hasClass('error') ||
		 $('input[name=tel]').hasClass('error')) {
		event.preventDefault();
	}
	if ($('input[name="passwd2"]').val() !== $('input[name="passwd"]').val()) {
		$('input[name="passwd2"]').addClass('error');
		$('input[name="passwd2"]').after('<span>Пароли должны совпадать!<span>');
		event.preventDefault();
	}
	else {
		$('input[name="passwd2"]').removeClass('error');
	}
});
});
























// var menuItem = $('.menu').children(),
//     menuCatalog = $('.menu').children().eq(1),
//     redBg = 'style="background: #c00"';



// menuItem.last().after('<li><a href="#"' + redBg + '>FAQ</a></li>');
// menuCatalog.children('ul').append('<li><a href="#"' + redBg + '>Спортивная одежда</a></li>');
// $('<ul><li><a href="#"' + redBg + '>Кеды</a></li></ul>').appendTo(menuCatalog.find('li').last());
// menuCatalog.find('li').last().before('<li><a href="#" ' + redBg + '>Кроссовки</a></li>');

// $('<li><a href="#" ' + redBg + '>Дубленки</a></li>').insertAfter(menuCatalog.find('ul').children().first().find('ul').children().first());
// menuCatalog.find('ul').children().eq(1).find('ul').children().last().after('<li><a href="#" ' + redBg + '>Бриджи</a></li>');
// menuCatalog.find('ul').children().eq(2).find('ul').prepend('<li><a href="#" ' + redBg + '>Бандана</a></li>');

// $('.menu').find('ul').eq(3).find('li').last().after('<li><a href="#">Бейсболки</a></li>')
// $('li').parent().css('background', '#c00');
// $('li').closest('#container').css('background', '#c00');





// "use strict"
// var randArray = ['apple', ['apple', 2,  'cherry', [3, 'apple', 'apple', 'apple']], 'orange', 2, 'onion', 'apple', 'apple'];


// function checkArray(array) {
//   var sumApple = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (typeof(array[i]) == 'object') {
//       sumApple += checkArray(array[i])
//     }
//     else if (array[i] == 'apple') {
//       sumApple += 1;
//     }

//   }
//   return sumApple;

// }
// console.log(Array.isArray(randArray[1]));

// console.log(checkArray(randArray));
// function addNode(elemTo, tagName, tagText) {
// 	if(tagText == undefined) {
// 		tagText = "";
// 	}
// 	var elem = document.createElement('tagName');
// 	var textElem = document.createTextNode('tagText');


// 	elemTo.appendChild(elem).appendChild(textElem);
// }

// addNode(document.getElementById('container'), '<span>', 'testing');
// var elem = document.createElement('p');
// var textElem = document.createTextNode('Text 2');
// var container = document.getElementById('container');

// container.appendChild(elem).appendChild(textElem);



// var elem = document.getElementById("container");

// var getText = elem.innerText;

// 	elem.innerHTML += "<p>Another text</p>";
// 	console.log(getText);

// var elems = document.querySelectorAll("#menu ul>li");
// // elems("#menu ul>li").style.color = "#f00";
// console.log(elems);
// for (var i = 0; i < elems.length; i++) {
// 	elems[i].style.color = "#f00";
// 	elems[i].style.fontSize = "20px";
// }



// document.body.children[0].children[0].style.color = "#f00";

// function myPow(number, degree) {
// 	if (degree === 1) {
// 		return number;
// 	}
// 	else {
// 		return number * myPow(number, degree-1);
// 	}
// }
// myPow(2, 4);

// function foo() {
// 	bar();
// }
// function bar() {
// 	alert("I`m bar");
// }
// foo();


// function getUserNames() {

// 	var arr = [prompt("fname"), prompt("lname"), prompt("sname")];
// }

// var arr = [1,2,3];
// getUserNames();

// alert(arr);
// function sayHello(userName="Guest") {
// 	alert(userName);
// }
// sayHello();



// function countStep(fsign, fstep) {
// 	var fres = 1;
// 	for(var i = 0; i < fstep; i++) {
// 		var fres = fres * fsign;
// 		console.log(fres);
// 	}
// 	alert(fres);
// }
// countStep(2, 8);




// var arr = [1, 4, 0, 5, 0, 6, 8];

// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] == 0) {
// 		arr.splice(i, 1);
// 		arr.push(-1);
// 	}
// }
// console.dir(arr);
// var str = "test String";

// var arr = str.split("");
// arr.reverse().join("");
// console.dir(arr);

// alert(str.split("").reverse().join());



// var arr = ["admin", "12345", "John", 20, true];

// arr.splice(1, 1, "1", "2", "3");
// console.log(arr);
// // var lastElem = arr.pop();



// var userSign = parseInt(prompt("Введите размер массива")),
// 	arr = [];

// 	for (var i = 0; i < userSign; i++) {
// 		var someSign = Math.random();
// 			someSign = someSign * 100 / 2;
// 			someSign = Math.round(someSign);

// 		arr[i] = someSign;

// 		if (i % 2) {
// 			document.write(arr[i] + '<br/>');
// 			console.dir(arr[i] + '<br/>')
// 		}


// 	}




// var arr = ["admin", "12345", "John"];

// var newPass = arr[1];
// 	arr[1] = "789";
// 	console.dir(arr);
// 	console.log(arr);

// for (var i = 0; i < arr.length; i++) {
// 	arr[i];
// 	console.log(arr[i]);
// }

// arr[arr.length] = 20;

// arr.length = 2;





// for (var min = 0; min < 5; min++) {
// 	for (var sec = 0; sec < 60; sec++) {
// 		console.log(min + " : " + sec);
// 	}

// }
// for (var i = 0, j = 6; i < 6; i++, j--) {
// 	console.log(i);
// 	console.log(j);
// }
// var i = 0;

// while(++i < 6){
// 	console.log(i);
// }

// var i = 0;
// while (i < 6) {
// 	i++;
// 	console.log("Пробежал " + i + " круг(ов)");
// }
// do {
// 	var foo = Number(prompt("Введите цифру"));

// }
// while (isNaN(foo) || foo == "");
