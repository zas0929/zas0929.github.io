'use strict'
    ;(function() {
        

        function Validator(form) {
            this.form = $(form);
        };

        

        Validator.prototype.init = function(data) {
            var configure = data.configure,
                classes = data.classes,
                messages = data.messages;

            for (var inputField in configure) {

                console.log(inputField + ":" + configure[inputField]["rule"]);
                switch(configure[inputField]["rule"]) {
                    case "login" :
                    this.checkLogin(inputField) 

                    break;
                    case "passwd":

                    break;
                    case "tel":

                    break;
                    case "text":
                    break;
                }
            }
            
        }

        Validator.prototype.checkLogin = function(){}
        Validator.prototype.checkPasswd = function(){}
        Validator.prototype.checkEmail = function(){}
        Validator.prototype.checkTel = function(){}
        Validator.prototype.checkText = function(){}
        Validator.prototype.checkEmpty = function(){}
        Validator.prototype.checkLength = function(){}

        function make(form){
            var tmp = new Validator(form);
            return tmp;
        }

        window._ = make;

    })();



    _("#form").init({
        configure: {"[name=passwd]" : {rule: "passwd",
                                        maxLength: 12,
                                        minLength: 6},
                    ".login": {rule: "login"}
                },
        classes: {"error" : "errValid",
                  "success" : "sucValid"},
        messages: {errEmpty: "Поле не заполнено",
                    errLengthMax: "Слишком длинное значение",
                    errLengthMin: "Слишком короткое значение"
                }           
         
    });




