'use strict'
var menuItem = $('.menu').children(),
    menuCatalog = $('.menu').children().eq(1),
    redBg = 'style="background: #c00"';



menuItem.last().after('<li><a href="#"' + redBg + '>FAQ</a></li>');
menuCatalog.children('ul').append('<li><a href="#"' + redBg + '>Спортивная одежда</a></li>');
$('<ul><li><a href="#"' + redBg + '>Кеды</a></li></ul>').appendTo(menuCatalog.find('li').last());
menuCatalog.find('li').last().before('<li><a href="#" ' + redBg + '>Кроссовки</a></li>');

$('<li><a href="#" ' + redBg + '>Дубленки</a></li>').insertAfter(menuCatalog.find('ul').children().first().find('ul').children().first());
menuCatalog.find('ul').children().eq(1).find('ul').children().last().after('<li><a href="#" ' + redBg + '>Бриджи</a></li>');
menuCatalog.find('ul').children().eq(2).find('ul').prepend('<li><a href="#" ' + redBg + '>Бандана</a></li>');
