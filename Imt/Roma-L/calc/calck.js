$(document).ready(function() {

	$("#right").find('div').each(function(i) {
		$(this).attr('data-pos', i);
	})

	$('#right').on('click', 'div', function(event) {
		event.stopPropagation();
		$(this).fadeOut(0, function() {
			$(this).appendTo($('#left'));
		});
		$(this).fadeIn(200);

	});
	$('#left').on('click', 'div', function(event) {
		
		var indexItem = $(this).attr('data-pos');

		if ($("right").find("span").eq(indexItem)) {
			$(this).fadeOut(0, function() {

			$(this).appendTo($('#right').children('span').eq(indexItem));

			});
			$(this).fadeIn(0);
		}
	})
	// $('ul').on('click', 'li',  function() {
	// 	// $(this).css('color', '#c00');
	// 	alert($(this).data("weight"))
	// });

	// $('button').on('click', function() {
	// 	var lengthElemens = $('ul').children('li').length;
	// 	$('ul').append('<li>Пункт ' + (lengthElemens + 1) + '</li>');
	// });


});

