'use strict'

var now = new Date();
// alert(now.getFullYear() + ' ' + now.getHours());

var then = new Date(2016, 11, 31, 0, 0, 0);
var time = (then - now)/1000,
	days = parseInt(time/ 86400),
	hours = time%86400;


	alert(hours)

// $(document).ready(function() {
// 	var countTimer = parseInt($('#count').text()),
// 		startBtn = $('#start'),
// 		stopBtn = $('#stop');

// 		var intId = false;
// 		function startTimer() {
// 			intId = setInterval(function() {
// 				countTimer = countTimer + 1;
// 				$('#count').text(countTimer);
// 			}, 1000)
// 		}
// 		function stopTimer() {
// 			clearInterval(intId)
// 		}
// 		startBtn.on('click', function() {
// 			startTimer();
// 			console.log(intId);
// 		});

// 		stopBtn.on('click', function() {
// 			stopTimer();
// 		})



	
	
		
	
// });


// var intId, intId2, i = 0, j = 0;

// intId = setInterval(function() {
// 	console.log('hello');
// 	i++;
// 	if(i == 5) {
// 		clearInterval(intId)
// 	}
// }, 1000);

// intId2 = setInterval(function() {
// 	console.log('bue');
// 	j++;
// 	if(j == 5) {
// 		clearInterval(intId2)
// 	}
// }, 1000);

// var timerId = setTimeout(function() {
// 	alert();
// }, 1000);