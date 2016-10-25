"use strict";
(function() {

  function checkLengthValues(confLength) {
    var result = true;
    for (var rule in confLength) {
      switch (rule) {
        case "default":
          if (confLength.default[0] < 0 || confLength.default[1] < 0 || confLength.default[0] > confLength.default[1] ||
            typeof confLength.default[0] == 'string' || typeof confLength.default[1] == 'string') {
            console.log("Wrong length value of " + rule);
            result = false;
          }
          break;
        case "login":
          if (confLength.login[0] < 0 || confLength.login[1] < 0 || confLength.login[0] > confLength.login[1] ||
            typeof confLength.login[0] == 'string' || typeof confLength.login[1] == 'string') {
            console.log("Wrong length value of " + rule);
            result = false;
          }
          break;
        case "passwd":
          if (confLength.passwd[0] < 0 || confLength.passwd[1] < 0 || confLength.passwd[0] > confLength.passwd[1] ||
            typeof confLength.passwd[0] == 'string' || typeof confLength.passwd[1] == 'string') {
            console.log("Wrong length value of " + rule)
          }
          break;
          // case "tel":
          // 	(confLength.tel[0] < 0 || confLength.tel[1] < 0 ) ?
          // 	console.log("Wrong length value of " + rule) :

          // 	break;
          // case "email":
          // 	(confLength.email[0] < 0 || confLength.email[1] < 0 ) ?
          // 	console.log("Wrong length value of " + rule) :

          // 	break;
          // case "text":
          // 	(confLength.text[0] < 0 || confLength.text[1] < 0 ) ?
          // 	console.log("Wrong length value of " + rule);
          // 	break;
      }
    }
    if (result) {
      return true;
    }
    return false;
  }

  var self;

  function Validator(form) {
    this.form = $(form);
    self = this;
    this.min = 6;
    this.max = 25;
    this.configure = undefined;

    // Сообщения по-умолчанию
    this.errEmpty = "Поле не заполнено";
    this.errLengthMax = "Длинна поля больше максимальной";
    this.errLengthMin = "Длинна поля меньше минимальной";
    this.errLogin = "Ошибка логина";
    this.errPasswd = "Ошибка пароля";
    this.errEmail = "Ошибка email";
    this.errTel = "Ошибка телефона";
    this.errText = "Ошибка текста";

    // классы по умолчанию
    this.errorClass = "errValid";
    this.successClass = "sucValid";
  }

  Validator.prototype.init = function(data) {
    this.configure = data.configure;

    var classes = data.classes,
      messages = data.messages,
      confLength = data.confLength;

    if (checkLengthValues(confLength)) {
      for (var rule in confLength) {
        switch (rule) {
          case "default":
            this.min = confLength.default[0];
            this.max = confLength.default[1];
            break;
          case "login":
            this.minLoginLength = confLength.login[0];
            this.maxLoginLength = confLength.login[1];
            break;
          case "passwd":
            this.minPassLength = confLength.passwd[0];
            this.maxPassLength = confLength.passwd[1];
            break;
          case "tel":
            this.minTelLength = confLength.tel[0];
            this.maxTelLength = confLength.tel[1];
            break;
          case "email":
            this.minEmailLength = confLength.email[0];
            this.maxEmailLength = confLength.email[1];
            break;
          case "text":
            this.minTextLength = confLength.text[0];
            this.maxTextLength = confLength.text[1];
            break;
          default:
            console.log("Wrong type of length");
            return;
            break;
        }
      }
    }

    for (var rule in this.configure) {
      switch (rule) {
        case "login":
        console.log(rule);
          $(this.configure.login).on("blur", function() {
            self.checkLogin($(this));
            console.log(rule);
          });

          break;
        case "passwd":

          break;
        case "tel":
          break;
        case "email":

          break;
        case "text":

          break;
        default:
          console.log("Wrong type of validation");
          return;
          break;
      }
    }

    this.form.on("submit", function(event) {
      var result = true;
      for (var rule in self.configure) {
        switch (rule) {
          case "login":
            if (!self.checkLogin($(self.configure.login))) {
              result = false;
            }
            break;
          case "passwd":

            break;
          case "tel":

            break;
          case "email":

            break;
          case "text":

            break;
        }
      }
      if (!result) {
        event.preventDefault();
      }
    })
  }

  Validator.prototype.checkLogin = function(elem) {

      if (self.checkEmpty(elem)) {

        return true;
      }

      return false;

    } // login
  Validator.prototype.checkPasswd = function() {} // passwd
  Validator.prototype.checkEmail = function() {} // email
  Validator.prototype.checkTel = function() {} //tel
  Validator.prototype.checkText = function() {} // text

  Validator.prototype.checkEmpty = function(elem) {

    if (elem.val() === "") {
      elem.addClass(self.errorClass);
      return false;
    }
    return true;
  }
  Validator.prototype.checkLength = function() {}

  function make(form) {
    var tmp = new Validator(form);
    return tmp;
  }

  window._ = make;

})();
