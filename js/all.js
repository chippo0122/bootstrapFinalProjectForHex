$(document).ready(function () {
    $('.load-in').addClass('fadeIn');
    $('#month').hover( function (e){
        e.preventDefault();
        $('.rank-bg-fill-area').toggleClass('month');
    })
    $('#latest').hover( function (e){
        e.preventDefault();
        $('.rank-bg-fill-area').toggleClass('latest');
    })
    $('#season').hover( function (e){
        e.preventDefault();
        $('.rank-bg-fill-area').toggleClass('season');
    })
    $(window).scroll(function(e){
        var winHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        //背景視差
        $('#plur').css('background-position-y', (scrollPos/3)+'px');
        $('#member').css('background-position-x', "-"+(scrollPos/5)+'px');
        //動態進場
        $('.scrollIn').each( function(){
            var targetPos = $(this).offset().top;
            if( targetPos <= ( ( winHeight + scrollPos ) - 150 ) ){
                $(this).addClass('fadeIn');
            }
        })
    })
});