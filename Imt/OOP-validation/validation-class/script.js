'use strict';
$(document).ready(function(){
	_("#auth").init({

		configure:{"[name=passwd]":{rule:"passwd",
									maxLength:12,
									minLength:6
								   },
					".checkLog":{rule:"login"},
					},

		classes:{"error"  : "errValid",
				 "success": "sucValid"},

		messages:{errEmpty : "Поле не заполнено",
				  errLengthMax: "Длинна поля больше максимальной",
				  errLengthMin: "Длинна поля меньше минимальной",
				  errLogin : "Ошибка логина",
				  errPasswd : "Ошибка пароля",
				  errEmail : "Ошибка email",
				  errTel : "Ошибка телефона",
				  errText : "Ошибка текста",
				}
	});

function formSubmit(){
	alert();
}

$("#auth").on("submit", formSubmit);




})


