$(function(){
    $(document).scroll(function(){
        var $nav = $('#main-navbar')
        $nav.toggleClass('scrolled',$(this).scrollTop() > $nav.height())
        $('#to-top').toggleClass('display',$(this).scrollTop() > $nav.height())
    })
})

$('.navbar-toggler').on('click',() => {
    $('#main-navbar').toggleClass('pressed')
})

$("#to-top").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({scrollTop: 0}, 100);
 });