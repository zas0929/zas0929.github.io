"use strict"
;(function(){
	var self;

	function Validator(form){
		this.form = $(form);
		self = this;
	}

	Validator.prototype.init = function(data){

		var configure = data.configure,
			classes  = data.classes,
			messages = data.messages;
			  
		for (var inputField in configure) {

			console.log(inputField + ":" + configure[inputField]["rule"]);
			switch (configure[inputField]["rule"]){
				case "login":
					this.loginField = this.form.find(inputField);
					this.loginField.on("blur", this.checkLogin);
					break;
				case "passwd":

					break;
				case "email":

					break;
				case "tel":

					break;
				case "text":

					break;
			}
			
		}

		this.form.on("submit", function(){
			
		})

	}
	
	Validator.prototype.checkLogin = function(){

		if(!self.checkEmpty($(this))){
			return;
		}
		alert(" not empty");
		
	} // login
	Validator.prototype.checkPasswd = function(){} // passwd
	Validator.prototype.checkEmail = function(){} // email
	Validator.prototype.checkTel = function(){} //tel
	Validator.prototype.checkText = function(){} // text

	Validator.prototype.checkEmpty = function(field){
		
		if (field.val() === "") {
			
			return false;
		}
		return true;
	}
	Validator.prototype.checkLength = function(){}

	function make(form){
		var tmp = new Validator(form);
		return tmp;
	}

	window._ = make;

	
})();