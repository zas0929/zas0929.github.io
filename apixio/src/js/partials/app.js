
$(document).ready(function() {

  $('.header__bottom-slider').slick({
    dots: true
  });
  $('.word__slider').slick();

  $('.main-menu').slicknav({
    label: ''
  });

  //mobile menu
  $('.sub-menu-wrapper > a').removeClass('slicknav_item');
  $('.slicknav_arrow').on('click', function() {
    $('.sub-menu').slideToggle(200);
    $('.slicknav_arrow').toggleClass('rotate-arrow');
  })
});
