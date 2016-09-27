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
		var ingredientName = $(this).find('img').attr('src');
		ingredientBigName = ingredientName.split('');

		ingredientBigName = ingredientBigName.splice(4, ingredientBigName.length-1);
		ingredientBigName = ingredientBigName.join('');
		ingredientBigName = 'img/bg-' + ingredientBigName;

		console.log(ingredientBigName);
		$('.pizza-img').append('<img src="' + ingredientBigName + '" alt="img" >');
		var priceItem = $(this).find('.price-ingredient').data('price');
		var weightItem = $(this).find('.weight-ingredient').data('weight');
		console.log(weightItem, priceItem);

		price += priceItem;
		weight += weightItem;

		$('.price-result').text(price);
		$('.weight-result').text(weight);

	});


	$('#left').on('click', '.remove-ingredient', function(event) {
		event.stopPropagation();
		var countIngredient = Number($(this).siblings('.count-ingredient').data('count'));
		var indexItem = $(this).parent('.ingredient').attr('data-pos');
		var priceItem = $(this).siblings('.price-ingredient').data('price');
		var weightItem = $(this).siblings('.weight-ingredient').data('weight');

		countIngredient--;
		$(this).siblings('.count-ingredient').data('count', countIngredient)
		if (countIngredient == 1) {
			$(this).siblings('.count-ingredient').hide();
			$(this).parent('.ingredient').fadeIn(0);
				price -= priceItem;
				weight -= weightItem;

			$('.price-result').text(price);
			$('.weight-result').text(weight);
		}
		else if (countIngredient >= 1) {
			console.log(countIngredient);
			$(this).siblings('.count-ingredient').text(countIngredient);
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

			//remove bit img
			
			var self = $(this)
			$('.pizza-img').children('img').each(function() {
			// var ingredientName = self.siblings('img').attr('src');
			// ingredientName = 'img/bg-' + ingredientName;
			// if($(this).attr('src') == ingredientName) {
			// 	alert('chekc')
			// }
			// console.log($(this).attr('src'));
			// console.log(ingredientName);
			// console.log(ingredientName);
			// console.log(bigImgAttr);
			// console.log(bigImgCheck);
			// console.log(ingredientName);

			// console.log(bigImgAttr);

			})


		}


	})

	$('#left').on('click', '.ingredient', function(event) {
		 var countIngredient = Number($(this).find('.count-ingredient').data('count'));
		 	countIngredient++;
		 $(this).find('.count-ingredient').data('count', countIngredient);


			$(this).find('.count-ingredient').fadeIn(100).text(countIngredient);
			//
			var priceItem = $(this).find('.price-ingredient').data('price');
			var weightItem = $(this).find('.weight-ingredient').data('weight');

			price += priceItem;
			weight += weightItem;

			$('.price-result').text(price);
			$('.weight-result').text(weight);
	});


})
