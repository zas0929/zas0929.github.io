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
<<<<<<< HEAD

=======
});
>>>>>>> c9db792bb18d725b2d3230e74ba7c65cd27e6d36
});
});