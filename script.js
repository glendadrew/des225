// JavaScript Document

$(function () {
    console.log('reading');

    var myVal = $('#current').offset().top;

    moveSchedule();

    function moveSchedule() {

         console.log("moving schedule up");

        $('html, body').animate({
            scrollTop: myVal
        }, 500, moveNav);
    }

    function moveNav() {

        console.log("moving nav down");
        $('nav').css('position','absolute').animate({
            top: myVal-150
        }, 500);
        console.log('nav is : ' + $('nav').top);


    }

    $('a').each(function () {
        $(this).attr({
            target: "_blank",
        });
    });
});
