$(document).ready(function () {
    $('.remove').on('click', function() {
        $.ajax({
            url: '/localhost/mongoTodo',
            async: true
        }).done(function(data) {
            $(".tasks-list").html(data);
        })
    })
})
