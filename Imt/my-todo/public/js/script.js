$(document).ready(function () {
    $('.today-check').on('change', function() {
        var self;
        if ($(this).prop("checked")) {
            $.ajax({
                url: '/today',
                async: true
            }).done(function(data) {
            })
        }
        else {
                $(".tasks-list").find('div').hide();
        }

    })

    $('.tomorrow-check').on('change', function() {
        if ($(this).prop("checked")) {
            $.ajax({
                url: '/tomorrow',
                async: true
            }).done(function(data) {

                $(".tasks-list").html(data);
            })
        }
        else {
            // $('.tasks-list').children().hide();
        }

    })
})
