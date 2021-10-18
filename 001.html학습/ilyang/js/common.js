$(function() {
    var gnbMenu1 = $('#gnb > li > a');
    gnbMenu1.on('mouseover', gnbMenuHandler1);

    function gnbMenuHandler1() {
        //console.log($(this));
        if ($('html').hasClass('pc')) {
            gnbLeaveHandler();
            $(this).addClass('on');
            $('.allmenu').removeClass('on');
        }
    }

    gnbMenu1.on('click', gnbMenuHandler2);

    function gnbMenuHandler2() {
        if ($('html').hasClass('mobile')) {
            $(this).toggleClass('on');
        }
    }

    $('#gnb').on('mouseleave', gnbLeaveHandler);

    function gnbLeaveHandler() {
        $('#gnb > li > a.on').removeClass('on');
    }

    $(window).on('resize', windowResizeHandler);

    function windowResizeHandler() {
        var winW = $(this).innerWidth();
        if (winW >= 1100) {
            $('html').removeClass('mobile');
            $('html').addClass('pc');
        } else {
            $('html').removeClass('pc');
            $('html').addClass('mobile');
        }
    }
    //$(window).resize();
    $(window).trigger('resize');

    $('.allmenu').on('click', allmenuFnc);

    function allmenuFnc(e) {
        $(this).toggleClass('on');
        e.preventDefault();
    }

    $('.btn-menu-close a').on('click', allmenuCloseFnc);

    function allmenuCloseFnc(e) {
        $('.allmenu.on').removeClass('on');
        e.preventDefault();
    }
});