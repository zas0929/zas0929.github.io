'use strict'
$(document).ready(function() {
    ;(function() {
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


        function Validator(form) {
            this.form = $(form);
        }

        $('body').find('form').find('input').on('focus', function() {
            onFocus($(this))
        });

        // Validator.prototype.init = function(configure, class, message) {
        //     if (message === undefined) {
        //         message = {};
        //     }
        // }

        Validator.prototype.checkLogin = function(){
            $('body').find('form').find('input[name="login"]').on('blur', function() {
                validateField($(this), /^[a-zA-Z0-9_]{5,32}$/g, '<span>Логин должен содержать латинские символы или цифры и быть не короче 5 символов!</span>' )

            });


        }
        Validator.prototype.checkPasswd = function(){

        }
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

    _(".login").checkLogin();
})



