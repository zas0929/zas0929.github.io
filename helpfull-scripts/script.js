$(document).ready(function() {
	// catch click without list test
        $('.cities-main-list span').on('click', function() {
            $('.cities-drop').slideToggle(200);
            $(document).on('click', function(event) {
                if ($(event.target).closest(".cities-main").length) {
                    return;
                }
                   else {
                    $(".cities-drop").slideUp("200");
                    event.stopPropagation();
                }
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
