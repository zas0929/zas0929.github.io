(function($){
        $(window).load(function(){
            $(".cars").mCustomScrollbar({
            theme:"dark"
            });
        });
    })(jQuery);
$(document).ready(function() {
  $('.star').on('click', function(){
    $(this).toggleClass('active');
  });
  $('.delete').on('click', function(){
    $(this).toggleClass('active');
  });


  $('.navbar-toggle').on('click', function () {
    $('.overlay').fadeToggle(200);
  });
  // popover
  $(function () {
  $('[data-toggle="popover"]').popover({html:true})
})
//flip
/*
$('.pos-item').mouseenter(function() {
  $(this).addClass('flip');
});
$('.pos-item').mouseleave(function() {
  $(this).removeClass('flip');
});
*/
$(".posibilities-content .pos-item").flip({
  axis: 'y',
  trigger: 'hover',
  speed: 600
});
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});
//slider
$('.carousel').carousel({
  interval: 20000
});
//close info
$('.close-info-block').on('click', function () {
  $('.info-block').fadeOut(200, function() {
    $('.cabinet-main').css('margin-top', '50px');
  });

});

});

jQuery(document).ready(function() {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
  });

});
$(window).resize(function () {
  if ($(window).width() > 768 ) {
    $('.overlay').fadeOut(200);
  }
 });
 //sticky
 $(document).ready(function(){
   $(".under-menu .logo").sticky({ topSpacing: 0, className: 'sticky', wrapperClassName: 'my-wrapper' });
 });
