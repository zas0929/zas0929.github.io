'use strict'
function getCard(){
	var suit = Math.floor(Math.random() * 4), card, 
	cardNumber = Math.floor(Math.random() * deck[suit].length);
	card = [suit, deck[suit].splice(cardNumber, 1)[0]];
	return  card;
}
function showCards(cards) {
	var tempString = "";
	for(var i = 0; i < cards.length; i++) {
		tempString += cards[i][1] + " ";
		switch(cards[i][0]) {
			case 0: tempString += "Пика";
			break;
			case 1: tempString += "Треф";
			break;
			case 2: tempString += "Бубна";
			break;
			case 3: tempString += "Чирва";
			break;
		}
		if (i != cards.length - 1) {
			tempString +=", ";
		}
		
		
	}
	return tempString;
}


var deck=[
			[ 2,3,4,5,6,7,8,9,10,"J","Q","K","A" ],
			[ 2,3,4,5,6,7,8,9,10,"J","Q","K","A" ],
			[ 2,3,4,5,6,7,8,9,10,"J","Q","K","A" ],
			[ 2,3,4,5,6,7,8,9,10,"J","Q","K","A" ]
		],
	playerHand = [getCard(), getCard()];

console.log(showCards(playerHand));