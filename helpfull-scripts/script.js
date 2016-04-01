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
