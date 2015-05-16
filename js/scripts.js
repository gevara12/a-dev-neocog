;
$(function () {

    $('.search-form label').on('click', function () {
        $('.search-form').toggleClass('show-input');
        $('#search').focus();
        return false;
    });


    $('.utility a').click(function () {
        $(this).closest(".user-item").slideToggle();
    });

    $('.tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $(".chosen-select").chosen({disable_search_threshold: 10});


    /*var $el, leftPos, newWidth,
     $mainNav = $("#example-one");

     $mainNav.append("<li id='magic-line'></li>");
     var $magicLine = $("#magic-line");

     $magicLine
     .width($(".active").width())
     .css("left", $(".active a").position().left)
     .data("origLeft", $magicLine.position().left)
     .data("origWidth", $magicLine.width());*/

    /* $("#example-one li a").hover(function() {
     $el = $(this);
     leftPos = $el.position().left;
     newWidth = $el.parent().width();
     $magicLine.stop().animate({
     left: leftPos,
     width: newWidth
     });
     }, function() {
     $magicLine.stop().animate({
     left: $magicLine.data("origLeft"),
     width: $magicLine.data("origWidth")
     });
     });
     */


    /* $("#example-one li a").click(function () {
     $(this).parent().siblings().removeClass("active");
     $(this).parent().addClass("active");
     $el = $(".active a");
     leftPos = $el.position().left;
     newWidth = $el.parent().width();
     $magicLine.stop().animate({
     left: leftPos,
     width: newWidth
     });
     });

     $(window).resize(function () {
     $magicLine
     .width($(".active").width())
     .css("left", $(".active a").position().left)
     .data("origLeft", $magicLine.position().left)
     .data("origWidth", $magicLine.width());
     });*/

    $('.state-menu').on('click', function () {
        $('body').toggleClass('menu-close');
        if ($('footer').hasClass('show-block')) {
            $('.appear-block').hide();
            $('footer').removeClass('show-block');
        } else {
            $('.appear-block').show();
        }

        return false;
    });

    $('.open-btn').on('click', function () {
        $('footer').toggleClass('show-block');
        $('.appear-block').show();
        return false;
    });

    var exampleTab = $("#example-one li");

    $(window).resize(function () {

        $(".slider").css({
            left: $(".active a").position().left
        });

    });

    exampleTab.click(function (e) {
        if ($(this).hasClass('slider')) {
            return;
        }

        var wTab = $(".active").width();
        var whatTab = $(this).index();
        var howFar = wTab * whatTab;

        $(".slider").css({
            left: howFar + "px",
            width: wTab
        });

    });

});