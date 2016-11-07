$(document).ready(function() {
    $('.sign-up').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('.reg').fadeIn(400);
        $('.log-in').fadeOut(400);
    });
    $('.main-block').on('click', function(event) {
        $('.reg').fadeOut(400);
    })

    $('.sign-in').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $('.log-in').fadeIn(400);
        $('.reg').fadeOut(400);
    });
    $('.main-block').on('click', function(event) {
        $('.log-in').fadeOut(400);
    })
})
