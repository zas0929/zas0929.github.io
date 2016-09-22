$(document).on("ready", function(){
	var price = parseInt($('.price-result').text()),
		weight = parseInt($('.weight-result').text());


	// droping from right to left
	$("#right").find('.ingredient').each(function(i) {
		$(this).attr('data-pos', i);
		
	})

	$('#right').on('click', '.ingredient', function(event) {
		event.stopPropagation();
		$(this).fadeOut(0, function() {
			$(this).appendTo($('#left'));
		});
		$(this).fadeIn(200);
		var priceItem = $(this).find('.price-ingredient').data('price');
		var weightItem = $(this).find('.weight-ingredient').data('weight');
		console.log(weightItem, priceItem);

		price += priceItem;
		weight += weightItem;

		$('.price-result').text(price);
		$('.weight-result').text(weight);

	});
	$('#left').on('click', '.remove-ingredient', function(event) {
		var countIngredient = Number($(this).find('.count-ingredient').text());
		var indexItem = $(this).parent('.ingredient').attr('data-pos');
		var priceItem = $(this).siblings('.price-ingredient').data('price');
		var weightItem = $(this).siblings('.weight-ingredient').data('weight');

		

		if ($('.count-ingredient').text() > 0) {
			countIngredient--;
			console.log(countIngredient);
			$('.count-ingredient').text(countIngredient);
			$(this).parent('.ingredient').fadeIn(0);
				price -= priceItem;
				weight -= weightItem;

			$('.price-result').text(price);
			$('.weight-result').text(weight);

		}
		else {
			$(this).parent('.ingredient').fadeOut(0, function() {

			$(this).appendTo($('#right').children('div').eq(indexItem));

			});
			$(this).parent('.ingredient').fadeIn(0);
				price -= priceItem;
				weight -= weightItem;

			$('.price-result').text(price);
			$('.weight-result').text(weight);
		}


	})
	$('#left').on('click', '.ingredient', function(event) {
		var countIngredient = Number($(this).find('.count-ingredient').text());
			countIngredient++;

			$(this).find('.count-ingredient').fadeIn(100).text(countIngredient);

			var priceItem = $(this).find('.price-ingredient').data('price');
			var weightItem = $(this).find('.weight-ingredient').data('weight');

			price += priceItem;
			weight += weightItem;

			$('.price-result').text(price);
			$('.weight-result').text(weight);
	});


})
