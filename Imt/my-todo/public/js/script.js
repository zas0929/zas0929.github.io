$(document).ready(function () {

    $('.not-done').on('click', function() {
        $(this).removeClass('not-done');
        $(this).addClass('done');
        $(this).text('done');
        var taskId = $(this).parent('p').data('id');
        $.ajax({
            url: '/done?taskId=' + taskId + '',
            async: true,
        }).done(function() {
            console.log('done');
        })
    });

    $('.edit').one('click', function() {
        $(this).after('<form><br><input type="text" name="task" class="edit-task" placeholder="task"><br><br><input type="text" name="time" class="edit-time" placeholder="time"><br><br><button type="submit" name="button" class="edit-ok">Ok</button><br><br><b>change to: </b><span class="not-done">not done</span> or <span class="done">done</span></form>')
        var taskId = $(this).siblings('p').data('id');
        $(this).siblings('form').find('.edit-ok').on('click', function(event) {
            var taskEdit = $(this).siblings(".edit-task").val();
            var timeEdit = $(this).siblings(".edit-time").val();
            $.ajax({
                url: '/edit?editId=' + taskId + '&taskEdit=' + taskEdit + '&timeEdit=' + timeEdit + '',
                async: true,
            }).done(function() {
                console.log('edited');
            })
        })
        $(this).siblings('form').find('.not-done').on('click', function() {
            $(this).parent('form').siblings('p').find('span').removeClass('done');
            $(this).parent('form').siblings('p').find('span').addClass('not-done');
            $(this).parent('form').siblings('p').find('span').text('not done');
            $.ajax({
                url: '/notdone?taskId=' + taskId + '',
                async: true,
            }).done(function() {
                console.log('not done');
            })
        })
        $(this).siblings('form').find('.done').on('click', function() {
            $(this).parent('form').siblings('p').find('span').removeClass('not-done');
            $(this).parent('form').siblings('p').find('span').addClass('done');
            $(this).parent('form').siblings('p').find('span').text('done');
            $.ajax({
                url: '/done?taskId=' + taskId + '',
                async: true,
            }).done(function() {
                console.log('done');
            })
        })

    })
    $(".remove").on('click', function() {
        var taskId = $(this).siblings('p').data('id');
        $(this).parent('div').fadeOut(50);
        $.ajax({
            url: '/remove?removeId=' + taskId + '',
            async: true,
        }).done(function() {
            console.log("removed");
        })
    })
    $('.add-task').on('click', function() {
        var taskAdd = $(".confirm-task").val();
        var timeAdd = $(".confirm-time").val();
        $.ajax({
            url: '/add?taskAdd=' + taskAdd + '&timeAdd=' + timeAdd + '',
            async: true,
        }).done(function() {
            alert('added');
        })
    });
    $('.today-check').on('change', function() {
        if ($(this).prop("checked")) {
            $.ajax({
                url: '/today',
                async: true
            }).done(function(data) {
                if($(".tasks-list").children('div').hasClass('all-tasks')) {
                    $(".tasks-list").html('<div class="today-list">' + data + '<div>');
                }
                else {
                    $(".tasks-list").append('<div class="today-list">' + data + '<div>');
                }

                //ability to remove after check
                $(".remove").on('click', function() {
                    var taskId = $(this).siblings('p').data('id');
                    $(this).parent('div').fadeOut(50);
                    $.ajax({
                        url: '/remove?removeId=' + taskId + '',
                        async: true,
                    }).done(function() {
                        console.log("removed");
                    })
                })
                //ability edit after checked
                $('.edit').one('click', function() {
                    $(this).after('<form><br><input type="text" name="task" class="edit-task" placeholder="task"><br><br><input type="text" name="time" class="edit-time" placeholder="time"><br><br><button type="submit" name="button" class="edit-ok">Ok</button><br><br><b>change to: </b><span class="not-done">not done</span> or <span class="done">done</span></form>')
                    var taskId = $(this).siblings('p').data('id');
                    $(this).siblings('form').find('.edit-ok').on('click', function(event) {
                        var taskEdit = $(this).siblings(".edit-task").val();
                        var timeEdit = $(this).siblings(".edit-time").val();
                        $.ajax({
                            url: '/edit?editId=' + taskId + '&taskEdit=' + taskEdit + '&timeEdit=' + timeEdit + '',
                            async: true,
                        }).done(function() {
                            console.log('edited');
                        })
                    })
                    $(this).siblings('form').find('.not-done').on('click', function() {
                        $(this).parent('form').siblings('p').find('span').removeClass('done');
                        $(this).parent('form').siblings('p').find('span').addClass('not-done');
                        $(this).parent('form').siblings('p').find('span').text('not done');
                        $.ajax({
                            url: '/notdone?taskId=' + taskId + '',
                            async: true,
                        }).done(function() {
                            console.log('not done');
                        })
                    })
                    $(this).siblings('form').find('.done').on('click', function() {
                        $(this).parent('form').siblings('p').find('span').removeClass('not-done');
                        $(this).parent('form').siblings('p').find('span').addClass('done');
                        $(this).parent('form').siblings('p').find('span').text('done');
                        $.ajax({
                            url: '/done?taskId=' + taskId + '',
                            async: true,
                        }).done(function() {
                            console.log('done');
                        })
                    })

                })
                //ability make done after checked
                $('.not-done').on('click', function() {
                    $(this).removeClass('not-done');
                    $(this).addClass('done');
                    $(this).text('done');
                    var doneId = $(this).parent('p').data('id');
                    $.ajax({
                        url: '/done?doneId=' + doneId + '',
                        async: true,
                    }).done(function() {
                        console.log('done');
                    })
                });

            })
        }
        else {
            $(".tasks-list").find('.today-list').fadeOut(50);
        }


    })
    $('.tomorrow-check').on('change', function() {
        if ($(this).prop("checked")) {
            $.ajax({
                url: '/tomorrow',
                async: true
            }).done(function(data) {
                if($(".tasks-list").children('div').hasClass('all-tasks')) {
                    $(".tasks-list").html('<div class="tomorrow-list">' + data + '<div>');
                }
                else {
                    $(".tasks-list").append('<div class="tomorrow-list">' + data + '<div>');
                }

                //ability to remove after check
                $(".remove").on('click', function() {
                    var taskId = $(this).siblings('p').data('id');
                    $(this).parent('div').fadeOut(50);
                    $.ajax({
                        url: '/remove?removeId=' + taskId + '',
                        async: true,
                    }).done(function() {
                        console.log("removed");
                    })
                })
                //ability edit after checked
                $('.edit').one('click', function() {
                    $(this).after('<form><br><input type="text" name="task" class="edit-task" placeholder="task"><br><br><input type="text" name="time" class="edit-time" placeholder="time"><br><br><button type="submit" name="button" class="edit-ok">Ok</button><br><br><b>change to: </b><span class="not-done">not done</span> or <span class="done">done</span></form>')
                    var taskId = $(this).siblings('p').data('id');
                    $(this).siblings('form').find('.edit-ok').on('click', function(event) {
                        var taskEdit = $(this).siblings(".edit-task").val();
                        var timeEdit = $(this).siblings(".edit-time").val();
                        $.ajax({
                            url: '/edit?editId=' + taskId + '&taskEdit=' + taskEdit + '&timeEdit=' + timeEdit + '',
                            async: true,
                        }).done(function() {
                            console.log('edited');
                        })
                    })
                    $(this).siblings('form').find('.not-done').on('click', function() {
                        $(this).parent('form').siblings('p').find('span').removeClass('done');
                        $(this).parent('form').siblings('p').find('span').addClass('not-done');
                        $(this).parent('form').siblings('p').find('span').text('not done');
                        $.ajax({
                            url: '/notdone?taskId=' + taskId + '',
                            async: true,
                        }).done(function() {
                            console.log('not done');
                        })
                    })
                    $(this).siblings('form').find('.done').on('click', function() {
                        $(this).parent('form').siblings('p').find('span').removeClass('not-done');
                        $(this).parent('form').siblings('p').find('span').addClass('done');
                        $(this).parent('form').siblings('p').find('span').text('done');
                        $.ajax({
                            url: '/done?taskId=' + taskId + '',
                            async: true,
                        }).done(function() {
                            console.log('done');
                        })
                    })

                })
                //ability make done after checked
                $('.not-done').on('click', function() {
                    $(this).removeClass('not-done');
                    $(this).addClass('done');
                    $(this).text('done');
                    var doneId = $(this).parent('p').data('id');
                    $.ajax({
                        url: '/done?doneId=' + doneId + '',
                        async: true,
                    }).done(function() {
                        console.log('done');
                    })
                });
            })
        }
        else {
            $(".tasks-list").find('.tomorrow-list').fadeOut(50);
        }

    })
})
