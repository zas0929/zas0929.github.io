"use strict"
//heart - чирва
// diamond - бубна
// club - крест
// spade - пика
var cardStack = [['2heart', '3heart', '4heart', '5heart', '6heart', '7heart', '8heart', '9heart', '10heart', 'Jheart', 'Qheart', 'Kheart', 'Aheart'],
                 ['2diamond', '3diamond', '4diamond', '5diamond', '6diamond', '7diamond', '8diamond', '9diamond', '10diamond', 'Jdiamond', 'Qdiamond', 'Kdiamond', 'Adiamond'],
                 ['2club', '3club', '4club', '5club', '6club', '7club', '8club', '9club', '10club', 'Jclub', 'Qclub', 'Kclub', 'Aclub'],
                // ['2spade', '3spade', '4spade',  'Aspade',  'Aspade',  'Aspade',  'Aspade',  'Aspade', 'Aspade',  'Aspade',  'Aspade',  'Aspade', 'Aspade']
                 ['2spade', '3spade', '4spade', '5spade', '6spade', '7spade', '8spade', '9spade', '10spade', 'Jspade', 'Qspade', 'Kspade', 'Aspade']
               ]


var gamerStack = [];
var gamerPoints = [];
var dealerStack = [];
var dealerPoints = [];
//игрок получает карты
function randCard() {
  var rand1 = 0 + Math.random() * (3 + 1 - 0);
      rand1 = Math.floor(rand1);

  var rand2 = 0 + Math.random() * (12 + 1 - 0);
      rand2 = Math.floor(rand2);

      var userCard = cardStack[rand1][rand2];
//если валет и выше
      if (userCard == "Jheart" || userCard == "Jdiamond" || userCard == "Jclub" || userCard == "Jspade") {
        var userPoints = 2;
      }
      else if (userCard == "Qheart" || userCard == "Qdiamond" || userCard == "Qclub" || userCard == "Qspade") {
        var userPoints = 3;
      }
      else if (userCard == "Kheart" || userCard == "Kdiamond" || userCard == "Kclub" || userCard == "Kspade") {
        var userPoints = 4;
      }
      else if (userCard == "Aheart" || userCard == "Adiamond" || userCard == "Aclub" || userCard == "Aspade") {
        var userPoints = 11;
      }
      else if (userCard == undefined) {
        userPoints = 0;
      }
      else {
        userPoints = parseInt(userCard);
      }
      //Пушим в массив с названиями карт
      gamerStack.push(userCard);
      //Пушим в массимв с очками
      gamerPoints.push(userPoints);
      //убираем карты из колоды
      cardStack[rand1].splice(rand2, 1);


}
//даем карты пока игрок соглашается
var giveCard = confirm("Дать карту?");
while (giveCard && gamerStack.length < 10) {
    randCard();
    alert("У вас " + gamerStack);
    var giveCard = confirm("Дать ещу одну карту?");


}
//считаем очки
var gamerCount = 0;
for(var i = 0; i < gamerPoints.length; i++) {
  //если очков больше 11, тузы = 1
  if (gamerCount >= 11 && (gamerStack[i] == "Aheart" || gamerStack[i] == "Adiamond" || gamerStack[i] == "Aclub" || gamerStack[i] == "Aspade")) {
    gamerCount += 1
    console.log(gamerCount);
  }
  else {
    gamerCount = gamerCount + gamerPoints[i];
    console.log(gamerCount);
  }

}

document.write("<h2>Карты, на ваших руках: " + gamerStack + "</h3>");
document.write("<h2>У вас " + gamerCount + " очков </h3>");
if (gamerCount > 21) {
  alert("Перебор! Вы проиграли")
}
else if (gamerCount == 21) {
  alert("Победа! У вас Black Jack!")
}
else {

//Играет диллер
function randCardDealer() {
  var rand1 = 0 + Math.random() * (3 + 1 - 0);
      rand1 = Math.floor(rand1);

  var rand2 = 0 + Math.random() * (12 + 1 - 0);
      rand2 = Math.floor(rand2);

      var userCard = cardStack[rand1][rand2];
//если валет и выше
      if (userCard == "Jheart" || userCard == "Jdiamond" || userCard == "Jclub" || userCard == "Jspade") {
        var userPoints = 2;
      }
      else if (userCard == "Qheart" || userCard == "Qdiamond" || userCard == "Qclub" || userCard == "Qspade") {
        var userPoints = 3;
      }
      else if (userCard == "Kheart" || userCard == "Kdiamond" || userCard == "Kclub" || userCard == "Kspade") {
        var userPoints = 4;
      }
      else if (userCard == "Aheart" || userCard == "Adiamond" || userCard == "Aclub" || userCard == "Aspade") {
        var userPoints = 11;
      }
      else if (userCard == undefined) {
        userPoints = 0;
      }
      else {
        userPoints = parseInt(userCard);
      }
      //Пушим в массив с названиями карт
      dealerStack.push(userCard);
      //Пушим в массимв с очками
      dealerPoints.push(userPoints);
      //убираем карты из колоды
      cardStack[rand1].splice(rand2, 1);


}
//даем карты пока не наберется минимум 17 очков
var dealerCount = 0;
for(var i = 0; dealerCount < 17; i++) {
  randCardDealer();
  if (dealerCount >= 11 && (dealerStack[i] == "Aheart" || dealerStack[i] == "Adiamond" || dealerStack[i] == "Aclub" || dealerStack[i] == "Aspade")) {
    dealerCount += 1;
    console.log(dealerCount);
  }
  else {
    dealerCount = dealerCount + dealerPoints[i];
    console.log(dealerCount);
  }

}

if (dealerCount > 21) {
  alert("Дилер перебрал, вы выиграли")
}
else if (gamerCount > dealerCount) {
  alert("Вы выиграли")
}
else if (gamerCount == dealerCount) {
  alert("Ничья!")
}
else {
  alert("У диллера больше, вы проиграли")
}

//считаем очки
document.write("<h2>Карты дилера: " + dealerStack + "</h3>");
document.write("<h2>У дилера " + dealerCount + " очков </h3>");
}
