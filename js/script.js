$(function(){
    $(document).scroll(function(){
        var $nav = $('#main-navbar')
        $nav.toggleClass('scrolled',$(this).scrollTop() > $nav.height())
    })
})

$('.navbar-toggler').on('click',() => {
    $('#main-navbar').toggleClass('pressed')
})