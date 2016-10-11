'use strict'


var intId, intId2, i = 0, j = 0;

intId = setInterval(function() {
	console.log('hello');
	i++;
	if(i == 5) {
		clearInterval(intId)
	}
}, 1000);

intId2 = setInterval(function() {
	console.log('bue');
	j++;
	if(j == 5) {
		clearInterval(intId2)
	}
}, 1000);