$(document).ready(function () {
    $('.remove').on('click', function() {
        $.ajax({
            url: '/show',
            async: true
        }).done(function(data) {
            $(".tasks-list").html(data);
        })
    })
})
