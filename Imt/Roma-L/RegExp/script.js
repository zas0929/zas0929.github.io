'use strict'
// var str = '<div id="right"><span><div>1</div></span><span><div>2</div></span><span><div>3</div></span><span><div>4</div></span>';

// var test = '<div id="test">12<span>45</span>45</div>'
// alert(str.match(/<[/]{0,1}[a-z]{3,4}.*?>/g))

var phoneCheck = prompt("Enter phone");
var validatePhone = phoneCheck.match(/\+38\(0[0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/)
if(validatePhone == null) {
	alert('неверно введен номер');
}
else {
	alert('номер прошел проверку')
	alert(phoneCheck.match(/\+38\(0[0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/));

}